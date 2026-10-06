import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { stripTypeScriptTypes } from 'node:module';

const source = stripTypeScriptTypes(await readFile(new URL('../src/data/paths.ts', import.meta.url), 'utf8'));
globalThis.document = { getElementById: () => ({ dataset: { siteRoot: '../' } }), baseURI: 'https://sdg331.github.io/CarpeDM_EXPO_Microsite/use-cases/', };
const cases = [
  [{ DEV: true }, 'http://127.0.0.1:4174/#/overview'],
  [{ DEV: false }, 'https://sdg331.github.io/CarpeDM_EXPO_Microsite/dashboard/#/overview'],
  [{ DEV: true, VITE_DASHBOARD_URL: '' }, ''],
  [{ DEV: false, VITE_DASHBOARD_URL: 'https://example.com/expo/#/overview' }, 'https://example.com/expo/#/overview'],
  [{ DEV: false, VITE_DASHBOARD_URL: 'http://127.0.0.1:4174/#/overview' }, 'http://127.0.0.1:4174/#/overview'],
  ...['javascript:alert(1)', 'data:text/html,hello', '/dashboard/', '//example.com', 'https://', 'invalid'].map((url) => [{ DEV: false, VITE_DASHBOARD_URL: url }, '']),
];
for (const [env, expected] of cases) {
  const javascript = source.replaceAll('import.meta.env', JSON.stringify(env));
  const { dashboardUrl } = await import(`data:text/javascript;base64,${Buffer.from(javascript).toString('base64')}`);
  assert.equal(dashboardUrl, expected, `Dashboard URL: ${JSON.stringify(env)}`);
}
globalThis.document.getElementById = () => ({ dataset: { siteRoot: './' } });
globalThis.document.baseURI = 'https://sdg331.github.io/CarpeDM_EXPO_Microsite/';
const rootSource = source.replaceAll('import.meta.env', JSON.stringify({ DEV: false }));
const rootModule = await import(`data:text/javascript;base64,${Buffer.from(rootSource).toString('base64')}`);
assert.equal(rootModule.dashboardUrl, 'https://sdg331.github.io/CarpeDM_EXPO_Microsite/dashboard/#/overview');
delete globalThis.document;
console.log('Dashboard development URL, same-site production URL and HTTP(S)-only validation passed');
