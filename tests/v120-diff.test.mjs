// v1.3.0：對照 v1.2.0 網格（tests/fixtures/geometry-v1.2.0.mjs），確認只改了核准的部分：
// 小擋塊、底座倒角、省料（框架底座、尖頂窗、屏幕架長條＋三腳、插槽三段）都只「減料」，不會多出材料；
// 功能面（V 槽斜面、狹縫片插槽與窗口、屏幕中段插槽與刻痕）與 v1.2.0 完全相同。
import Module from 'manifold-3d';
import * as N from '../src/geometry.mjs';
import * as O from './fixtures/geometry-v1.2.0.mjs';
const M = await Module(); M.setup();
let fail = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fail++; };
const cases = [{}, {penDiameter: 10}, {penDiameter: 30}, {baseThickness: 3}, {baseThickness: 10}, {paperOrientation: 'portrait'},
  {vAngle: 60, penDiameter: 18}, {vAngle: 120, penDiameter: 10}, {penLength: 250, cradleSpacing: 200, cradleThickness: 20}, {axisHeight: 120, slideHeight: 120},
  {paperSlot: 6, paperSlotDepth: 40}, {screenBaseDepth: 40}];
const E = 1e-3, BIG = 1000;
const box = (x0, y0, z0, x1, y1, z1) => M.Manifold.cube([x1 - x0, y1 - y0, z1 - z0], false).translate([x0, y0, z0]);
const same = (a, b) => a.subtract(b).volume() + b.subtract(a).volume();
for (const c0 of cases) {
  const c = {stopThickness: 6, paperSlot: 2.5, axisHeight: 60, ...c0}; // 插槽寬、光軸兩版用同一值比較（v1.3.0 預設光軸改 35）
  const n = N.buildAll(M, c), o = O.buildAll(M, c), p = n.params;
  const bt = p.baseThickness, tag = JSON.stringify(c0);
  ok(p.axisHeight === o.params.axisHeight, `${tag}｜光軸設定與 v1.2.0 相同（${p.axisHeight}）`);
  // 狹縫片夾座
  { const a = n.parts.slit.assembled, b = o.parts.slit.assembled, z0 = p.axisHeight - p.slideHeight / 2;
    const R = box(-BIG, -BIG, z0 - N.WIN_WALL + 0.01, BIG, BIG, BIG);
    ok(a.subtract(b).volume() < E && same(a.intersect(R), b.intersect(R)) < E,
      `${tag}｜狹縫片夾座只減料 ${(b.volume() - a.volume()).toFixed(0)} mm³；槽底下 ${N.WIN_WALL} mm 以上（插槽、窗口）與 v1.2.0 完全相同`); }
  // 屏幕架
  { const a = n.parts.screen.assembled, b = o.parts.screen.assembled, clip = N.SCREEN_CLIP;
    const R = box(-BIG, -clip / 2 + 0.01, bt, BIG, clip / 2 - 0.01, BIG);
    ok(a.subtract(b).volume() < E && same(a.intersect(R), b.intersect(R)) < E,
      `${tag}｜屏幕架只減料 ${(b.volume() - a.volume()).toFixed(0)} mm³；中段插槽與 V 形刻痕與 v1.2.0 完全相同`); }
  // 雷射夾座（擋塊後方 x < −0.01）
  { const L = N.laserLayout(p), X = box(-BIG, -BIG, -1, -0.01, BIG, BIG);
    const a = n.parts.laser.assembled.intersect(X), b = o.parts.laser.assembled.intersect(X);
    const R = box(-BIG, -BIG, Math.max(bt, L.apex - N.WIN_WALL + 0.01), BIG, BIG, BIG);
    ok(a.subtract(b).volume() < E && same(a.intersect(R), b.intersect(R)) < E,
      `${tag}｜雷射夾座（擋塊後方）只減料 ${(b.volume() - a.volume()).toFixed(0)} mm³；V 槽底下 ${N.WIN_WALL} mm 以上的 V 托架與 v1.2.0 完全相同`);
    const post = n.parts.laser.assembled.intersect(box(0, -BIG, bt, BIG, BIG, BIG));
    const pb = post.boundingBox(), expect = p.stopThickness * 12 * (L.stopTop - bt);
    ok(Math.abs(post.volume() - expect) < 0.01 && Math.abs(pb.max[1] - pb.min[1] - 12) < 1e-4 && Math.abs(pb.max[2] - L.stopTop) < 1e-4,
      `${tag}｜擋塊為 ${p.stopThickness} × 12 mm 小擋塊，頂高 ${pb.max[2].toFixed(2)} mm`); }
}
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
