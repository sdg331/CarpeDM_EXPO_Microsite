import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { stripTypeScriptTypes } from 'node:module';

const sceneSource = stripTypeScriptTypes(await readFile(new URL('../src/data/scenes.ts', import.meta.url), 'utf8'));
const { scenes, conversationScenes } = await import(`data:text/javascript;base64,${Buffer.from(sceneSource).toString('base64')}`);
const momentSource = stripTypeScriptTypes(await readFile(new URL('../src/data/experience.ts', import.meta.url), 'utf8'));
const { workplaceMoments } = await import(`data:text/javascript;base64,${Buffer.from(momentSource).toString('base64')}`);
assert.equal(conversationScenes.length, workplaceMoments.length, 'Every conversation has a scene');
assert.equal(new Set(conversationScenes).size, workplaceMoments.length, 'Conversation scenes are distinct');
assert(conversationScenes.every(scene => scenes[scene]), 'Conversation scenes exist');

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
for (const asset of ['mirrorting-hero-monumental-v1.webp', 'kiosk-front.webp', 'workplace-ui-example.jpg', ...Object.values(scenes).map(scene => scene.file), 'four-fit-silver-glass-v2.webp', 'expression-face-mesh-glass-v2.webp', 'workplace-doors-glass-v1.webp', 'hardware/sm-assembled-v1.webp']) {
  await access(resolve('dist/media', asset));
}
console.log('Seven portable entries, distinct detail metadata and shared media passed');
await access(resolve('dist/media/hardware/sm-camera-atlas-v4.webp'));
