import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const entries = ['index.html', 'service/index.html', 'four-fit/index.html', 'system/index.html', 'use-cases/index.html', 'team/index.html', 'expo/index.html'];
const titles = new Set();
for (const entry of entries) {
  const path = resolve('dist', entry);
  const html = await readFile(path, 'utf8');
  assert.match(html, /<html lang="ko">/, `${entry}: Korean document language`);
  const root = entry === 'index.html' ? './' : '../';
  assert(html.includes(`data-site-root="${root}"`), `${entry}: portable site root`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && html.includes('name="description"'), `${entry}: page metadata`);
  if (entry !== 'expo/index.html') {
    assert(!titles.has(title), `${entry}: distinct page title`);
    titles.add(title);
  }
  for (const asset of html.matchAll(/(?:src|href)="([^"?#]+)"/g)) {
    if (asset[1].startsWith('data:')) continue;
    assert(!asset[1].startsWith('/'), `${entry}: relative build asset`);
    await access(resolve(dirname(path), asset[1]));
  }
}
for (const asset of ['mirrorting-hero-monumental-v1.webp', 'kiosk-front.webp', 'workplace-ui-example.jpg', 'hardware/sm-assembled-v1.webp']) {
  await access(resolve('dist/media', asset));
}
console.log('Seven portable entries, distinct detail metadata and shared media passed');
