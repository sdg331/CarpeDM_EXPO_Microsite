import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { assertSourceUnchanged, publishBuild, releaseEnvironment, snapshotProject } from '../scripts/build-release.mjs';
import { sha256, siteEntries, verifyRelease } from '../scripts/verify-release.mjs';

async function temporary(t) {
  const directory = await mkdtemp(join(tmpdir(), 'carpedm-release-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  return directory;
}

async function put(root, path, content = '') {
  await mkdir(dirname(join(root, path)), { recursive: true });
  await writeFile(join(root, path), content);
}

async function fixture(t) {
  const directory = await temporary(t);
  for (const path of [...siteEntries, 'dashboard/index.html']) {
    const prefix = path === 'index.html' || path.startsWith('dashboard/') ? './' : '../';
    await put(directory, path, `<html lang="ko"><head><link rel="stylesheet" href="${prefix}assets/app.css"></head><body><script src="${prefix}assets/app.js"></script></body></html>`);
  }
  for (const prefix of ['', 'dashboard/']) {
    await put(directory, `${prefix}assets/app.js`, 'console.log("sample");');
    await put(directory, `${prefix}assets/app.css`, 'body { color: white; }');
  }
  await put(directory, '.nojekyll');
  return directory;
}

test('combined artifact has both applications and deterministic content hashes', async t => {
  const directory = await fixture(t);
  const first = await verifyRelease(directory);
  assert.deepEqual(await verifyRelease(directory), first);
  assert.equal(first.find(file => file.path === 'dashboard/assets/app.js').sha256, sha256('console.log("sample");'));
});

for (const missing of ['dashboard/index.html', 'dashboard/assets/app.js', '.nojekyll']) {
  test(`incomplete release is rejected: ${missing}`, async t => {
    const directory = await fixture(t);
    await rm(join(directory, missing));
    await assert.rejects(verifyRelease(directory));
  });
}

for (const url of ['http://127.0.0.1:4174/', 'http://localhost:5174/', 'http://[::1]:4175/']) {
  test(`development destination is rejected: ${url}`, async t => {
    const directory = await fixture(t);
    await put(directory, 'dashboard/assets/app.js', `location.href="${url}";`);
    await assert.rejects(verifyRelease(directory), /Development URL/);
  });
}

test('root-relative and cross-application assets are rejected', async t => {
  const directory = await fixture(t);
  const html = await readFile(join(directory, 'dashboard/index.html'), 'utf8');
  await put(directory, 'dashboard/index.html', html.replace('./assets/app.js', '/assets/app.js'));
  await assert.rejects(verifyRelease(directory), /Nonportable asset/);
  await put(directory, 'dashboard/index.html', html.replace('./assets/app.js', '../assets/app.js'));
  await assert.rejects(verifyRelease(directory), /escapes its application/);
});

test('CSS asset references are checked', async t => {
  const directory = await fixture(t);
  await put(directory, 'dashboard/assets/app.css', 'body { background: url("missing.webp"); }');
  await assert.rejects(verifyRelease(directory), /ENOENT/);
});

test('private files and symlinks cannot enter the artifact', async t => {
  const directory = await fixture(t);
  await put(directory, 'dashboard/.env.production', 'test-only fixture');
  await assert.rejects(verifyRelease(directory), /Private\/dependency file/);
  await rm(join(directory, 'dashboard/.env.production'));
  await symlink(join(directory, 'index.html'), join(directory, 'linked.html'));
  await assert.rejects(verifyRelease(directory), /symlinks/);
});

test('snapshot retains dirty/untracked inputs, skips private files and leaves Git untouched', async t => {
  const directory = await temporary(t);
  const source = join(directory, 'source');
  const snapshot = join(directory, 'snapshot');
  await put(source, 'src/tracked.ts', 'before');
  await put(source, 'removed.ts', 'removed');
  const git = args => execFileSync('git', args, { cwd: source, encoding: 'utf8' });
  git(['init', '--quiet']);
  git(['add', '.']);
  git(['-c', 'user.name=Release Test', '-c', 'user.email=release-test@example.invalid', '-c', 'commit.gpgsign=false', '-c', `core.hooksPath=${join(directory, 'no-hooks')}`, 'commit', '--quiet', '-m', 'chore: add release fixture']);
  await put(source, 'src/tracked.ts', 'current unsaved work');
  await put(source, 'src/untracked.ts', 'new component');
  await put(source, '.env.production', 'test-only private fixture');
  await put(source, 'public/private.key', 'test-only key fixture');
  await rm(join(source, 'removed.ts'));
  const before = git(['status', '--porcelain=v1', '-uall']);
  const result = await snapshotProject(source, snapshot);
  assert.equal(await readFile(join(snapshot, 'src/tracked.ts'), 'utf8'), 'current unsaved work');
  assert.deepEqual(result.untracked, ['src/untracked.ts']);
  await assert.rejects(access(join(snapshot, '.env.production')));
  await assert.rejects(access(join(snapshot, 'public/private.key')));
  await assert.rejects(access(join(snapshot, 'removed.ts')));
  assert.equal(git(['status', '--porcelain=v1', '-uall']), before);
  assert.equal(await readFile(join(source, 'src/tracked.ts'), 'utf8'), 'current unsaved work');
  await assertSourceUnchanged(source, result);
  await put(source, 'src/tracked.ts', 'concurrent edit with the same Git status');
  await assert.rejects(assertSourceUnchanged(source, result), /Source changed during the build/);
  await put(source, 'src/tracked.ts', 'current unsaved work');
  await put(source, 'src/arrived-later.ts', 'concurrent new file');
  await assert.rejects(assertSourceUnchanged(source, result), /Source file list changed/);
});

test('ambient VITE variables cannot change the integrated destination', () => {
  assert.deepEqual(releaseEnvironment({ PATH: '/usr/bin', VITE_DASHBOARD_URL: 'http://localhost/', VITE_MICROSITE_URL: 'wrong', CI: 'true' }), { PATH: '/usr/bin', CI: 'true' });
});

test('publishing preserves old output and rolls back both files on failure', async t => {
  const directory = await temporary(t);
  const backup = join(directory, 'backup');
  await mkdir(backup);
  await put(directory, 'dist/old.txt', 'previous release');
  await put(directory, 'candidate/new.txt', 'verified release');
  await put(directory, 'report.json', 'previous report');
  await assert.rejects(publishBuild(join(directory, 'candidate'), join(directory, 'dist'), join(directory, 'missing-report.json'), join(directory, 'report.json'), backup));
  assert.equal(await readFile(join(directory, 'dist/old.txt'), 'utf8'), 'previous release');
  assert.equal(await readFile(join(directory, 'report.json'), 'utf8'), 'previous report');
  await put(directory, 'next-report.json', 'verified report');
  await publishBuild(join(directory, 'candidate'), join(directory, 'dist'), join(directory, 'next-report.json'), join(directory, 'report.json'), backup);
  assert.equal(await readFile(join(directory, 'dist/new.txt'), 'utf8'), 'verified release');
  assert.equal(await readFile(join(backup, 'previous-dist/old.txt'), 'utf8'), 'previous release');
  assert.equal(await readFile(join(directory, 'report.json'), 'utf8'), 'verified report');
});
