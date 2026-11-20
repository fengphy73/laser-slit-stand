// v1.2.0：筆徑上限放寬到 30、預設改 21／114。驗證相同參數下與 v1.1.1 逐位元相同：
// (1) 基準檔每組（筆徑 ≤18、直放＋橫放）三件全部相同；
// (2) 筆徑 21／25／30 時，狹縫片夾座與屏幕架仍與 v1.1.1 相同（只要光軸沒有因筆徑變大被自動提高）。
import Module from 'manifold-3d'; import {createHash} from 'node:crypto'; import {readFileSync} from 'node:fs';
import {buildAll, binarySTL, sanitize} from '../src/geometry.mjs';
const M = await Module(); M.setup();
const ref = JSON.parse(readFileSync(new URL('./v1.1.1-stl-sha256.json', import.meta.url)));
const h = d => createHash('sha256').update(d).digest('hex');
const NAME = {laser: '雷射夾座', slit: '狹縫片夾座', screen: '屏幕架'};
let fail = 0, skipped = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fail++; };
for (const c of ref.cases) {
  const r = buildAll(M, c.params);
  for (const k of ['laser', 'slit', 'screen']) ok(h(binarySTL(r.parts[k].print)) === c[k], `${NAME[k]} 與 v1.1.1 逐位元相同 ${JSON.stringify(c.params)}`);
  for (const d of [21, 25, 30]) {
    const params = {...c.params, penDiameter: d};
    const sp = sanitize(params).params, orig = sanitize(c.params).params;
    if (sp.axisHeight !== orig.axisHeight) { skipped++; console.log(`SKIP 筆徑 ${d} 使光軸由 ${orig.axisHeight} 自動提高到 ${sp.axisHeight}，狹縫座理應跟著變 ${JSON.stringify(c.params)}`); continue; }
    const rr = buildAll(M, params);
    for (const k of ['slit', 'screen']) ok(h(binarySTL(rr.parts[k].print)) === c[k], `筆徑 ${d}｜${NAME[k]} 與 v1.1.1 逐位元相同 ${JSON.stringify(c.params)}`);
  }
}
console.log(`（因光軸連動提高而略過 ${skipped} 組）`);
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
