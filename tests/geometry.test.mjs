import Module from 'manifold-3d';
import {buildAll, measure, edgeCheck, binarySTL, sanitize, chamferSize, BED, PART_NAMES, DEFAULTS, LIMITS, LABELS} from '../src/geometry.mjs';
const M = await Module(); M.setup();
let fail = 0; const ok = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) fail++; };
const cases = [['預設', {}], ['筆徑 10', {penDiameter: 10}], ['筆徑 14', {penDiameter: 14}], ['筆徑 18', {penDiameter: 18}],
  ['屏幕直放', {paperOrientation: 'portrait'}], ['屏幕橫放', {paperOrientation: 'landscape'}],
  ['光軸 40＋筆徑 18', {axisHeight: 40, penDiameter: 18}], ['光軸 120＋片高 120', {axisHeight: 120, slideHeight: 120}],
  ['V 角 60°＋筆徑 18', {vAngle: 60, penDiameter: 18}], ['V 角 120°＋筆徑 10', {vAngle: 120, penDiameter: 10}],
  ['短筆 60＋托架 20 厚', {penLength: 60, cradleThickness: 20}], ['長筆 250＋中心距 200', {penLength: 250, cradleSpacing: 200, cradleThickness: 20, stopThickness: 10}],
  ['擋塊高 12＋筆徑 18（會被限制）', {stopLip: 12, penDiameter: 18}], ['擋塊高 1.5＋擋塊厚 2', {stopLip: 1.5, stopThickness: 2}], ['底座 3（倒角 1）', {baseThickness: 3}], ['底座 10', {baseThickness: 10}],
  ['筆徑 21＋筆長 114', {penDiameter: 21, penLength: 114}], ['筆徑 25＋筆長 114', {penDiameter: 25, penLength: 114}], ['筆徑 30＋筆長 114', {penDiameter: 30, penLength: 114}],
  ['筆徑 30＋V 60°', {penDiameter: 30, vAngle: 60}], ['筆徑 30＋V 120°', {penDiameter: 30, vAngle: 120}], ['筆徑 30＋光軸 35（V 90° 仍夠高）', {penDiameter: 30, axisHeight: 35}],
  ['筆徑 30＋V 60°＋光軸 35＋底座 10', {penDiameter: 30, vAngle: 60, axisHeight: 35, baseThickness: 10}], ['筆徑 30＋擋塊高 12＋短筆 60', {penDiameter: 30, stopLip: 12, penLength: 60}], ['筆徑 10＋擋塊高 12', {penDiameter: 10, stopLip: 12}],
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
  const P = r.params, penBottom = P.axisHeight - P.penDiameter / 2;
  ok(Math.abs(lz.stopTop - (penBottom + P.stopLip)) < 0.01 && lz.stopClearance >= 3 - 1e-6 && Math.abs(lz.stopContact - P.stopLip) < 0.01 && lz.stopContact >= 1.5 - 1e-6,
    `${label}｜小擋塊頂高 ${lz.stopTop.toFixed(2)} mm，低於光軸 ${lz.stopClearance.toFixed(2)} mm（≥3），擋住筆頭下緣 ${lz.stopContact.toFixed(2)} mm（設定 ${P.stopLip}）`);
  ok(Math.abs(lz.front.center - r.params.axisHeight) < 0.01 && Math.abs(lz.rear.center - r.params.axisHeight) < 0.01 && Math.abs(lz.front.angle - r.params.vAngle) < 0.05,
    `${label}｜V 槽實測：夾角 ${lz.front.angle.toFixed(2)}°，前/後托架筆中心 ${lz.front.center.toFixed(3)}/${lz.rear.center.toFixed(3)}`);
  ok(m.laserBeamClear && lz.beamFromTipClear, `${label}｜從筆頭前 1 mm 沿光軸往前，雷射座上沒有任何東西擋光`);
  ok(Math.abs(lz.stopFace) < 1e-6 && lz.rearExposed >= 20 - 1e-6 && lz.penClearOfBase > 0, `${label}｜筆頭頂住擋塊 x=${lz.stopFace.toFixed(2)}，筆尾露出 ${lz.rearExposed.toFixed(1)} mm，筆底離底座 ${lz.penClearOfBase.toFixed(1)} mm`);
  ok(m.laserBeamClear && m.slitBeamClear && m.screenCovers, `${label}｜光路無遮擋，屏幕光點離紙底 ${m.spotOnPaper.toFixed(1)} mm`);
}
const w = buildAll(M, {penDiameter: 40, axisHeight: 'abc'}).warnings; ok(w.length >= 2 && w.every(x => /[\u4e00-\u9fff]/.test(x) && !/[a-z]{4,}/.test(x)), '超範圍與非數字輸入會自動修正並以中文提示：' + w.join('；'));
const w2 = buildAll(M, {penDiameter: 10, stopLip: 12, penLength: 60, cradleSpacing: 200}); ok(w2.params.stopLip === 2 && w2.params.cradleSpacing <= 60 - 8 - 8 - 20 && w2.warnings.length >= 2, '擋塊過高、托架過遠會自動修正：' + w2.warnings.join('；'));
// v1.3.0：取消通光孔；舊設定帶 stopHole 時靜默忽略
ok(!('stopHole' in DEFAULTS) && !('stopHole' in LIMITS) && !('stopHole' in LABELS), '已移除「擋塊通光孔直徑」參數');
{ const s = sanitize({stopHole: 7}); ok(!('stopHole' in s.params) && s.warnings.length === 0, '舊設定裡的 stopHole 會被忽略且不出現警告'); }
{ const s = sanitize({stopLip: 9}); ok(s.params.stopLip === 7.5 && s.warnings.length === 1 && s.warnings[0].includes('擋住筆頭下緣高度'), '筆徑 21 時擋塊高上限 7.5（擋塊頂低於光軸 3 mm），超過會以中文提示：' + s.warnings.join('')); }
{ const s = sanitize({stopLip: 1}); ok(s.params.stopLip === 1.5, '擋塊高下限 1.5'); }
ok(DEFAULTS.stopThickness === 6 && DEFAULTS.stopLip === 4, '預設擋塊厚 6、擋住筆頭下緣 4 mm');
// 倒角：底座上緣量得到 45° 斜面，底面不倒角（邊緣在 z=0 仍是全寬）
ok(chamferSize({baseThickness: 5}) === 1.5 && chamferSize({baseThickness: 3}) === 1, '倒角大小：底座 5 → 1.5 mm、底座 3 → 1 mm');
{ const r = buildAll(M, {}), c = chamferSize(r.params), bt = r.params.baseThickness;
  for (const k of ['laser', 'slit', 'screen']) {
    const b = r.parts[k].print.boundingBox();
    const slab = (z0, z1) => r.parts[k].print.trimByPlane([0, 0, 1], z0).trimByPlane([0, 0, -1], -z1).boundingBox();
    const bottom = slab(0, 0.2);
    ok(Math.abs(bottom.min[0] - b.min[0]) < 1e-6 && Math.abs(bottom.max[1] - b.max[1]) < 1e-6, `${PART_NAMES[k]} 底面不倒角，貼床面為全尺寸`);
    const sl = r.parts[k].print.trimByPlane([0, 0, 1], bt - 0.75).trimByPlane([0, 0, -1], -(bt - 0.75 + 1e-3)).boundingBox();
    ok(Math.abs((sl.min[0] - b.min[0]) - 0.75) < 0.01 || Math.abs((sl.min[1] - b.min[1]) - 0.75) < 0.01, `${PART_NAMES[k]} 底座上緣 45° 倒角（離頂面 ${(bt - (bt - 0.75)).toFixed(2)} mm 處內縮 ${Math.min(sl.min[0] - b.min[0], sl.min[1] - b.min[1]).toFixed(2)} mm）`);
  } }
{ const r = buildAll(M, {}); ok(r.params.penDiameter === 21 && r.params.penLength === 114 && r.params.axisHeight === 60 && r.warnings.length === 0, '預設筆徑 21、筆長 114、光軸 60，無警告'); }
{ const r = buildAll(M, {penDiameter: 30, axisHeight: 35}); ok(r.params.axisHeight === 35 && r.warnings.length === 0, '筆徑 30、V 90°、光軸 35：槽底仍高出底座 ≥5 mm，不需提高'); }
{ const r = buildAll(M, {penDiameter: 30, vAngle: 60, axisHeight: 35}); ok(r.params.axisHeight === 40 && r.warnings.some(x => x.includes('光軸高度太低')), `筆徑 30、V 60°、光軸 35 會自動提高到 ${r.params.axisHeight} mm 並提示`); }
{ const r = buildAll(M, {penDiameter: 30, vAngle: 60, axisHeight: 35, baseThickness: 10}); ok(r.params.axisHeight === 45, `筆徑 30、V 60°、底座 10、光軸 35 會自動提高到 ${r.params.axisHeight} mm`); }
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
