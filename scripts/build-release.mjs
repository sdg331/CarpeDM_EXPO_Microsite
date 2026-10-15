import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { access, lstat, mkdir, mkdtemp, open, readFile, realpath, rename, symlink, unlink, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { privatePath, sha256, verifyRelease } from './verify-release.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const git = (directory, args) => execFileSync('git', args, { cwd: directory, encoding: 'utf8' });

export function releaseEnvironment(environment = process.env) {
  return Object.fromEntries(Object.entries(environment).filter(([name]) => !name.startsWith('VITE_')));
}

export async function snapshotProject(source, destination) {
  const names = [...new Set(git(source, ['ls-files', '--cached', '--others', '--exclude-standard', '-z']).split('\0').filter(Boolean))].sort();
  const untracked = new Set(git(source, ['ls-files', '--others', '--exclude-standard', '-z']).split('\0'));
  const files = [];
  for (const path of names) {
    if (privatePath(path)) continue;
    const original = join(source, path);
    let stat;
    try { stat = await lstat(original); } catch (error) { if (error.code === 'ENOENT') continue; throw error; }
    assert(stat.isFile(), `Source must be a regular file: ${path}`);
    const data = await readFile(original);
    const target = join(destination, path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, data, { mode: stat.mode });
    files.push({ path, sha256: sha256(data) });
  }
  return { commit: git(source, ['rev-parse', 'HEAD']).trim(), status: git(source, ['status', '--porcelain=v1', '-uall']), untracked: files.filter(file => untracked.has(file.path)).map(file => file.path), files };
}

export async function assertSourceUnchanged(source, snapshot) {
  assert.equal(git(source, ['rev-parse', 'HEAD']).trim(), snapshot.commit, 'Source commit changed during the build; retry');
  assert(git(source, ['status', '--porcelain=v1', '-uall']) === snapshot.status, 'Source file list changed during the build; retry from the current working tree');
  for (const file of snapshot.files) {
    assert.equal(sha256(await readFile(join(source, file.path))), file.sha256, `Source changed during the build: ${file.path}`);
  }
}

export async function publishBuild(candidate, output, report, reportOutput, backup) {
  const moved = [];
  const installed = [];
  try {
    for (const [next, current, previous] of [[candidate, output, join(backup, 'previous-dist')], [report, reportOutput, join(backup, 'previous-report.json')]]) {
      try { await rename(current, previous); moved.push([previous, current]); } catch (error) { if (error.code !== 'ENOENT') throw error; }
      await rename(next, current);
      installed.push([current, next]);
    }
  } catch (error) {
    for (const [current, next] of installed.reverse()) await rename(current, next);
    for (const [previous, current] of moved.reverse()) await rename(previous, current);
    throw error;
  }
}

function run(directory, args, environment) {
  console.log(`\n[${directory.endsWith('dashboard') ? 'dashboard' : 'microsite'}] npm ${args.join(' ')}`);
  const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', args, { cwd: directory, env: environment, stdio: 'inherit' });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, `npm ${args.join(' ')} failed; existing dist is preserved`);
}

async function buildRelease() {
  const { values } = parseArgs({ options: { dashboard: { type: 'string' } } });
  assert(values.dashboard, 'Usage: npm run build:release -- --dashboard /path/to/dashboard-app');
  const dashboard = await realpath(resolve(values.dashboard));
  assert.equal(JSON.parse(await readFile(join(dashboard, 'package.json'), 'utf8')).name, 'carpedm-expo-dashboard', 'Choose the CarpeDM dashboard source directory');
  const sources = { microsite: root, dashboard };
  for (const source of Object.values(sources)) {
    try { await access(join(source, 'node_modules/.bin/vite')); } catch { throw new Error(`Install dependencies first: npm ci --prefix "${source}"`); }
  }
  const workspace = join(root, '_workspace');
  await mkdir(workspace, { recursive: true });
  const lockPath = join(workspace, 'release.lock');
  const lock = await open(lockPath, 'wx');
  try {
    const job = await mkdtemp(join(workspace, 'release-'));
    const snapshots = {};
    for (const [name, source] of Object.entries(sources)) {
      const destination = join(job, name);
      snapshots[name] = await snapshotProject(source, destination);
      await symlink(join(source, 'node_modules'), join(destination, 'node_modules'), 'dir');
      console.log(`${name}: ${snapshots[name].files.length} source files, ${snapshots[name].untracked.length} untracked files included in the snapshot.`);
    }
    const environment = releaseEnvironment();
    run(join(job, 'microsite'), ['run', 'check'], environment);
    for (const command of ['lint', 'typecheck', 'test']) run(join(job, 'dashboard'), ['run', command], environment);
    run(join(job, 'dashboard'), ['run', 'build', '--', '--configLoader', 'runner'], { ...environment, VITE_MICROSITE_URL: '../' });
    const combined = join(job, 'microsite/dist');
    await rename(join(job, 'dashboard/dist'), join(combined, 'dashboard'));
    await writeFile(join(combined, '.nojekyll'), '');
    const artifacts = await verifyRelease(combined);
    for (const [name, source] of Object.entries(sources)) await assertSourceUnchanged(source, snapshots[name]);
    const report = join(job, 'release-report.json');
    await writeFile(report, JSON.stringify({ builtAt: new Date().toISOString(), node: process.version, sources: snapshots, artifacts }, null, 2) + '\n');
    await publishBuild(combined, join(root, 'dist'), report, join(workspace, 'release-report.json'), job);
    console.log(`\nRelease ready: ${artifacts.length} files in dist/ (microsite + dashboard + .nojekyll).`);
    console.log('Source snapshots and previous output:', job);
    console.log('Local source/artifact hashes: _workspace/release-report.json');
    console.log('Untracked source files must be reviewed and committed before publication. No Git index or remote was changed.');
  } finally {
    await lock.close();
    await unlink(lockPath);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { await buildRelease(); } catch (error) {
    console.error(`Release build failed: ${error.code === 'EEXIST' ? 'Another release build holds _workspace/release.lock; check that process before removing a stale lock.' : error.message}`);
    process.exitCode = 1;
  }
}
