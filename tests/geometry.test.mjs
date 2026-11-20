import Module from 'manifold-3d';
import {buildAll, measure, edgeCheck, binarySTL, BED, PART_NAMES} from '../src/geometry.mjs';
const M = await Module(); M.setup();
let fail = 0; const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const cases = [['預設', {}], ['筆徑 10', {penDiameter: 10}], ['筆徑 14', {penDiameter: 14}], ['筆徑 18', {penDiameter: 18}],
  ['屏幕直放', {paperOrientation: 'portrait'}], ['屏幕橫放', {paperOrientation: 'landscape'}],
  ['光軸 40＋筆徑 18', {axisHeight: 40, penDiameter: 18}], ['光軸 120＋片高 120', {axisHeight: 120, slideHeight: 120}],
  ['V 角 60°＋筆徑 18', {vAngle: 60, penDiameter: 18}], ['V 角 120°＋筆徑 10', {vAngle: 120, penDiameter: 10}],
  ['短筆 60＋托架 20 厚', {penLength: 60, cradleThickness: 20}], ['長筆 250＋中心距 200', {penLength: 250, cradleSpacing: 200, cradleThickness: 20, stopThickness: 10}],
  ['擋孔 12＋筆徑 18', {stopHole: 12, penDiameter: 18}],
  ['筆徑 21＋筆長 114', {penDiameter: 21, penLength: 114}], ['筆徑 25＋筆長 114', {penDiameter: 25, penLength: 114}], ['筆徑 30＋筆長 114', {penDiameter: 30, penLength: 114}],
  ['筆徑 30＋V 60°', {penDiameter: 30, vAngle: 60}], ['筆徑 30＋V 120°', {penDiameter: 30, vAngle: 120}], ['筆徑 30＋光軸 35（V 90° 仍夠高）', {penDiameter: 30, axisHeight: 35}],
  ['筆徑 30＋V 60°＋光軸 35＋底座 10', {penDiameter: 30, vAngle: 60, axisHeight: 35, baseThickness: 10}], ['筆徑 30＋擋孔 12＋短筆 60', {penDiameter: 30, stopHole: 12, penLength: 60}],
  ['筆徑 30＋長筆 250＋中心距 200', {penDiameter: 30, penLength: 250, cradleSpacing: 200, cradleThickness: 20, stopThickness: 10}]];
// v1.1.1 起預設改為橫放：未指定方向的案例改成明確指定，直放、橫放各跑一次（「預設」案例維持不指定，檢查預設值本身）
const expanded = cases.flatMap(([label, o]) => (label === '預設' || 'paperOrientation' in o) ? [[label, o]]
  : [[label + '（直放）', {...o, paperOrientation: 'portrait'}], [label + '（橫放）', {...o, paperOrientation: 'landscape'}]]);
for (const [label, o] of expanded) {
  const r = buildAll(M, o), m = measure(r.parts, r.params);
  for (const [k, part] of Object.entries(r.parts)) {
    const e = edgeCheck(part.print), stl = binarySTL(part.print);
    ok(part.status === 'NoError' && e.closed && part.volume > 0, `${label}｜${PART_NAMES[k]} 封閉流形 (破邊 ${e.open}、非流形邊 ${e.nonManifold}、${part.tris} 面)`);
    ok(part.fitsBed, `${label}｜${PART_NAMES[k]} 放得進 ${BED} 平台：${part.size.map(v => v.toFixed(1)).join(' × ')} mm`);
    ok(stl.length === 84 + part.tris * 50, `${label}｜${PART_NAMES[k]} STL 位元組數正確`);
  }
  ok(Math.abs(m.penAxis - r.params.axisHeight) < 0.05 && Math.abs(m.slideCenter - r.params.axisHeight) < 0.05,
    `${label}｜光軸實測：筆中心 ${m.penAxis.toFixed(2)}、狹縫片中心 ${m.slideCenter.toFixed(2)}（設定 ${r.params.axisHeight}）`);
  const lz = m.laser;
  ok(lz.front.apex - r.params.baseThickness >= 5 - 1e-6 && lz.rear.apex - r.params.baseThickness >= 5 - 1e-6,
    `${label}｜V 槽底實測高度 ${lz.front.apex.toFixed(2)} mm，高出底座頂面 ${(lz.front.apex - r.params.baseThickness).toFixed(2)} mm（≥5）`);
  ok(lz.stopContact >= 1 - 1e-6, `${label}｜筆頭頂住擋塊的環寬 ${lz.stopContact.toFixed(2)} mm（≥1）`);
  ok(Math.abs(lz.front.center - r.params.axisHeight) < 0.01 && Math.abs(lz.rear.center - r.params.axisHeight) < 0.01 && Math.abs(lz.front.angle - r.params.vAngle) < 0.05,
    `${label}｜V 槽實測：夾角 ${lz.front.angle.toFixed(2)}°，前/後托架筆中心 ${lz.front.center.toFixed(3)}/${lz.rear.center.toFixed(3)}`);
  ok(m.laserBeamClear && lz.holeDiameter > r.params.stopHole * 0.99 && lz.holeDiameter >= 3, `${label}｜擋孔實測直徑 ${lz.holeDiameter.toFixed(2)} mm，光軸穿過雷射座無遮擋`);
  ok(Math.abs(lz.stopFace) < 1e-6 && lz.rearExposed >= 20 - 1e-6 && lz.penClearOfBase > 0, `${label}｜筆頭頂住擋塊 x=${lz.stopFace.toFixed(2)}，筆尾露出 ${lz.rearExposed.toFixed(1)} mm，筆底離底座 ${lz.penClearOfBase.toFixed(1)} mm`);
  ok(m.laserBeamClear && m.slitBeamClear && m.screenCovers, `${label}｜光路無遮擋，屏幕光點離紙底 ${m.spotOnPaper.toFixed(1)} mm`);
}
const w = buildAll(M, {penDiameter: 40, axisHeight: 'abc'}).warnings; ok(w.length >= 2 && w.every(x => /[\u4e00-\u9fff]/.test(x) && !/[a-z]{4,}/.test(x)), '超範圍與非數字輸入會自動修正並以中文提示：' + w.join('；'));
const w2 = buildAll(M, {penDiameter: 10, stopHole: 12, penLength: 60, cradleSpacing: 200}); ok(w2.params.stopHole === 8 && w2.params.cradleSpacing <= 60 - 8 - 8 - 20 && w2.warnings.length >= 2, '擋孔過大、托架過遠會自動修正：' + w2.warnings.join('；'));
{ const r = buildAll(M, {}); ok(r.params.penDiameter === 21 && r.params.penLength === 114 && r.params.axisHeight === 60 && r.warnings.length === 0, '預設筆徑 21、筆長 114、光軸 60，無警告'); }
{ const r = buildAll(M, {penDiameter: 30, axisHeight: 35}); ok(r.params.axisHeight === 35 && r.warnings.length === 0, '筆徑 30、V 90°、光軸 35：槽底仍高出底座 ≥5 mm，不需提高'); }
{ const r = buildAll(M, {penDiameter: 30, vAngle: 60, axisHeight: 35}); ok(r.params.axisHeight === 40 && r.warnings.some(x => x.includes('光軸高度太低')), `筆徑 30、V 60°、光軸 35 會自動提高到 ${r.params.axisHeight} mm 並提示`); }
{ const r = buildAll(M, {penDiameter: 30, vAngle: 60, axisHeight: 35, baseThickness: 10}); ok(r.params.axisHeight === 45, `筆徑 30、V 60°、底座 10、光軸 35 會自動提高到 ${r.params.axisHeight} mm`); }
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
