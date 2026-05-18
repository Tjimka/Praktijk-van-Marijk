# Praktijk van Marijk — Design System

Een kalm, geaard en zakelijk designsysteem voor **Praktijk van Marijk** — de praktijk van Marijke Koomen, SKJ-geregistreerd jeugdprofessional. Training, casuïstiekcoaching, teamintervisie en mentorschap voor jeugdprofessionals bij wijkteams, jeugdbescherming en gemeentelijke jeugdzorg.

Marijke helpt hulpverleners intiem terreur en machtsdisbalans herkennen, en vertalen naar feitelijke verslaglegging en professioneel handelen. *Van onderbuikgevoel naar onderbouwde verslaglegging.* De uitstraling is die van een senior consultancypraktijk — niet van een therapeutenpraktijk.

> ⚠ **Naamgeving:** de brief sprak van *"Praktijk van Marijke"*, de aangeleverde brandingpagina zegt *"Praktijk van Marijk"* (zonder slot-e) met *"jeugdprofessionals"* als sub-lockup. Ik heb de brandingpagina aangehouden. Graag bevestigen welke vorm correct is.

---

## Bronnen

- **Brief:** bedrijfsomschrijving, kleuren, typografie, stijl en paginastructuur (Nederlandstalig).
- **Brandingpagina:** `uploads/praktijk_van_marijk_brandingpagina.html` — concrete HTML-referentie met topbar, hero, herkenning-kaarten, quote-strip, aanbod-grid en kleurenpalet. Dit is de **visuele bron van waarheid**; het paletvoorstel uit de brief (terracotta + olijf) is vervangen door wat de brandingpagina laat zien: **bordeaux primair, oker secundair, olijf tertiair**.

Er was geen codebase of Figma. Als die later volgen: tokens bijwerken in `colors_and_type.css`.

---

## Index

- `README.md` — dit bestand
- `SKILL.md` — skill-manifest
- `colors_and_type.css` — design tokens (kleur, type, spacing, radii)
- `assets/` — logo-placeholder en mark
- `preview/` — kaarten voor de Design System-tab
- `ui_kits/website/` — hi-fi recreatie van homepage + subpagina's + contact

---

## Content Fundamentals

De toon is **kalm, helder en professioneel-collegiaal**. Nederlandstalig. Geschreven alsof een senior consultant je toespreekt — niet bemoedigend of therapeutisch. De brandingpagina laat het voorbeeld helder zien: *"Je voelt dat er iets niet klopt. Je kunt het alleen nog niet op papier krijgen."*

### Taal en perspectief
- **Nederlands**, formeel-collegiaal. Vakjargon is welkom: *intiem terreur, machtsdisbalans, SKJ-registratie, casuïstiek, risicotaxatie, verslaglegging*.
- **"Je" is de default** op de site — de referentie doet dat consistent (*"Je casus klopt niet", "Je ziet twee ouders"*). "U" alleen waar het zakelijk moet (formele correspondentie).
- **"Ik" op homepage en over-pagina**, maar gedoseerd: *"Dat is precies waar ik begin"*. De praktijk spreekt, niet de marketing-afdeling.
- **Zinskapitaal (sentence case)** voor koppen, knoppen en nav.
- **Geen uitroeptekens. Geen emoji.** Geen marketing-taal.

### Voorbeelden (uit de brandingpagina)

| Element        | Kopij                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Eyebrow        | *SKJ-geregistreerd jeugdprofessional*                                                |
| Hero h1        | *Je voelt dat er iets niet klopt. Je kunt het alleen nog niet op papier krijgen.*    |
| Hero sub       | *Marijke Koomen helpt jeugdprofessionals de onderstroom te vertalen naar taal…*      |
| Sectielabel    | *Herkenbaar?* — *Wat ik aanbied*                                                     |
| Card-titel     | *Je casus klopt niet, maar je kunt het niet benoemen*                                |
| Aanbod-titel   | *Groepstraining* — *Casuïstiekcoaching* — *Teamintervisie* — *Mentorschap*           |
| Testimonial    | *"Eindelijk iemand die weet waar ik het over heb."* — gezinsvoogd, wijkteam N-Holland |
| Primaire CTA   | *Neem contact op*                                                                    |

### Tone — wel/niet
- **Wel:** feitelijk, herkennend, bondig, respectvol, rustig gezaghebbend. De lezer bij de hand nemen zonder te troosten.
- **Niet:** opbeurend, activistisch, bloemrijk, speels, emoji-rijk, marketing.

---

## Visual Foundations

### Kleurpalet (uit brandingpagina)

| Token         | Hex       | Rol                                                 |
|---------------|-----------|-----------------------------------------------------|
| `--bg`        | `#FAF8F4` | gebroken wit / bone — globale achtergrond           |
| `--fg1`       | `#2E1F0E` | diep warmbruin / bijna koffiezwart — primaire tekst |
| `--fg2`       | `#5A4A38` | secundaire tekst                                    |
| `--line`      | `#E0D8CC` | dunne scheidingslijn (visueel 0.5px)                |
| `--accent`    | `#89221D` | **bordeaux / oxblood** — primaire actiekleur        |
| `--accent-2`  | `#A6AC3E` | **olijfgroen** — secundair, ondersteunend accent     |
| `--accent-2-soft` | `#F0F2E4` | **olijf licht** — zachte card-achtergrond (middelste herkenning-kaart) |
| `--accent-3`  | `#CF872D` | **oker / amber** (okergoud) — tertiair; accentlijnen, cijfers |
| `--surface`   | `#FFFFFF` | kaart/contrast                                      |
| `--surface-dark` | `#2E1F0E` | donkere quote-strip / contrastvlak               |

**Regels:**
- Nooit twee accenten als blok naast elkaar. Wel als smalle bovenrand van aparte kaarten (zoals in referentie).
- Quote-strips en contrastvlakken zijn **donkerbruin** (`#2E1F0E`), niet zwart.
- Geen gradients, geen texturen.

### Typografie
- **Titels / accentfont:** **Lora** (serif, weight 500). Gebruikt voor hero-h1, section-hoofdings, card-titels, en quotes (italic 400).
- **Broodtekst / UI-font:** **DM Sans** (400 body, 500 medium, 600 strong). Gebruikt voor alle body, labels, navigatie, knoppen, eyebrows.
- **Geen Inter meer.** De v3-referentie combineert Lora + DM Sans — Lora voegt warmte en gewicht toe aan titels zonder therapeutisch te worden; DM Sans houdt UI rustig en modern.
- Beide via Google Fonts.

### Spacing
Basis 8px. Secties op desktop hebben 48–64px verticale padding (referentie). Page padding horizontaal 48px. Grid: 3-koloms voor herkenning-kaarten, 4-koloms voor aanbod.

### Borders, lijnen, hoeken
- **Zeer dunne lijnen**: 0.5px in `--line` — scheidingslijnen tussen secties, kaartranden.
- **Kaarten** hebben naast hun 0.5px border een **3px kleur-topborder** (amber/olijf/bordeaux) als categorisatie. Dit is geen AI-slop-trope hier; het is het signatuurelement van de referentie.
- **Radii:** 4px knoppen, 6px kaarten, 0 scheidingslijnen.

### Schaduwen
Zeer terughoudend. Alleen op hover-menus of modals; op pagina-niveau geen shadows.

### Knoppen
- **Primair:** bordeaux `#89221D`, witte tekst, `radius 4px`, padding `10px 22px`, 13px DM Sans 500, **0.03em tracking**. Hover donkerder (`#6F1A17`), press `#5A1512`.
- **Secundair:** transparant, 1px bordeaux border, bordeaux tekst.
- **Tertiair / link:** bordeaux tekst, onderstreping alleen bij hover.
- **Focus:** 2px ring bordeaux @ 35% opacity, 2px offset.

### Backgrounds en beeldmateriaal
- **Geen patronen, geen texturen, geen gradients.**
- **Fotografie:** warm, natuurlijk licht, portret van Marijke in `#E8DFD2`-achtige tint. Geen stockfoto-gelach.
- Hero-beeld is gesplit: tekst links, portret rechts, met een **4px oker accent-strip** links van het portret (signatuurdetail).

### Animatie
Spaarzaam. Fades en subtiele translate-on-enter (8–12px). Easing `cubic-bezier(0.22, 1, 0.36, 1)`. 200ms micro, 400ms sectie-entry. Geen auto-carousels.

### Hover / press
- **Links:** onderstreping verschijnt bij hover, kleur constant.
- **Nav active:** 1.5px bordeaux underline onder het item.
- **Kaarten:** geen verplaatsing of shadow op hover; lichte achtergrondverschuiving (`--bg-sunken`).
- **Knoppen:** kleur donkerder; **geen shrink**.

### Layoutregels
- 12-koloms denken, max 1200px container, 48px horizontal padding.
- Leeslijn (broodtekst) max 680px.
- Secties gescheiden door één dunne lijn **of** veel witruimte, nooit beide.

---

## Iconography

- **Icon-systeem:** [Lucide](https://lucide.dev) via CDN — lijn-iconen, 1.5px stroke. Past bij de dunne 0.5px-lijnstijl van de rest van de UI.
- **Stroke:** 1.5px (onder default). **Kleur:** erft `currentColor`. **Grootte:** 18px inline, 20–24px in UI-chrome.
- **Geen emoji. Geen unicode-pijlen/-sterretjes/-vinkjes.** Gebruik Lucide-equivalenten.
- **Geen illustraties.** Alleen fotografie of lijn-iconen.
- **Geen gevulde iconen.**

### Logo
⚠ **Geen logo aangeleverd.** In `assets/logo.svg` staat een tekstuele wordmark: *"Praktijk van Marijk"* (DM Sans 500) met *"jeugdprofessionals"* als bordeaux sub-lockup, precies zoals in de brandingpagina-topbar. Vervang zodra een definitief logo beschikbaar is.

---

## Manifest

### Root
- `README.md` — dit bestand
- `SKILL.md` — Claude Skill manifest
- `colors_and_type.css` — tokens (kleur, type, spacing, radii, motion)

### `assets/`
- `logo.svg` — wordmark-placeholder (te vervangen)
- `mark.svg` — mark-placeholder

### `preview/` — Design System-kaarten
- Colors: accents · surfaces · text
- Type: display · body · labels · eyebrow-usage
- Spacing: scale · radii · elevation
- Components: buttons · inputs · cards · numbered-grid · quote-strip · navbar
- Brand: logo · iconography

### `ui_kits/website/`
- `index.html` — entry
- `App.jsx` · `Topbar.jsx`/`Chrome.jsx` · `Primitives.jsx`
- `Home.jsx` · `Over.jsx` · `Professionals.jsx` · `Werkwijze.jsx` · `Ervaringen.jsx` · `Contact.jsx`

---

## Caveats

Zie einde van het bericht in chat voor open vragen.
