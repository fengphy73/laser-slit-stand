import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import Module from 'manifold-3d';
import {VERSION, DEFAULTS, LIMITS, buildAll, measure, edgeCheck, meshArrays, binarySTL, makeZip, paperSize, BED} from './geometry.mjs';

const FIELDS = [
  ['共用', [['axisHeight', '光軸離桌面高度', 'mm', 1], ['fit', '配合間隙', 'mm', 0.05], ['baseThickness', '底座厚度', 'mm', 0.5]]],
  ['① 雷射夾座（前後 V 形托架＋前方小擋塊，筆用放的，筆尾按鍵外露）', [['penDiameter', '雷射筆直徑', 'mm', 0.5], ['penLength', '雷射筆全長', 'mm', 1],
    ['vAngle', 'V 槽夾角', '度', 1], ['cradleSpacing', '前後托架中心距', 'mm', 1], ['cradleThickness', '托架厚度', 'mm', 0.5],
    ['stopThickness', '前擋塊厚度', 'mm', 0.5], ['stopLip', '擋住筆頭下緣高度', 'mm', 0.5], ['laserFootWidth', '底座寬度', 'mm', 1]]],
  ['② 狹縫片夾座', [['slideWidth', '狹縫片寬', 'mm', 0.5], ['slideHeight', '狹縫片高', 'mm', 0.5], ['slideThickness', '狹縫片厚', 'mm', 0.1],
    ['slideRim', '窗口邊寬', 'mm', 0.5], ['slitBaseDepth', '底座深度', 'mm', 1]]],
  ['③ 屏幕架（A4 紙）', [['paperOrientation', '紙張方向', '', 0], ['paperSlot', '插槽寬（紙＋墊板）', 'mm', 0.1], ['paperSlotDepth', '插槽深度', 'mm', 1], ['screenBaseDepth', '底座深度', 'mm', 1]]],
];

const $ = s => document.querySelector(s);
const app = $('#app');
app.innerHTML = `
<header><h1>雷射光架設計器 <small>v${VERSION}</small></h1><p>單狹縫／雙狹縫干涉繞射實驗用：雷射夾座、狹縫片夾座、A4 屏幕架，3D 列印。</p></header>
<main>
  <section class="panel" id="form"></section>
  <section class="view">
    <div class="toolbar">
      <label><input type="radio" name="mode" value="assembled" checked> 組裝檢視</label>
      <label><input type="radio" name="mode" value="print"> 列印擺放（25×25 cm 平台）</label>
      <button id="fit">重設視角</button>
    </div>
    <div id="canvas"></div>
    <div id="warn"></div>
    <div id="info"></div>
    <div class="downloads">
      <button data-dl="laser">下載 ① 雷射夾座 STL</button>
      <button data-dl="slit">下載 ② 狹縫片夾座 STL</button>
      <button data-dl="screen">下載 ③ 屏幕架 STL</button>
      <button data-dl="all" class="primary">一鍵下載全部（ZIP）</button>
    </div>
    <p class="note">STL 已是建議列印擺放：三件都底座朝下平放，免支撐；三件底座上緣都有 45° 倒角，底面保持平整貼床。雷射筆直接放在兩個 V 形托架上，筆頭下緣頂住前方小擋塊，出光處上方與中間完全空出，光直接射出；從筆尾按鍵。A4 紙很軟，建議在紙後墊一片墊板或厚紙板再插入屏幕架。</p>
  </section>
</main>`;

// ── 表單 ──
const state = {...DEFAULTS};
const form = $('#form');
for (const [title, list] of FIELDS) {
  const fs = document.createElement('fieldset'); fs.innerHTML = `<legend>${title}</legend>`;
  for (const [key, label, unit, step] of list) {
    const row = document.createElement('label'); row.className = 'row';
    if (key === 'paperOrientation') {
      row.innerHTML = `<span>${label}</span><select data-k="${key}"><option value="portrait">直放（210 寬 × 297 高）</option><option value="landscape">橫放（297 寬 × 210 高）</option></select>`;
    } else {
      const [lo, hi] = LIMITS[key];
      row.innerHTML = `<span>${label}</span><input type="number" data-k="${key}" min="${lo}" max="${hi}" step="${step}" value="${state[key]}"><em>${unit}</em><small>${lo}–${hi}</small>`;
    }
    fs.appendChild(row);
  }
  form.appendChild(fs);
}
const reset = document.createElement('button'); reset.textContent = '全部恢復預設值'; form.appendChild(reset);
reset.onclick = () => { Object.assign(state, DEFAULTS); syncForm(); schedule(); };
function syncForm() { for (const el of form.querySelectorAll('[data-k]')) el.value = state[el.dataset.k]; }
syncForm(); // 下拉選單初始值也跟預設值一致（紙張方向預設橫放）
form.addEventListener('input', e => {
  const k = e.target.dataset.k; if (!k) return;
  if (k === 'paperOrientation') state[k] = e.target.value;
  else { if (e.target.value === '' || !Number.isFinite(+e.target.value)) return; state[k] = +e.target.value; }
  schedule();
});
form.addEventListener('change', () => syncForm());

// ── 3D ──
const holder = $('#canvas');
const renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true});
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
holder.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0xf3f5f7);
THREE.Object3D.DEFAULT_UP.set(0, 0, 1);
const camera = new THREE.PerspectiveCamera(35, 1, 1, 10000); camera.up.set(0, 0, 1);
const controls = new OrbitControls(camera, renderer.domElement);
scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 1.6));
const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(-300, -500, 800); scene.add(sun);
const group = new THREE.Group(); scene.add(group);
const COLORS = {laser: 0x2f7fbf, slit: 0x3c9a5f, screen: 0xd08a2e};

function solidMesh(solid, color) {
  const {positions, indices} = meshArrays(solid);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(positions, 3)); g.setIndex(new THREE.BufferAttribute(indices, 1));
  const ng = g.toNonIndexed(); ng.computeVertexNormals();
  return new THREE.Mesh(ng, new THREE.MeshStandardMaterial({color, roughness: 0.6, metalness: 0.05}));
}
function box(sx, sy, sz, color, opts = {}) {
  return new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), new THREE.MeshStandardMaterial({color, roughness: 0.8, ...opts}));
}

let M = null, result = null, timer = 0, frameBox = null;
function schedule() { clearTimeout(timer); timer = setTimeout(rebuild, 120); }

function rebuild() {
  if (!M) return;
  result = buildAll(M, state);
  const p = result.params, parts = result.parts, meas = measure(parts, p);
  group.clear();
  const mode = document.querySelector('input[name=mode]:checked').value;
  const slitX = p.stopThickness + 160, screenX = slitX + 320;
  if (mode === 'assembled') {
    const l = solidMesh(parts.laser.assembled, COLORS.laser); group.add(l);
    const s = solidMesh(parts.slit.assembled, COLORS.slit); s.position.x = slitX; group.add(s);
    const c = solidMesh(parts.screen.assembled, COLORS.screen); c.position.x = screenX; group.add(c);
    // 雷射筆（示意）：筆頭下緣頂住前方小擋塊（x = 0），按鍵在筆尾端面
    const front = 0, H = meas.penAxis;
    const pen = new THREE.Mesh(new THREE.CylinderGeometry(p.penDiameter / 2, p.penDiameter / 2, p.penLength, 48), new THREE.MeshStandardMaterial({color: 0x44484d, metalness: 0.4, roughness: 0.4}));
    pen.rotation.z = Math.PI / 2; pen.position.set(front - p.penLength / 2, 0, H); group.add(pen);
    const btn = new THREE.Mesh(new THREE.CylinderGeometry(p.penDiameter * 0.3, p.penDiameter * 0.3, 3, 32), new THREE.MeshStandardMaterial({color: 0xd22c2c}));
    btn.rotation.z = Math.PI / 2; btn.position.set(front - p.penLength - 1.5, 0, H); group.add(btn);
    // 狹縫片（示意，半透明）與狹縫線
    const slide = box(p.slideThickness, p.slideWidth, p.slideHeight, 0x222222, {transparent: true, opacity: 0.35});
    slide.position.set(slitX, 0, meas.slideCenter); group.add(slide);
    const slitLine = box(p.slideThickness + 0.2, 0.6, p.slideHeight * 0.6, 0xffffff); slitLine.position.set(slitX, 0, meas.slideCenter); group.add(slitLine);
    // A4 紙（示意，不列印）
    const ps = paperSize(p);
    const paper = box(0.3, ps.w, ps.h, 0xffffff, {emissive: 0xffffff, emissiveIntensity: 0.55}); paper.position.set(screenX, 0, meas.paperBottom + ps.h / 2); group.add(paper);
    // 雷射光束與屏幕上的干涉條紋示意
    const beamL = screenX - front;  // 光束從筆頭直接射出（擋塊在光軸下方）
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, beamL, 12), new THREE.MeshBasicMaterial({color: 0xff2020}));
    beam.rotation.z = Math.PI / 2; beam.position.set(front + beamL / 2, 0, H); group.add(beam);
    for (let i = -4; i <= 4; i++) { const d = box(0.6, 3, 6, 0xff3030, {emissive: 0xff0000, emissiveIntensity: 0.6, transparent: true, opacity: 1 - Math.abs(i) * 0.2});
      d.position.set(screenX - 0.5, i * 9, H); group.add(d); }
  } else {
    let x = 0;
    for (const k of ['laser', 'slit', 'screen']) {
      const m = solidMesh(parts[k].print, COLORS[k]); m.position.x = x; group.add(m);
      const bed = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(BED, BED)), new THREE.LineBasicMaterial({color: 0x7a8896}));
      bed.position.set(x, 0, 0); group.add(bed);
      x += BED + 40;
    }
  }
  const grid = new THREE.GridHelper(2000, 80, 0xc5ccd3, 0xdde2e7); grid.rotation.x = Math.PI / 2; grid.position.z = -0.2; group.add(grid);
  frameBox = new THREE.Box3();
  for (const o of group.children) if (o.isMesh) frameBox.expandByObject(o);
  if (!rebuild.framed || rebuild.lastMode !== mode) { fit(); rebuild.framed = true; rebuild.lastMode = mode; }
  renderInfo(meas);
}

function renderInfo(m) {
  const {parts, warnings, params: p} = result;
  $('#warn').innerHTML = warnings.map(w => `<div>⚠️ ${w}</div>`).join('');
  const rows = Object.entries(parts).map(([k, v]) => {
    const e = edgeCheck(v.print);
    return `<tr><td><i style="background:#${COLORS[k].toString(16).padStart(6, '0')}"></i>${v.name}</td><td>${v.size.map(x => x.toFixed(1)).join(' × ')}</td><td>${v.tris}</td>
      <td>${e.closed && v.status === 'NoError' ? '✅ 封閉' : '❌ 有破面'}</td><td>${v.fitsBed ? '✅' : '❌ 超出'}</td></tr>`;
  }).join('');
  const ok = Math.abs(m.penAxis - m.slideCenter) < 0.05 && m.screenCovers;
  $('#info').innerHTML = `<table><thead><tr><th>零件</th><th>列印尺寸 X×Y×Z（mm）</th><th>三角面</th><th>網格</th><th>25 cm 平台</th></tr></thead><tbody>${rows}</tbody></table>
  <p class="axis">${ok ? '✅' : '⚠️'} 光軸實測：雷射筆中心 <b>${m.penAxis.toFixed(2)} mm</b>、狹縫片中心 <b>${m.slideCenter.toFixed(2)} mm</b>、屏幕紙張範圍 ${m.paperBottom.toFixed(1)}–${m.paperTop.toFixed(1)} mm（光點離紙底 ${m.spotOnPaper.toFixed(1)} mm）。
  狹縫片插槽寬 ${(p.slideThickness + p.fit).toFixed(2)} mm。</p>
  <p class="axis">雷射座：V 槽實測夾角 ${m.laser.front.angle.toFixed(1)}°，前／後托架筆中心 ${m.laser.front.center.toFixed(2)}／${m.laser.rear.center.toFixed(2)} mm；
  小擋塊頂高 ${m.laser.stopTop.toFixed(2)} mm，低於光軸 ${m.laser.stopClearance.toFixed(2)} mm，擋住筆頭下緣 ${m.laser.stopContact.toFixed(2)} mm（${m.laser.beamFromTipClear && m.laserBeamClear ? '光路暢通' : '⚠️ 光路被擋'}）；筆尾露出底座後方 ${m.laser.rearExposed.toFixed(1)} mm。</p>`;
}

function fit() {
  if (!frameBox || frameBox.isEmpty()) return;
  const c = frameBox.getCenter(new THREE.Vector3()), r = frameBox.getSize(new THREE.Vector3()).length() / 2;
  const d = r / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) * 0.7;
  camera.position.set(c.x - d * 0.5, c.y - d * 0.7, c.z + d * 0.45); controls.target.copy(c); controls.update();
}
function resize() { const w = holder.clientWidth, h = holder.clientHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
new ResizeObserver(resize).observe(holder); resize();
renderer.setAnimationLoop(() => renderer.render(scene, camera));
$('#fit').onclick = fit;
document.querySelectorAll('input[name=mode]').forEach(r => r.onchange = rebuild);

// ── 下載 ──
const FILES = {laser: '1_雷射夾座', slit: '2_狹縫片夾座', screen: '3_屏幕架'};
function fname(k) { const p = result.params; return `${FILES[k]}_筆徑${p.penDiameter}_光軸${p.axisHeight}${k === 'screen' ? (p.paperOrientation === 'landscape' ? '_A4橫放' : '_A4直放') : ''}.stl`; }
function save(data, name, type) { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], {type})); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }
document.querySelectorAll('[data-dl]').forEach(b => b.onclick = () => {
  if (!result) return; const k = b.dataset.dl;
  if (k === 'all') save(makeZip(['laser', 'slit', 'screen'].map(n => ({name: fname(n), data: binarySTL(result.parts[n].print)}))), `雷射光架_v${VERSION}.zip`, 'application/zip');
  else save(binarySTL(result.parts[k].print), fname(k), 'model/stl');
});

$('#info').textContent = '正在載入幾何引擎…';
Module({locateFile: f => new URL(f, document.baseURI).href}).then(lib => { lib.setup(); M = lib; rebuild(); window.__ready = true; window.__lss = {camera, controls, THREE}; })
  .catch(e => { $('#info').textContent = '幾何引擎載入失敗：' + e.message; });
