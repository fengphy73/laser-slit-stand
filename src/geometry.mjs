// 雷射光架設計器：幾何核心（瀏覽器與 Node 共用）
// 座標：X = 光行進方向，Y = 左右，Z = 向上；單位 mm。
export const VERSION = '1.0.0';

export const DEFAULTS = {
  axisHeight: 60,      // 光軸離桌面高度
  fit: 0.35,           // 共用配合間隙
  // 雷射夾座
  penDiameter: 14,
  penLength: 140,      // 僅供預覽
  clampLength: 40,     // C 形卡扣沿筆方向的長度（夾筆的前段）
  clipWall: 2.5,       // 卡扣壁厚
  clipOpening: 0.86,   // 卡口開口寬 ÷ 筆徑
  laserFootLength: 100,
  laserFootWidth: 60,
  baseThickness: 5,
  // 狹縫片夾座
  slideWidth: 50,
  slideHeight: 50,
  slideThickness: 2,
  slideRim: 5,         // 窗口四周擋住片子的邊寬
  slitBaseDepth: 60,
  // 屏幕架
  paperOrientation: 'portrait', // portrait 直放 / landscape 橫放
  paperSlot: 2.5,      // 插槽寬（A4 紙＋墊板）
  paperSlotDepth: 20,
  screenBaseDepth: 80,
};

export const LIMITS = {
  axisHeight: [35, 120], fit: [0.1, 0.8],
  penDiameter: [10, 18], penLength: [60, 250], clampLength: [20, 80], clipWall: [1.6, 5], clipOpening: [0.7, 0.95],
  laserFootLength: [40, 240], laserFootWidth: [40, 200], baseThickness: [3, 10],
  slideWidth: [20, 120], slideHeight: [20, 120], slideThickness: [0.5, 5], slideRim: [2, 15], slitBaseDepth: [30, 150],
  paperSlot: [1, 6], paperSlotDepth: [8, 40], screenBaseDepth: [40, 150],
};

export const A4 = {w: 210, h: 297};
export const BED = 250;
const SEG = 96;

export function sanitize(input = {}) {
  const p = {...DEFAULTS, ...input};
  const warnings = [];
  for (const [k, [lo, hi]] of Object.entries(LIMITS)) {
    let v = Number(p[k]);
    if (!Number.isFinite(v)) { v = DEFAULTS[k]; warnings.push(`${k} 不是數字，已改回預設值 ${v}`); }
    if (v < lo || v > hi) { const c = Math.min(hi, Math.max(lo, v)); warnings.push(`${k} 超出範圍 ${lo}–${hi}，已改為 ${c}`); v = c; }
    p[k] = v;
  }
  if (p.paperOrientation !== 'landscape') p.paperOrientation = 'portrait';
  // 雷射卡扣底部要高於底座
  const R = p.penDiameter / 2 + p.fit + p.clipWall;
  if (p.axisHeight + p.fit - R < p.baseThickness + 2) {
    const h = Math.ceil(p.baseThickness + 2 + R);
    warnings.push(`光軸高度太低，雷射卡扣會碰到底座，已提高到 ${h} mm`); p.axisHeight = h;
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
  if (p.laserFootLength < p.clampLength) { warnings.push('雷射底座長度不可短於夾持長度，已改成相同'); p.laserFootLength = p.clampLength; }
  return {params: p, warnings};
}

// 2D 剖面 (u,v) 沿 w 擠出後映射到世界座標：u→Y, v→Z, w→X
const UVW_TO_YZX = mat4([0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]);
// 3x4 欄主序 → Manifold 需要的 4x4 欄主序
function mat4(m) { return [m[0], m[1], m[2], 0, m[3], m[4], m[5], 0, m[6], m[7], m[8], 0, m[9], m[10], m[11], 1]; }

export function laserHolder(M, p) {
  const {CrossSection, Manifold} = M;
  // 筆擱在孔底：孔心比光軸高一個間隙，筆的中心線剛好落在光軸高度
  const r = p.penDiameter / 2 + p.fit, R = r + p.clipWall, H = p.axisHeight + p.fit;
  const fw = Math.max(p.laserFootWidth, 2 * R + 10), ft = p.baseThickness;
  const ow = Math.min(p.clipOpening * p.penDiameter, 2 * r - 0.4);
  let prof = CrossSection.square([2 * R * 0.9, H], false).translate([-R * 0.9, 0])
    .add(CrossSection.circle(R, SEG).translate([0, H]))
    .add(CrossSection.square([fw, ft], false).translate([-fw / 2, 0]));
  prof = prof.subtract(CrossSection.circle(r, SEG).translate([0, H]))
    .subtract(CrossSection.square([ow, R + 2], false).translate([-ow / 2, H]));
  const clamp = prof.extrude(p.clampLength).transform(UVW_TO_YZX);
  const foot = Manifold.cube([p.laserFootLength, fw, ft], false).translate([p.clampLength - p.laserFootLength, -fw / 2, 0]);
  return clamp.add(foot);
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

// 列印擺放：雷射夾座以前端面朝下立著印（卡扣層線與彎曲方向同平面，免支撐），其餘平放
export function printTransform(name) {
  if (name === 'laser') return [0, 0, -1, 0, 1, 0, 1, 0, 0, 0, 0, 0]; // (x,y,z)->(z,y,-x)
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
  // 雷射：由上往下穿過卡口，打到孔底；筆擱在孔底 → 筆中心 = 孔底 + 筆徑/2
  const boreBottom = top - rayHits(L, [p.clampLength / 2, eps, top], [0, 0, -1])[0];
  const penAxis = boreBottom + p.penDiameter / 2;
  const laserBeamClear = rayHits(L, [-500, eps, penAxis], [1, 0, 0]).length === 0;
  // 狹縫：由上往下落進插槽，打到槽底；片子擱在槽底 → 片中心 = 槽底 + 片高/2
  const slotBottom = top - rayHits(S, [0, eps, top], [0, 0, -1])[0];
  const slideCenter = slotBottom + p.slideHeight / 2;
  const slitBeamClear = rayHits(S, [-500, eps, penAxis], [1, 0, 0]).length === 0;
  // 屏幕：紙底擱在槽底，光點在紙上的高度
  const paperBottom = top - rayHits(C, [0, eps, top], [0, 0, -1])[0];
  const ph = paperSize(p).h;
  return {penAxis, slideCenter, paperBottom, paperTop: paperBottom + ph, spotOnPaper: penAxis - paperBottom,
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
