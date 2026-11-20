import Module from 'manifold-3d';
import {buildAll, measure, edgeCheck, binarySTL, BED, PART_NAMES} from '../src/geometry.mjs';
const M = await Module(); M.setup();
let fail = 0; const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const cases = [['預設', {}], ['筆徑 10', {penDiameter: 10}], ['筆徑 14', {penDiameter: 14}], ['筆徑 18', {penDiameter: 18}],
  ['屏幕直放', {paperOrientation: 'portrait'}], ['屏幕橫放', {paperOrientation: 'landscape'}],
  ['光軸 40＋筆徑 18', {axisHeight: 40, penDiameter: 18}], ['光軸 120＋片高 120', {axisHeight: 120, slideHeight: 120}]];
for (const [label, o] of cases) {
  const r = buildAll(M, o), m = measure(r.parts, r.params);
  for (const [k, part] of Object.entries(r.parts)) {
    const e = edgeCheck(part.print), stl = binarySTL(part.print);
    ok(part.status === 'NoError' && e.closed && part.volume > 0, `${label}｜${PART_NAMES[k]} 封閉流形 (破邊 ${e.open}、非流形邊 ${e.nonManifold}、${part.tris} 面)`);
    ok(part.fitsBed, `${label}｜${PART_NAMES[k]} 放得進 ${BED} 平台：${part.size.map(v => v.toFixed(1)).join(' × ')} mm`);
    ok(stl.length === 84 + part.tris * 50, `${label}｜${PART_NAMES[k]} STL 位元組數正確`);
  }
  ok(Math.abs(m.penAxis - r.params.axisHeight) < 0.05 && Math.abs(m.slideCenter - r.params.axisHeight) < 0.05,
    `${label}｜光軸實測：筆中心 ${m.penAxis.toFixed(2)}、狹縫片中心 ${m.slideCenter.toFixed(2)}（設定 ${r.params.axisHeight}）`);
  ok(m.laserBeamClear && m.slitBeamClear && m.screenCovers, `${label}｜光路無遮擋，屏幕光點離紙底 ${m.spotOnPaper.toFixed(1)} mm`);
}
const w = buildAll(M, {penDiameter: 30, axisHeight: 'abc'}).warnings; ok(w.length >= 2, '超範圍與非數字輸入會自動修正並提示');
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
