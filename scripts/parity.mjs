// Token-for-token parity of the JS tokenizer against the Dart/Python bundle.
// Run: node --experimental-strip-types scripts/parity.mjs
import fs from 'node:fs';
import { prepare } from '../src/lib/franco.ts';

const bundle = JSON.parse(fs.readFileSync('public/models/franco.json', 'utf8'));
const parity = JSON.parse(fs.readFileSync('public/models/parity.json', 'utf8'));
let ok = 0, bad = 0;
for (const [dir, cases] of Object.entries(parity)) {
  for (const t of cases) {
    const { ids, tgt } = prepare(t.input, dir, bundle);
    const encOk = JSON.stringify(ids) === JSON.stringify(t.token_ids);
    const decOk = tgt.decode(t.output_ids) === t.output;
    if (encOk && decOk) ok++;
    else { bad++; console.log('MISMATCH', dir, t.input, { encOk, decOk }); }
  }
}
console.log(`parity: ${ok} ok, ${bad} mismatched`);
process.exit(bad ? 1 : 0);
