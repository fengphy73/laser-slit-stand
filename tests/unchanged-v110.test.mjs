// v1.2.0 起預設筆徑/筆長改變，基準檔已明確寫入 v1.1 的筆參數（14／140）。
// v1.1.1 只改屏幕架「紙張方向」預設值：三件 STL 在相同參數下須與 v1.1.0 逐位元相同（直放、橫放各一輪）
import Module from 'manifold-3d'; import {createHash} from 'node:crypto'; import {readFileSync} from 'node:fs';
import {buildAll, binarySTL, sanitize, DEFAULTS} from '../src/geometry.mjs';
const M = await Module(); M.setup();
const ref = JSON.parse(readFileSync(new URL('./v1.1.0-stl-sha256.json', import.meta.url)));
const h = d => createHash('sha256').update(d).digest('hex');
const NAME = {laser: '雷射夾座', slit: '狹縫片夾座', screen: '屏幕架'};
let fail = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fail++; };
for (const c of ref) {
  const r = buildAll(M, c.params);
  for (const k of ['laser', 'slit', 'screen']) ok(h(binarySTL(r.parts[k].print)) === c[k], `${NAME[k]} 與 v1.1.0 逐位元相同 ${JSON.stringify(c.params)}`);
}
// 預設值：橫放；空白／不合法輸入回到預設也是橫放；直放仍可選
ok(DEFAULTS.paperOrientation === 'landscape', '預設紙張方向為橫放');
ok(sanitize({}).params.paperOrientation === 'landscape', '未指定時為橫放');
ok(sanitize({paperOrientation: 'abc'}).params.paperOrientation === 'landscape' && sanitize({paperOrientation: undefined}).params.paperOrientation === 'landscape', '不合法或空值會回到預設橫放');
ok(sanitize({paperOrientation: 'portrait'}).params.paperOrientation === 'portrait', '直放選項保留');
const land = ref.find(e => Object.keys(e.params).length === 3 && e.params.paperOrientation === 'landscape'); // 只有方向＋v1.1 筆參數的那組
const def = buildAll(M, {});
ok(h(binarySTL(def.parts.screen.print)) === land.screen && def.parts.screen.size.join() === '80,240,25', `預設屏幕架＝v1.1.0 橫放，包圍盒 ${def.parts.screen.size.join(' × ')} mm`);
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
