import assert from 'node:assert/strict';
import { assemblyPose, assemblyRenderState, scrollProgress } from '../src/sections/HardwareAssembly/motion.ts';
assert.equal(scrollProgress(80, 3000, 920, 80), 0);
assert.equal(scrollProgress(-2000, 3000, 920, 80), 1);
assert.equal(scrollProgress(200, 3000, 920, 80), 0);
assert.equal(scrollProgress(-2200, 3000, 920, 80), 1);
for (const key of ['panels', 'glass', 'finish']) {
  assert.equal(assemblyPose(0)[key], 0);
  assert.equal(assemblyPose(1)[key], 1);
  let previous = 0;
  for (let i = 0; i <= 100; i++) {
    const next = assemblyPose(i / 100)[key];
    assert(next >= previous && next <= 1, `${key} must assemble continuously`);
    previous = next;
  }
}
assert.deepEqual([0, .5, 1].map(p => assemblyPose(p).phase), [0, 1, 2]);
assert.equal(assemblyPose(.75).finish, 0, 'The complete image must not interrupt part assembly');
assert.equal(assemblyPose(.4).panels, 1, 'The core must be seated before the front starts');
assert.equal(assemblyPose(.44).glass, 0);
assert.equal(assemblyPose(.76).glass, 1, 'The front must close before the completed render');
assert.equal(assemblyPose(.84).finish, 0);
assert.equal(assemblyPose(.94).finish, 1, 'Hold the finished pose before the next section');
assert.deepEqual([.4, .44, .83, .84].map(p => assemblyPose(p).phase), [0, 1, 1, 2]);
for (let i = 0; i <= 1000; i++) {
  const pose = assemblyPose(i / 1000);
  if (pose.glass > 0) assert.equal(pose.panels, 1, 'The front must not overtake the core');
  if (pose.finish > 0) assert.equal(pose.glass, 1, 'Handoff must wait until every part is seated');
}
assert.equal(assemblyRenderState(false, false, true, true), 'ready', 'Static mode must not wait for hidden layers');
assert.equal(assemblyRenderState(false, false, false, true), 'loading', 'Scroll mode waits for every layer');
assert.equal(assemblyRenderState(false, false, true, false), 'loading', 'Static mode still waits for its completed image');
assert.equal(assemblyRenderState(false, true, false, true), 'ready');
assert.equal(assemblyRenderState(true, true, true, true), 'fallback', 'Failed assets take priority');
console.log('Scroll bounds, ordered assembly, completion hold, chapters and static readiness passed');
