---
name: praktijk-van-marijk-design
description: Use this skill to generate well-branded interfaces and assets for Praktijk van Marijk (Marijke Koomen — training, casuïstiekcoaching, teamintervisie en mentorschap for Dutch youth-care professionals). Produces calm, grounded, senior-consultancy visuals in Dutch. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `README.md` within this skill first, then explore `colors_and_type.css`, `assets/`, and `ui_kits/website/`.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files. Import `colors_and_type.css` as the token source of truth; do not invent new colors. If working on production code, copy assets and read the rules here to become an expert designer for this brand.

If the user invokes this skill without other guidance, ask what they want to build, ask a few questions (page, audience, fidelity, confirm Dutch + formal-collegial tone), then act as an expert designer.

**Hard rules — do not break without explicit approval:**
- Palette: bordeaux `#89221D` primary, olive `#A6AC3E` secondary, amber `#CF872D` tertiary, bone `#FAF8F4` background, warm-dark `#2E1F0E` text. Never gradients, patterns, or textures.
- Type: Lora (accentfont — titels, card-titles, quotes; weight 500 roman, 400 italic), DM Sans (hoofdfont — body 15/17px line-height 1.7, labels, nav, knoppen). Geen Inter.
- Lines are 0.5px in `#E0D8CC`. Cards carry a 3px colored top-border for categorisation.
- Buttons: bordeaux fill, white text, 4px radius, 10×22 padding, 13px, 0.03em tracking.
- Icons: Lucide only, 1.5px stroke, line-style. No emoji, no unicode glyphs as icons, no illustrations, no filled icons.
- Copy: Dutch, sentence case, short sentences. Default pronoun "je". "Ik" gedoseerd op home/over. Geen uitroeptekens, geen marketing-taal.
- No popups, no chat widgets, no auto-carousels, no blog, no e-commerce.
