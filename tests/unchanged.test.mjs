// 驗證狹縫片夾座與屏幕架的 STL 與 v1.0 逐位元相同（比對 v1.0 產生的 SHA-256）
import Module from 'manifold-3d'; import {createHash} from 'node:crypto'; import {readFileSync} from 'node:fs';
import {buildAll, binarySTL} from '../src/geometry.mjs';
const M = await Module(); M.setup();
const ref = JSON.parse(readFileSync(new URL('./v1.0-stl-sha256.json', import.meta.url)));
const h = d => createHash('sha256').update(d).digest('hex');
let fail = 0;
for (const c of ref) {
  const r = buildAll(M, c.params);
  for (const k of ['slit', 'screen']) { const same = h(binarySTL(r.parts[k].print)) === c[k]; if (!same) fail++;
    console.log(`${same ? 'PASS' : 'FAIL'} ${k === 'slit' ? '狹縫片夾座' : '屏幕架'} 與 v1.0 逐位元相同 ${JSON.stringify(c.params)}`); }
}
if (fail) { console.log(`${fail} 項失敗`); process.exit(1); } else console.log('全部通過');
