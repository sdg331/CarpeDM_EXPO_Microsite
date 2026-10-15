import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import ts from 'typescript';
import { localizedHref, resolveLanguage, t } from '../src/i18n.ts';

for (const [search, saved, expected] of [
  ['', null, 'ko'], ['', 'en', 'en'], ['', 'invalid', 'ko'],
  ['?lang=en', 'ko', 'en'], ['?lang=ko', 'en', 'ko'],
  ['?lang=invalid', 'en', 'en'], ['?lang=EN', null, 'ko'],
]) assert.equal(resolveLanguage(search, saved), expected);

const base = 'https://example.com/CarpeDM_EXPO_Microsite/service/';
for (const [href, expected] of [
  ['../team/', '../team/?lang=en'],
  ['../use-cases/?context=team#uses-education', '../use-cases/?context=team&lang=en#uses-education'],
  ['?lang=ko#service-devices', '?lang=en#service-devices'],
]) assert.equal(localizedHref(href, 'en', base), new URL(expected, base).href);
assert.equal(new URL(localizedHref('../expo/', 'ko', base)).searchParams.get('lang'), 'ko');
assert.equal(t('작품 소개', 'en'), 'The project');
assert.equal(t('작품 소개', 'ko'), '작품 소개');
assert.equal(t('4-Fit MirrorTing', 'en'), '4-Fit MirrorTing');

// Exercise page initialization with storage enabled and with reads/writes blocked.
const saved = new Map([['mirrorting.language', 'en']]);
const scenarios = [
  { search: '', storage: { getItem: key => saved.get(key), setItem: (key, value) => saved.set(key, value) }, expected: 'en' },
  { search: '?lang=ko', storage: { getItem: key => saved.get(key), setItem: (key, value) => saved.set(key, value) }, expected: 'ko' },
  { search: '?lang=en', storage: { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } }, expected: 'en' },
  { search: '', storage: { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } }, expected: 'ko' },
];
try {
  for (const [index, scenario] of scenarios.entries()) {
    globalThis.window = { location: { search: scenario.search }, localStorage: scenario.storage };
    const module = await import(`../src/i18n.ts?storage-test=${index}`);
    assert.equal(module.language, scenario.expected);
    assert.equal(module.t('작품 소개'), scenario.expected === 'en' ? 'The project' : '작품 소개');
  }
} finally { delete globalThis.window; }
assert.equal(saved.get('mirrorting.language'), 'ko', 'Explicit selection replaces the saved preference');

const english = JSON.parse(await readFile(new URL('../src/data/en.json', import.meta.url), 'utf8'));
for (const [key, value] of Object.entries(english)) {
  assert.equal(typeof value, 'string', key);
  assert(value.trim() && !/[가-힣]/u.test(value), `English translation: ${key}`);
  assert.equal(t(key, 'ko'), key, 'Korean wording is preserved');
}
let translatedCalls = 0;
for (const file of await readdir(new URL('../src', import.meta.url), { recursive: true })) {
  if (!/\.tsx?$/.test(file)) continue;
  const code = await readFile(new URL(`../src/${file}`, import.meta.url), 'utf8');
  const source = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);
  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText(source) === 't' && ts.isStringLiteral(node.arguments[0])) {
      assert(Object.hasOwn(english, node.arguments[0].text), `${file}: missing English translation`);
      translatedCalls++;
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
}
assert(translatedCalls > 0, 'Translation coverage inspected the source calls');
for (const entry of ['index.html', 'expo/index.html', ...['service', 'four-fit', 'system', 'use-cases', 'team'].map(page => `${page}/index.html`)]) {
  const html = await readFile(new URL(`../${entry}`, import.meta.url), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  const description = html.match(/name="description"\s+content="([^"]+)"/)[1];
  assert(Object.hasOwn(english, title), `${entry}: English title`);
  assert(Object.hasOwn(english, description), `${entry}: English description`);
}
console.log('Language priority, persistence, blocked storage, portable links and translation coverage passed');
