// 雷射光架設計器：幾何核心（瀏覽器與 Node 共用）
// 座標：X = 光行進方向，Y = 左右，Z = 向上；單位 mm。
export const VERSION = '1.2.0';

export const DEFAULTS = {
  axisHeight: 60,      // 光軸離桌面高度
  fit: 0.35,           // 共用配合間隙
  // 雷射夾座
  penDiameter: 21,     // v1.2.0：執行長實測筆徑 21 mm
  penLength: 114,      // v1.2.0：執行長實測筆長 114 mm；用來確認筆尾露出底座後方
  vAngle: 90,          // V 槽夾角（度）
  cradleSpacing: 70,   // 前後托架中心距
  cradleThickness: 8,  // 托架沿筆方向的厚度
  stopThickness: 4,    // 前擋塊厚度
  stopHole: 7,         // 前擋塊通光孔直徑
  laserFootWidth: 60,
  baseThickness: 5,
  // 狹縫片夾座
  slideWidth: 50,
  slideHeight: 50,
  slideThickness: 2,
  slideRim: 5,         // 窗口四周擋住片子的邊寬
  slitBaseDepth: 60,
  // 屏幕架
  paperOrientation: 'landscape', // landscape 橫放（預設）/ portrait 直放
  paperSlot: 2.5,      // 插槽寬（A4 紙＋墊板）
  paperSlotDepth: 20,
  screenBaseDepth: 80,
};

export const LIMITS = {
  axisHeight: [35, 120], fit: [0.1, 0.8],
  penDiameter: [10, 30], penLength: [60, 250], vAngle: [60, 120], cradleSpacing: [20, 200], cradleThickness: [4, 20],
  stopThickness: [2, 10], stopHole: [3, 12], laserFootWidth: [40, 200], baseThickness: [3, 10],
  slideWidth: [20, 120], slideHeight: [20, 120], slideThickness: [0.5, 5], slideRim: [2, 15], slitBaseDepth: [30, 150],
  paperSlot: [1, 6], paperSlotDepth: [8, 40], screenBaseDepth: [40, 150],
};

export const LABELS = {
  axisHeight: '光軸離桌面高度', fit: '配合間隙', baseThickness: '底座厚度',
  penDiameter: '雷射筆直徑', penLength: '雷射筆全長', vAngle: 'V 槽夾角', cradleSpacing: '前後托架中心距', cradleThickness: '托架厚度',
  stopThickness: '前擋塊厚度', stopHole: '擋塊通光孔直徑', laserFootWidth: '雷射座底座寬度',
  slideWidth: '狹縫片寬', slideHeight: '狹縫片高', slideThickness: '狹縫片厚', slideRim: '窗口邊寬', slitBaseDepth: '狹縫座底座深度',
  paperSlot: '插槽寬', paperSlotDepth: '插槽深度', screenBaseDepth: '屏幕架底座深度',
};
export const V_FLOOR = 5;   // V 槽底至少高出底座頂面的實心厚度（v1.2.0 由 2 提高到 5；筆徑 ≤18 時不會觸發）
export function minAxisHeight(p) { return Math.ceil(p.baseThickness + V_FLOOR + p.penDiameter / 2 / Math.sin(p.vAngle * Math.PI / 360)); }
export const STOP_GAP = 8;   // 前托架前緣到前擋塊（筆頭）的距離
export const REAR_EXPOSE = 20; // 筆尾至少露出底座後方的長度

export const A4 = {w: 210, h: 297};
export const BED = 250;
const SEG = 96;

export function sanitize(input = {}) {
  const p = {...DEFAULTS, ...input};
  const warnings = [];
  for (const [k, [lo, hi]] of Object.entries(LIMITS)) {
    let v = Number(p[k]);
    if (!Number.isFinite(v)) { v = DEFAULTS[k]; warnings.push(`${LABELS[k]} 不是數字，已改回預設值 ${v}`); }
    if (v < lo || v > hi) { const c = Math.min(hi, Math.max(lo, v)); warnings.push(`${LABELS[k]} 超出範圍 ${lo}–${hi}，已改為 ${c}`); v = c; }
    p[k] = v;
  }
  if (p.paperOrientation !== 'landscape' && p.paperOrientation !== 'portrait') p.paperOrientation = DEFAULTS.paperOrientation;
  // V 槽底（尖點）要高出底座頂面至少 V_FLOOR，槽底下方才有足夠實心料；筆徑變大時光軸下限跟著提高
  const vDepth = p.penDiameter / 2 / Math.sin(p.vAngle * Math.PI / 360);
  if (p.axisHeight - vDepth < p.baseThickness + V_FLOOR) {
    const h = Math.ceil(p.baseThickness + V_FLOOR + vDepth);
    warnings.push(`光軸高度太低，V 槽底離底座不到 ${V_FLOOR} mm，已提高到 ${h} mm`); p.axisHeight = h;
  }
  // 擋孔要比筆徑小，筆頭才頂得住
  if (p.stopHole > p.penDiameter - 2) { const h = p.penDiameter - 2; warnings.push(`擋塊通光孔要比筆徑小至少 2 mm，筆頭才頂得住，已改為 ${h} mm`); p.stopHole = h; }
  // 托架不可重疊，且筆尾要露出底座後方
  if (p.penLength - STOP_GAP - REAR_EXPOSE - 2 * p.cradleThickness - 5 < 0) {
    const t = Math.max(4, Math.floor((p.penLength - STOP_GAP - REAR_EXPOSE - 5) / 2));
    warnings.push(`雷射筆太短，托架厚度已改為 ${t} mm，前後托架才放得下`); p.cradleThickness = t;
  }
  if (p.cradleSpacing < p.cradleThickness + 5) { const c = p.cradleThickness + 5; warnings.push(`前後托架太近會重疊，中心距已改為 ${c} mm`); p.cradleSpacing = c; }
  const maxSpacing = p.penLength - STOP_GAP - p.cradleThickness - REAR_EXPOSE;
  if (p.cradleSpacing > maxSpacing) {
    const c = Math.max(p.cradleThickness + 5, Math.floor(maxSpacing));
    warnings.push(`筆尾要露出底座後方至少 ${REAR_EXPOSE} mm 才按得到，托架中心距已改為 ${c} mm`); p.cradleSpacing = c;
  }
  // 狹縫片底緣要高於底座
  if (p.axisHeight - p.slideHeight / 2 < p.baseThickness + 2) {
    const h = Math.ceil(p.baseThickness + 2 + p.slideHeight / 2);
    warnings.push(`狹縫片太高，片子底緣會低於底座，已將光軸高度提高到 ${h} mm`); p.axisHeight = h;
  }
  if (p.slideRim * 2 >= Math.min(p.slideWidth, p.slideHeight) - 4) {
    const r = Math.floor((Math.min(p.slideWidth, p.slideHeight) - 6) / 2);
    warnings.push(`窗口邊寬太大會擋住光，已改為 ${r} mm`); p.slideRim = r;
  }
  return {params: p, warnings};
}

// 2D 剖面 (u,v) 沿 w 擠出後映射到世界座標：u→Y, v→Z, w→X
const UVW_TO_YZX = mat4([0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]);
// 3x4 欄主序 → Manifold 需要的 4x4 欄主序
function mat4(m) { return [m[0], m[1], m[2], 0, m[3], m[4], m[5], 0, m[6], m[7], m[8], 0, m[9], m[10], m[11], 1]; }

// 雷射座 v1.1：前後兩個 V 形托架（筆用放的）＋前擋塊（筆頭頂住、中央通光孔）
// 筆頭端面在 x = 0，筆身往 −X；筆尾按鍵露在底座後方。
export function laserLayout(p) {
  const a = p.vAngle * Math.PI / 360, r = p.penDiameter / 2, H = p.axisHeight;
  const apex = H - r / Math.sin(a);                  // 筆擱在 V 槽時中心 = 光軸
  const halfTop = (H - apex) * Math.tan(a);          // 托架頂（光軸高度）處 V 槽半寬
  const width = Math.max(p.laserFootWidth, 2 * halfTop + 10);
  const front = -STOP_GAP - p.cradleThickness / 2, rear = front - p.cradleSpacing;
  const xMin = rear - p.cradleThickness / 2, xMax = p.stopThickness;
  return {a, r, H, apex, halfTop, width, front, rear, xMin, xMax, stopTop: H + r + 4, cw: 2 * halfTop + 10};
}

export function laserHolder(M, p) {
  const {Manifold, CrossSection} = M;
  const L = laserLayout(p), bt = p.baseThickness;
  const base = Manifold.cube([L.xMax - L.xMin, L.width, bt], false).translate([L.xMin, -L.width / 2, 0]);
  // V 托架剖面（YZ）：矩形減去 V 形
  const vProf = CrossSection.square([L.cw, L.H], false).translate([-L.cw / 2, 0])
    .subtract(new CrossSection([[[0, L.apex], [L.halfTop + 20 * Math.tan(L.a), L.H + 20], [-(L.halfTop + 20 * Math.tan(L.a)), L.H + 20]]]));
  const cradle = x => vProf.extrude(p.cradleThickness).transform(UVW_TO_YZX).translate([x - p.cradleThickness / 2, 0, 0]);
  const stop = Manifold.cube([p.stopThickness, L.cw, L.stopTop], false).translate([0, -L.cw / 2, 0])
    .subtract(Manifold.cylinder(p.stopThickness + 2, p.stopHole / 2, p.stopHole / 2, SEG).rotate([0, 90, 0]).translate([-1, 0, L.H]));
  return base.add(cradle(L.front)).add(cradle(L.rear)).add(stop);
}

export function slitHolder(M, p) {
  const {Manifold} = M;
  const H = p.axisHeight, bt = p.baseThickness, g = p.fit;
  const skin = 3, side = 8;
  const z0 = H - p.slideHeight / 2;                 // 片子底緣（擱在槽底）
  const top = z0 + p.slideHeight * 0.7;              // 牆頂：片子上緣露出方便拿取
  const slotT = p.slideThickness + g, T = slotT + 2 * skin;
  const Wy = p.slideWidth + 2 * g + 2 * side;
  const base = Manifold.cube([p.slitBaseDepth, Wy, bt], false).translate([-p.slitBaseDepth / 2, -Wy / 2, 0]);
  const wall = Manifold.cube([T, Wy, top], false).translate([-T / 2, -Wy / 2, 0]);
  const slot = Manifold.cube([slotT, p.slideWidth + 2 * g, top - z0 + 2], false).translate([-slotT / 2, -(p.slideWidth / 2 + g), z0]);
  const winW = p.slideWidth - 2 * p.slideRim;
  const win = Manifold.cube([T + 2, winW, top - z0 + 2], false).translate([-T / 2 - 1, -winW / 2, z0 + p.slideRim]);
  return base.add(wall).subtract(slot).subtract(win);
}

export function paperSize(p) {
  return p.paperOrientation === 'landscape' ? {w: A4.h, h: A4.w} : {w: A4.w, h: A4.h};
}

export function screenHolder(M, p) {
  const {Manifold} = M;
  const bt = p.baseThickness, wall = 5;
  const L = Math.min(paperSize(p).w + 10, BED - 10);
  const sw = p.paperSlot, bx = sw + 2 * wall, top = bt + p.paperSlotDepth;
  const base = Manifold.cube([p.screenBaseDepth, L, bt], false).translate([-p.screenBaseDepth / 2, -L / 2, 0]);
  const block = Manifold.cube([bx, L, top], false).translate([-bx / 2, -L / 2, 0]);
  const slot = Manifold.cube([sw, L + 2, p.paperSlotDepth + 1], false).translate([-sw / 2, -L / 2 - 1, bt]);
  const notch = Manifold.cube([bx + 2, 3, 3], true).rotate([45, 0, 0]).translate([0, 0, top]); // 中心 V 形刻痕
  return base.add(block).subtract(slot).subtract(notch);
}

// 列印擺放：v1.1 起三件都底座朝下平放
export function printTransform(name) {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
}

export function toPrint(M, name, solid) {
  const s = solid.transform(mat4(printTransform(name)));
  const b = s.boundingBox();
  return s.translate([-(b.min[0] + b.max[0]) / 2, -(b.min[1] + b.max[1]) / 2, -b.min[2]]);
}

export const PART_NAMES = {laser: '雷射夾座', slit: '狹縫片夾座', screen: '屏幕架'};

export function buildAll(M, input) {
  const {params, warnings} = sanitize(input);
  const assembled = {laser: laserHolder(M, params), slit: slitHolder(M, params), screen: screenHolder(M, params)};
  const parts = {};
  for (const [k, s] of Object.entries(assembled)) {
    const pr = toPrint(M, k, s);
    const b = pr.boundingBox();
    const size = [0, 1, 2].map(i => b.max[i] - b.min[i]);
    parts[k] = {name: PART_NAMES[k], assembled: s, print: pr, size, tris: pr.numTri(), status: pr.status(), genus: pr.genus(), volume: pr.volume(),
      fitsBed: size[0] <= BED && size[1] <= BED && size[2] <= BED};
  }
  return {params, warnings, parts};
}

export function meshArrays(solid) {
  const m = solid.getMesh();
  const np = m.numProp, pos = new Float32Array((m.vertProperties.length / np) * 3);
  for (let i = 0, j = 0; i < m.vertProperties.length; i += np, j += 3) { pos[j] = m.vertProperties[i]; pos[j + 1] = m.vertProperties[i + 1]; pos[j + 2] = m.vertProperties[i + 2]; }
  return {positions: pos, indices: Uint32Array.from(m.triVerts)};
}

export function binarySTL(solid, header = 'laser-slit-stand') {
  const {positions: P, indices: I} = meshArrays(solid);
  const n = I.length / 3, buf = new ArrayBuffer(84 + n * 50), dv = new DataView(buf);
  for (let i = 0; i < Math.min(80, header.length); i++) dv.setUint8(i, header.charCodeAt(i) & 0x7f);
  dv.setUint32(80, n, true);
  let o = 84;
  for (let t = 0; t < n; t++) {
    const a = I[3 * t] * 3, b = I[3 * t + 1] * 3, c = I[3 * t + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2];
    const vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1;
    dv.setFloat32(o, nx / l, true); dv.setFloat32(o + 4, ny / l, true); dv.setFloat32(o + 8, nz / l, true); o += 12;
    for (const v of [a, b, c]) { dv.setFloat32(o, P[v], true); dv.setFloat32(o + 4, P[v + 1], true); dv.setFloat32(o + 8, P[v + 2], true); o += 12; }
    dv.setUint16(o, 0, true); o += 2;
  }
  return new Uint8Array(buf);
}

// 無壓縮 ZIP（一鍵下載全部）
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(d) { let c = 0xffffffff; for (let i = 0; i < d.length; i++) c = CRC[(c ^ d[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
export function makeZip(files) {
  const enc = new TextEncoder(), chunks = [], central = []; let off = 0;
  for (const {name, data} of files) {
    const nb = enc.encode(name), crc = crc32(data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint32(14, crc, true);
    lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, nb.length, true);
    chunks.push(new Uint8Array(lh.buffer), nb, data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint32(16, crc, true);
    ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, nb.length, true); ch.setUint32(42, off, true);
    central.push(new Uint8Array(ch.buffer), nb);
    off += 30 + nb.length + data.length;
  }
  const csize = central.reduce((s, c) => s + c.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true); end.setUint32(12, csize, true); end.setUint32(16, off, true);
  const all = [...chunks, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((s, c) => s + c.length, 0)); let p = 0; for (const c of all) { out.set(c, p); p += c.length; }
  return out;
}

// ── 量測（以網格射線實測，不靠設計公式）──
function rayHits(mesh, o, d) {
  const {positions: P, indices: I} = mesh, hits = [];
  for (let t = 0; t < I.length; t += 3) {
    const a = I[t] * 3, b = I[t + 1] * 3, c = I[t + 2] * 3;
    const e1 = [P[b] - P[a], P[b + 1] - P[a + 1], P[b + 2] - P[a + 2]], e2 = [P[c] - P[a], P[c + 1] - P[a + 1], P[c + 2] - P[a + 2]];
    const h = [d[1] * e2[2] - d[2] * e2[1], d[2] * e2[0] - d[0] * e2[2], d[0] * e2[1] - d[1] * e2[0]];
    const det = e1[0] * h[0] + e1[1] * h[1] + e1[2] * h[2]; if (Math.abs(det) < 1e-12) continue;
    const f = 1 / det, s = [o[0] - P[a], o[1] - P[a + 1], o[2] - P[a + 2]];
    const u = f * (s[0] * h[0] + s[1] * h[1] + s[2] * h[2]); if (u < -1e-9 || u > 1 + 1e-9) continue;
    const q = [s[1] * e1[2] - s[2] * e1[1], s[2] * e1[0] - s[0] * e1[2], s[0] * e1[1] - s[1] * e1[0]];
    const v = f * (d[0] * q[0] + d[1] * q[1] + d[2] * q[2]); if (v < -1e-9 || u + v > 1 + 1e-9) continue;
    const tt = f * (e2[0] * q[0] + e2[1] * q[1] + e2[2] * q[2]); if (tt > 1e-9) hits.push(tt);
  }
  return hits.sort((x, y) => x - y);
}

export function measure(parts, p) {
  const L = meshArrays(parts.laser.assembled), S = meshArrays(parts.slit.assembled), C = meshArrays(parts.screen.assembled);
  const top = 1000, eps = 0.013;
  // 雷射：在托架中央，由上往下打到 V 槽底，再用兩條水平射線量 V 槽斜面 → 夾角與尖點，
  // 半徑 r 的筆擱在 V 槽時中心 = 尖點 + r / sin(半角)
  const L0 = laserLayout(p), r = p.penDiameter / 2;
  const vAt = x => {
    const za = top - rayHits(L, [x, eps, top], [0, 0, -1])[0];
    const z1 = za + 0.5, z2 = za + Math.min(4, (L0.H - za) * 0.8);
    const w1 = rayHits(L, [x, 0, z1], [0, 1, 0])[0], w2 = rayHits(L, [x, 0, z2], [0, 1, 0])[0];
    const s = (w2 - w1) / (z2 - z1), half = Math.atan(s), apex = z1 - w1 / s;
    return {angle: 2 * half * 180 / Math.PI, apex, center: apex + r / Math.sin(half)};
  };
  const vf = vAt(L0.front), vr = vAt(L0.rear);
  const penAxis = (vf.center + vr.center) / 2;
  const laserBeamClear = rayHits(L, [-500, eps, penAxis], [1, 0, 0]).length === 0;
  // 擋孔實測直徑（16 個方向的徑向射線取最小）
  let holeR = Infinity;
  for (let i = 0; i < 16; i++) { const t = (i + 0.5) / 16 * 2 * Math.PI; const h = rayHits(L, [p.stopThickness / 2, 0, penAxis], [0, Math.cos(t), Math.sin(t)])[0]; holeR = Math.min(holeR, h); }
  // 筆頭頂住的擋塊後表面位置；底座後緣（筆尾露出量）
  const stopFace = -500 + rayHits(L, [-500, 0, penAxis + (r + p.stopHole / 2) / 2], [1, 0, 0])[0];
  const baseRear = -500 + rayHits(L, [-500, L0.width / 2 - 1, p.baseThickness / 2], [1, 0, 0])[0];
  const laser = {front: vf, rear: vr, holeDiameter: 2 * holeR, stopContact: r - holeR, stopFace, rearExposed: baseRear - (stopFace - p.penLength),
    penClearOfBase: penAxis - r - p.baseThickness};
  // 狹縫：由上往下落進插槽，打到槽底；片子擱在槽底 → 片中心 = 槽底 + 片高/2
  const slotBottom = top - rayHits(S, [0, eps, top], [0, 0, -1])[0];
  const slideCenter = slotBottom + p.slideHeight / 2;
  const slitBeamClear = rayHits(S, [-500, eps, penAxis], [1, 0, 0]).length === 0;
  // 屏幕：紙底擱在槽底，光點在紙上的高度
  const paperBottom = top - rayHits(C, [0, eps, top], [0, 0, -1])[0];
  const ph = paperSize(p).h;
  return {laser, penAxis, slideCenter, paperBottom, paperTop: paperBottom + ph, spotOnPaper: penAxis - paperBottom,
    laserBeamClear, slitBeamClear, screenCovers: penAxis > paperBottom && penAxis < paperBottom + ph,
    maxAxisError: Math.abs(penAxis - slideCenter)};
}

// 封閉流形檢查：每條邊恰好被兩個三角形以相反方向共用
export function edgeCheck(solid) {
  const {positions: P, indices: I} = meshArrays(solid);
  // 以座標合併頂點（避免屬性分裂造成假破面）
  const key = i => `${P[3 * i].toFixed(4)},${P[3 * i + 1].toFixed(4)},${P[3 * i + 2].toFixed(4)}`;
  const id = new Map(), vid = new Uint32Array(P.length / 3);
  for (let i = 0; i < vid.length; i++) { const k = key(i); if (!id.has(k)) id.set(k, id.size); vid[i] = id.get(k); }
  const edges = new Map();
  for (let t = 0; t < I.length; t += 3) for (let e = 0; e < 3; e++) {
    const a = vid[I[t + e]], b = vid[I[t + (e + 1) % 3]]; const k = a < b ? `${a}_${b}` : `${b}_${a}`;
    const r = edges.get(k) || {f: 0, b: 0}; if (a < b) r.f++; else r.b++; edges.set(k, r);
  }
  let open = 0, bad = 0; for (const r of edges.values()) { if (r.f + r.b === 1) open++; else if (r.f !== 1 || r.b !== 1) bad++; }
  return {edges: edges.size, open, nonManifold: bad, closed: open === 0 && bad === 0};
}
