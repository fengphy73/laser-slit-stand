// v1.3.0：對照 v1.2.0 網格（tests/fixtures/geometry-v1.2.0.mjs），確認只改了核准的部分：
// (1) 狹縫片夾座、屏幕架：新件完全包含在舊件內，差異只在底座上緣倒角帶（z ≥ 底座厚 − 倒角）；
// (2) 雷射夾座：擋塊後方（x < 0）的托架與底座除倒角外與 v1.2.0 相同；擋塊改為 12 mm 寬小擋塊。
import Module from 'manifold-3d';
import * as N from '../src/geometry.mjs';
import * as O from './fixtures/geometry-v1.2.0.mjs';
const M = await Module(); M.setup();
let fail = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fail++; };
const NAME = {laser: '雷射夾座', slit: '狹縫片夾座', screen: '屏幕架'};
const cases = [{}, {penDiameter: 10}, {penDiameter: 30}, {baseThickness: 3}, {baseThickness: 10}, {paperOrientation: 'portrait'},
  {vAngle: 60, penDiameter: 18}, {penLength: 250, cradleSpacing: 200, cradleThickness: 20}, {axisHeight: 120, slideHeight: 120}];
const E = 1e-3;
for (const c0 of cases) {
  const c = {stopThickness: 6, ...c0};
  const n = N.buildAll(M, c), o = O.buildAll(M, c);
  const bt = n.params.baseThickness, ch = N.chamferSize(n.params), tag = JSON.stringify(c0);
  ok(n.params.axisHeight === o.params.axisHeight, `${tag}｜光軸設定與 v1.2.0 相同（${n.params.axisHeight}）`);
  for (const k of ['slit', 'screen']) {
    const a = n.parts[k].assembled, b = o.parts[k].assembled;
    const extra = a.subtract(b).volume(), gone = b.subtract(a);
    const gb = gone.boundingBox();
    ok(extra < E && gone.volume() > 0 && gb.min[2] >= bt - ch - 1e-4 && gb.max[2] <= bt + 1e-4,
      `${tag}｜${NAME[k]} 只少了倒角帶 ${(gone.volume()).toFixed(1)} mm³（z ${gb.min[2].toFixed(2)}–${gb.max[2].toFixed(2)}），沒有多出任何材料`);
  }
  // 雷射夾座：只看 x < 0（擋塊後方：托架＋底座）
  const L = N.laserLayout(n.params), clip = s => s.intersect(M.Manifold.cube([1000, 1000, 1000], false).translate([-1000.01, -500, -1])); // x < −0.01（避開 x = 0 的舊擋板背面）
  const a = clip(n.parts.laser.assembled), b = clip(o.parts.laser.assembled);
  const extra = a.subtract(b).volume(), gone = b.subtract(a), gb = gone.boundingBox();
  ok(extra < E && gb.min[2] >= bt - ch - 1e-4 && gb.max[2] <= bt + 1e-4,
    `${tag}｜雷射夾座 V 托架與底座（擋塊後方）除倒角帶 ${gone.volume().toFixed(1)} mm³ 外與 v1.2.0 相同`);
  const post = n.parts.laser.assembled.intersect(M.Manifold.cube([1000, 1000, 1000], false).translate([0, -500, bt]));
  const pb = post.boundingBox(), expect = n.params.stopThickness * 12 * (L.stopTop - bt);
  ok(Math.abs(post.volume() - expect) < 0.01 && Math.abs(pb.max[1] - pb.min[1] - 12) < 1e-4 && Math.abs(pb.max[2] - L.stopTop) < 1e-4,
    `${tag}｜擋塊為 ${n.params.stopThickness} × 12 mm 小擋塊，頂高 ${pb.max[2].toFixed(2)} mm`);
}
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
