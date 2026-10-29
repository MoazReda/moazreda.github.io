# design.md: Moaz portfolio

Every screen is checked against this file before it ships. If a rule here is wrong, change the rule first, then the page.

## What changed (Oct 29)

The study proposed warm paper and a serif, then v1 used a cool light theme. After studying minhpham.design, the live-training template and Deshraj Jogiya's site, the direction is now **dark and cinematic**, with one accent that carries meaning. We take their techniques (cursor lens, scroll-lit text, hover band, drive-it-yourself demos, recruiter bar), not their assets, text or code.

## Subject and job

- Subject: Egyptian Arabic NLP and applied ML. The material is text where Latin letters and digits stand in for Arabic sounds (3 = ع, 7 = ح), and where the evidence is "what the model got wrong, and why".
- Audience: recruiters and hiring managers, mostly opening the link from LinkedIn on a phone.
- Job of the site: prove how Moaz diagnoses and fixes problems, in under two minutes, with numbers.

## The one memorable element

The **diff row**: the same sentence shown in two scripts, with characters marked where the model and the human answer agree (teal underline) or differ (raspberry underline). It is the hero, the error table, and the only decoration. Nothing else on the site is allowed to compete with it.

## Color

| Name | Hex | Use |
| --- | --- | --- |
| paper | `#0D0F10` | background |
| panel | `#151819` | diff rows, demo box |
| ink | `#DDD7C8` | text (bone, not white) |
| ink-soft | `#9D988C` | secondary text |
| rule | `#2B3032` | hairlines |
| teal | `#5FC9CF` | agreement, links |
| coral | `#FF6B4A` (`--raspberry`) | the model got it wrong; also the single emphasis colour |

Rules: coral = error or the thing to look at, teal = agreement. No third accent, no gradients, no glow.

## Type

- Headings: **Cairo**, weight 800, tight tracking (-0.02em). Cairo was drawn for Arabic and Latin together, so Arabic and English headings sit in one voice.
- Body: **IBM Plex Sans Arabic** (it contains Latin), weight 400 and 600, 17px / 1.65 for Latin, 19px / 1.9 for Arabic.
- No monospace anywhere. Numbers use tabular figures (`font-variant-numeric: tabular-nums`).
- Scale (px): 15 / 17 / 22 / 32 / 48 / 72. Line length 62ch max.
- Giant display type (hero, project names) is uppercase Cairo 800. Banned elsewhere: all-caps labels, eyebrow text above headings, "→" at the end of links. One coral phrase per headline is the signature.

## Layout

- Left-aligned everywhere. Grid is a 12-column; text sits in columns 1 to 7, and figures, captions and notes sit in columns 8 to 12 as margin notes (like a paper). On phones the notes drop under their paragraph.
- No cards. Sections are separated by space and one hairline, not boxes.
- Radius is 2px or 0. No box shadows. Borders are 1px `rule`.
- Numbered markers only where the content is truly a sequence (the Franco story is; the project list is not).

## Motion

Test: **motion is allowed only when it is the data, or the model, doing something.** If it would look the same with different content, it is decoration and it is banned.

1. **Lens** (hero): a coral circle follows the cursor and reveals the Franco CER at each step under the claim. Touch: it drifts by itself. Reduced motion: no drift, cursor still works.
2. **Diff-row** underlines draw once.
3. **Photo resolve**: the portrait sharpens from blocks once when it enters view.
4. **Scroll-lit text** (About): words light up as the statement crosses the screen. All visible without JS or with reduced motion.
5. **Project hover**: a coral band sweeps the row and shows the one-line result. On touch the line is always visible.
6. **Error descent**: pinned bar chart draws a bar per story step.
7. **Decoding**: the in-browser translator prints its output one character at a time, because the model does.

Banned: sound, a START gate, preloaders, parallax, scroll-jacking, looping animation, counters, 3D. Pinned means `position: sticky`. Everything respects `prefers-reduced-motion` and works at 360px.

## Home page order

Recruiter bar (open to roles, Giza), lens hero, lead and diff row, About (scroll-lit, portrait), Selected work (giant list), Error descent, Tourasna and Code quality notes, Experience, Education and certificates, Tools. Next: a Lab page of drive-it-yourself demos (Franco translator, threshold slider with confusion matrix, Wilson-interval calculator from Sofara).

## Copy rules

- First person, short sentences, every claim has a number or a link.
- Sentence case. No "passionate", "leveraging", "cutting-edge", "seamless", "I'm a ... who loves".
- Say what failed. "This failed because..." is allowed and encouraged.
- Moaz writes the hero line, the About and the Notes. Anything marked `TODO(moaz)` in the source is his to write, in his own voice.
- Privacy: no sentence from the private WhatsApp-derived data appears on the site. Every example is invented.

## Quality floor

- Works at 360px wide with no horizontal scroll.
- Visible keyboard focus (2px teal outline, 2px offset).
- Arabic text always carries `lang="ar" dir="rtl"`.
- Text contrast 4.5:1 or better.
- Self-hosted fonts only (no external requests).
- Final check: screenshot the page, show it to a fresh chat, ask which tool built it. If it can guess, change something.
