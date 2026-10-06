// Offline only: node scripts/convert-hardware.cjs <occt package path> <STEP> <GLB> <kinect|respeaker> <meshoptimizer module path>
// Install occt-import-js@0.0.23 in a temporary directory, never in the browser bundle.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const [converter, source, target, kind, optimizer] = process.argv.slice(2);
assert(converter && source && target && ['kinect', 'respeaker'].includes(kind), 'Supply converter, STEP, GLB and kind');

require(converter)().then(async occt => {
  const cad = source.endsWith('.json') ? JSON.parse(fs.readFileSync(source, 'utf8')) : occt.ReadStepFile(fs.readFileSync(source), {
    linearDeflectionType: 'absolute_value', linearDeflection: .2, angularDeflection: .4,
  });
  assert(cad.success && cad.meshes.length, 'STEP import must contain geometry');
  const chunks = [], views = [], accessors = [], meshes = [], nodes = [];
  let offset = 0;
  const linear = value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
  function accessor(array, type, componentType, bounds = false) {
    const bytes = Buffer.from(array.buffer, array.byteOffset, array.byteLength);
    views.push({buffer: 0, byteOffset: offset, byteLength: bytes.length});
    const padding = (4 - bytes.length % 4) % 4;
    chunks.push(bytes, Buffer.alloc(padding)); offset += bytes.length + padding;
    const size = type === 'VEC3' ? 3 : 1;
    const entry = {bufferView: views.length - 1, componentType, count: array.length / size, type};
    if (bounds) {
      entry.min = [Infinity, Infinity, Infinity]; entry.max = [-Infinity, -Infinity, -Infinity];
      array.forEach((v, i) => { entry.min[i % 3] = Math.min(entry.min[i % 3], v); entry.max[i % 3] = Math.max(entry.max[i % 3], v); });
    }
    accessors.push(entry); return accessors.length - 1;
  }
  // Preserve the public board assembly; the optional XIAO subtree is not owner-confirmed.
  if (kind === 'respeaker') assert.equal(cad.meshes[551]?.name, 'RESPEAKER_MIC_ARRAY_XVF3800_PCB', 'Check official board assembly before excluding optional XIAO');
  const sourceParts = kind === 'respeaker' ? cad.meshes.slice(0, 552) : cad.meshes;
  const combined = {positions: [], normals: [], colors: [], indices: []};
  for (const [index, part] of sourceParts.entries()) {
    const positions = new Float32Array(part.attributes.position.array);
    assert(positions.every(Number.isFinite), 'Finite CAD coordinates');
    const color = kind === 'kinect' ? (index === 6 ? [.86, .87, .88] : index === 1 || index === 2 ? [.055, .085, .12] : [.085, .09, .10]) : (/_PCB$/.test(part.name) ? [.035, .36, .28] : /USB_|FRAME|PIN|IM69/.test(part.name) ? [.64, .65, .61] : [.12, .13, .13]);
    const colors = new Float32Array(positions.length);
    for (let i = 0; i < colors.length; i++) colors[i] = linear(color[i % 3]);
    const indices = new Uint32Array(part.index.array);
    for (const face of part.brep_faces) {
      if (!face.color) continue;
      for (let triangle = face.first; triangle <= face.last; triangle++) {
        for (let corner = 0; corner < 3; corner++) {
          const vertex = indices[triangle * 3 + corner];
          colors.set(face.color.map(linear), vertex * 3);
        }
      }
    }
    const vertexOffset = combined.positions.length / 3;
    for (const v of positions) combined.positions.push(v);
    for (const v of colors) combined.colors.push(v);
    for (const v of part.attributes.normal.array) combined.normals.push(v);
    for (const v of indices) combined.indices.push(v + vertexOffset);
  }
  // CAD solids share one draw call. Vertex welding keeps sharp normals and surface colors.
  const welded = {positions: [], normals: [], colors: [], indices: []};
  const vertices = new Map();
  for (const sourceIndex of combined.indices) {
    const start = sourceIndex * 3;
    const p = combined.positions.slice(start, start + 3);
    const n = combined.normals.slice(start, start + 3);
    const c = combined.colors.slice(start, start + 3);
    const key = [...p, ...n, ...c].map(v => v.toFixed(5)).join(',');
    let index = vertices.get(key);
    if (index === undefined) {
      index = welded.positions.length / 3; vertices.set(key, index);
      welded.positions.push(...p); welded.normals.push(...n); welded.colors.push(...c);
    }
    welded.indices.push(index);
  }
  const {MeshoptSimplifier} = await import(optimizer);
  await MeshoptSimplifier.ready;
  const pos = new Float32Array(welded.positions);
  const attrs = new Float32Array(welded.positions.length * 2);
  for (let i = 0; i < pos.length / 3; i++) {
    attrs.set(welded.normals.slice(i * 3, i * 3 + 3), i * 6);
    attrs.set(welded.colors.slice(i * 3, i * 3 + 3), i * 6 + 3);
  }
  const [indices] = MeshoptSimplifier.simplifyWithAttributes(new Uint32Array(welded.indices), pos, 3, attrs, 6,
    [.05, .05, .05, .1, .1, .1], null, Math.floor(welded.indices.length * .18 / 3) * 3, .15, ['ErrorAbsolute', 'Permissive']);
  const [remap, count] = MeshoptSimplifier.compactMesh(indices);
  const compact = {positions: new Float32Array(count * 3), normals: new Float32Array(count * 3), colors: new Float32Array(count * 3)};
  remap.forEach((next, old) => { if (next !== 0xffffffff) {
    compact.positions.set(welded.positions.slice(old * 3, old * 3 + 3), next * 3);
    compact.normals.set(welded.normals.slice(old * 3, old * 3 + 3), next * 3);
    compact.colors.set(welded.colors.slice(old * 3, old * 3 + 3), next * 3);
  }});
  const attributes = {POSITION: accessor(compact.positions, 'VEC3', 5126, true),
    NORMAL: accessor(compact.normals, 'VEC3', 5126), COLOR_0: accessor(compact.colors, 'VEC3', 5126)};
  meshes.push({name: kind, primitives: [{attributes, indices: accessor(indices, 'SCALAR', 5125), material: 0}]});
  nodes.push({name: kind, mesh: 0});
  const gltf = {asset: {version: '2.0', generator: 'CarpeDM official STEP tessellation; occt-import-js 0.0.23'}, scene: 0, scenes: [{nodes: nodes.map((_, i) => i)}], nodes, meshes,
    materials: [{name: 'CAD surfaces', pbrMetallicRoughness: {baseColorFactor: [1,1,1,1], metallicFactor: .15, roughnessFactor: .38}}],
    accessors, bufferViews: views, buffers: [{byteLength: offset}]};
  let json = Buffer.from(JSON.stringify(gltf)); json = Buffer.concat([json, Buffer.alloc((4 - json.length % 4) % 4, 32)]);
  const binary = Buffer.concat(chunks);
  const header = Buffer.alloc(12); header.writeUInt32LE(0x46546c67); header.writeUInt32LE(2, 4); header.writeUInt32LE(28 + json.length + binary.length, 8);
  const jsonHeader = Buffer.alloc(8); jsonHeader.writeUInt32LE(json.length); jsonHeader.writeUInt32LE(0x4e4f534a, 4);
  const binHeader = Buffer.alloc(8); binHeader.writeUInt32LE(binary.length); binHeader.writeUInt32LE(0x004e4942, 4);
  fs.writeFileSync(target, Buffer.concat([header, jsonHeader, json, binHeader, binary]));
  const result = fs.readFileSync(target); assert.equal(result.readUInt32LE(8), result.length, 'Valid GLB length');
  console.log(`${kind}: ${meshes.length} meshes, ${(result.length / 1024).toFixed(0)} KiB → ${target}`);
});
