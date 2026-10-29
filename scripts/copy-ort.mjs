// Copies the onnxruntime-web WASM runtime into public/ort so it is self-hosted.
import fs from 'node:fs';
const from = 'node_modules/onnxruntime-web/dist/';
fs.mkdirSync('public/ort', { recursive: true });
for (const f of ['ort-wasm-simd-threaded.wasm', 'ort-wasm-simd-threaded.mjs']) fs.copyFileSync(from + f, 'public/ort/' + f);
console.log('ort runtime copied');
