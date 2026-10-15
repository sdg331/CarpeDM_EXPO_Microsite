import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const siteEntries = ['index.html', 'service/index.html', 'four-fit/index.html', 'system/index.html', 'use-cases/index.html', 'team/index.html', 'expo/index.html'];
export const sha256 = data => createHash('sha256').update(data).digest('hex');
export const privatePath = path => path.split(/[\\/]/).some(part =>
  ['.git', 'node_modules', '_workspace', '.DS_Store'].includes(part)
  || /^\.env(?:\.|$)/i.test(part) || /\.(?:pem|key|p12|pfx|log)$/i.test(part)
  || /^(?:credentials|service-account).*\.json$/i.test(part));

async function listFiles(root, prefix = '') {
  const files = [];
  for (const entry of await readdir(join(root, prefix), { withFileTypes: true })) {
    const path = join(prefix, entry.name);
    assert(!entry.isSymbolicLink(), `Release must not contain symlinks: ${path}`);
    if (entry.isDirectory()) files.push(...await listFiles(root, path));
    else files.push(path);
  }
  return files.sort();
}

export async function verifyRelease(directory) {
  const root = resolve(directory);
  const paths = await listFiles(root);
  for (const required of [...siteEntries, 'dashboard/index.html', '.nojekyll']) {
    assert(paths.includes(required), `Missing release file: ${required}`);
  }
  const manifest = [];
  for (const path of paths) {
    assert(!privatePath(path), `Private/dependency file in release: ${path}`);
    const data = await readFile(join(root, path));
    if (/\.(?:html|js|css)$/i.test(path)) {
      const source = data.toString('utf8');
      assert(!/https?:\/\/(?:localhost|127(?:\.\d{1,3}){3}|0\.0\.0\.0|\[::1\])(?=[:/\s"'`]|$)/i.test(source), `Development URL in release: ${path}`);
      if (path.endsWith('.html')) {
        assert.match(source, /<html\b[^>]*lang="ko"/, `Missing Korean document language: ${path}`);
        assert.match(source, /<script\b[^>]*src=/, `Missing application bundle: ${path}`);
        assert.match(source, /<link\b[^>]*rel=["']stylesheet["']/, `Missing application stylesheet: ${path}`);
        for (const match of source.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
          await verifyAsset(match[1], path, root);
        }
      } else if (path.endsWith('.css')) {
        for (const match of source.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) {
          await verifyAsset(match[1], path, root);
        }
      }
    }
    manifest.push({ path: path.split(sep).join('/'), bytes: data.length, sha256: sha256(data) });
  }
  return manifest;
}

async function verifyAsset(value, owner, root) {
  if (/^(?:data:|https?:|#)/i.test(value)) return;
  assert(!value.startsWith('/') && !value.includes('\\'), `Nonportable asset in ${owner}: ${value}`);
  const path = decodeURIComponent(value.split(/[?#]/)[0]);
  if (!path) return;
  const destination = resolve(root, dirname(owner), path);
  const scope = owner.startsWith(`dashboard${sep}`) ? join(root, 'dashboard') : root;
  const offset = relative(scope, destination);
  assert(offset !== '..' && !offset.startsWith(`..${sep}`), `Asset escapes its application in ${owner}: ${value}`);
  await access(destination);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const root = fileURLToPath(new URL('../', import.meta.url));
    const manifest = await verifyRelease(join(root, 'dist'));
    const report = JSON.parse(await readFile(join(root, '_workspace/release-report.json'), 'utf8'));
    assert.deepEqual(manifest, report.artifacts, 'Release files differ from the last verified build; run build:release again');
    console.log(`Verified ${manifest.length} release files, both applications and SHA-256 manifest.`);
  } catch (error) {
    console.error(`Release verification failed: ${error.message}`);
    process.exitCode = 1;
  }
}
