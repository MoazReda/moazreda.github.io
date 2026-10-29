# Moaz portfolio

Astro, hand-written CSS, no UI framework. Rules for every screen are in `design.md`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Deploy (GitHub Pages)

1. Create the repo `moazreda.github.io` (user site, so the site lives at the root).
2. Push this folder to it.
3. In the repo: Settings, Pages, Source: GitHub Actions, then add the standard Astro workflow
   (`withastro/action`). If the repo has another name, set `base` in `astro.config.mjs`.

## What is still yours to write

Search the source for `TODO(moaz)`. These are in your voice, not mine:

- the home page headline and About paragraph (`src/pages/index.astro`)
- your photo: save it as `public/moaz.png` (portrait, about 960x1200); it resolves from blocks to sharp on scroll
- the rest of your certificates (Education section)
- the title and lead of the Franco and Sofara pages
- the Arabic to Franco CER sentence, and whether to mention the Referees Committee outreach
- Tourasna and Code quality links

## Franco demo: two files you must add

Put the two model files in `public/models/` (they are not in the zip):

- `franco_ar.onnx` (Franco to Arabic, about 8 MB)
- `ar_franco.onnx` (Arabic to Franco, about 7.9 MB)

Then `npm run test:parity` checks the JS tokenizer against the Dart/Python bundle (60 of 60 pass today), and the
"Check against the Python outputs" link on `/projects/franco/` runs the real model on the same 60 sentences in the browser.

## Before you publish

- Check every number on `/projects/franco/` against the results table in the franco-arabic-translator README.
- No sentence from private WhatsApp data may appear anywhere. All examples are hand-written.

## Next phases

4. Done: in-browser Franco demo (needs the two .onnx files).
5. Tourasna and Code quality pages in the same template as `/projects/sofara/`.
6. Notes, About, and the screenshot test from `design.md`.

## Tourasna video
Put the app screen recording at `public/tourasna-demo.mp4` (optional poster `public/tourasna-demo.jpg`); the video block on `/projects/tourasna/` appears on the next build. Keep it under about 20 MB (H.264, 30 to 60 seconds).

## Home page structure (Oct 29)
Hero (name, status, photo, lens headline) → About → Projects (tool filter) → Experience → Education → Certificates → Tools.
Certificates live in `src/data/certs.ts` with images in `public/img/<key>.jpg`; add a row and a JPEG to add one.
Photos: `public/moaz-casual.png` (hero) and `public/moaz.png` (Education). The Arabic graduation statement is deliberately NOT on the site (it carries the national ID number).

## Why project pages live under /projects/
Your repos publish project sites at moazreda.github.io/<repo>/ (for example /sofara/). A page of the portfolio at the same path would be shadowed by that project site, so the portfolio pages are /projects/franco/, /projects/sofara/, /projects/tourasna/ and /projects/code-quality/.

## Optional: Franco app icon
Put the app icon at `public/img/franco-icon.png` (square, 256 px) and it appears next to the Google Play badge on the Projects list.
