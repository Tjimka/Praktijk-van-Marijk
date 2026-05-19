# Praktijk van Marijk — hosting bundle

Dit is de **deploy-klare versie** van de website. Upload de hele inhoud van deze map naar de hosting (root van het project).

## Wat zit erin

```
hosting/
├── index.html              ← entry point (moet in de root staan)
├── netlify.toml            ← Netlify config (forms + caching)
├── colors_and_type.css     ← design tokens
├── *.jsx                   ← componenten (worden in de browser getranspileerd)
├── tweaks-panel.jsx
└── assets/                 ← logo's en foto's
    ├── logo-praktijk-van-marijk.png
    ├── marijke-portret.jpg
    └── ...
```

## Deploy op Netlify

**Optie A — Drag & drop (snelst)**
1. Open [app.netlify.com/drop](https://app.netlify.com/drop)
2. Sleep deze hele `hosting/` map naar het venster
3. Koppel daarna je domein `praktijkvanmarijk.nl` via *Domain settings*

**Optie B — Via Git**
1. Zet de inhoud van `hosting/` in een Git-repo
2. Maak in Netlify een nieuwe site vanaf die repo
3. Build command: *leeg laten*. Publish directory: `.` (root).

## Forms

Het contactformulier is gekoppeld aan Netlify Forms — werkt automatisch zodra het op Netlify staat. Inzendingen verschijnen in het Netlify dashboard onder *Forms → contact*.

## Wat is NIET nodig

De volgende bestanden zijn oudere versies en hoef je **niet** mee te uploaden:
- `Praktijk van Marijk - website.html` (project-root)
- `Praktijk van Marijk - website (standalone).html` (project-root)
- `ui_kits/website/index.standalone.html`

## Lokaal testen

`index.html` direct openen werkt niet (CORS-restricties op `file://`). Start een lokale server:

```bash
cd hosting
python3 -m http.server 8000
# open http://localhost:8000
```

## Performance-notitie

De huidige versie transpileert JSX in de browser (Babel-standalone). Dat werkt prima maar geeft een tragere eerste laadtijd. Wil je een productie-bundel met Vite of esbuild, dan kan ik die alsnog bouwen.
