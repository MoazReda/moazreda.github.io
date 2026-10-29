import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

// Deploys to https://moazreda.github.io/ (repo name: moazreda.github.io).
// If the repo is named differently, add base: '/<repo-name>' below.

// In dev, Vite refuses to let onnxruntime-web import its .mjs from /public.
// This serves /ort/* straight from public/ort before Vite's transform runs.
const serveOrt = {
  name: 'serve-ort-raw',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '').split('?')[0];
      if (!url.startsWith('/ort/')) return next();
      const file = path.join(process.cwd(), 'public', url);
      if (!fs.existsSync(file)) return next();
      res.setHeader('Content-Type', url.endsWith('.wasm') ? 'application/wasm' : 'text/javascript');
      fs.createReadStream(file).pipe(res);
    });
  },
};

export default defineConfig({
  site: 'https://moazreda.github.io',
  build: { format: 'directory' },
  vite: { plugins: [serveOrt] },
});
