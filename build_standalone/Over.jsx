function Over() {
  const tijdlijn = [
    ['2006 — 2009', 'Begeleider bij Lijn5, jeugdzorg.', null],
    ['2009 — 2017', 'Jeugd- en Gezinsbeschermer, De Jeugd- en Gezinsbeschermers Noord-Holland.', 'Regie over complexe casuïstiek. Verantwoording aan kinderrechter en Raad voor de Kinderbescherming.'],
    ['2017', 'Jeugd- en Gezinscoach, Gemeente Alkmaar.', null],
    ['2018', 'Jeugddeskundige, Gemeente Heerhugowaard.', null],
    ['2018 — 2020', 'Medewerker Team Inzet, Gemeente Drechterland.', null],
    ['2020 — 2021', 'Medewerker Veilig Thuis Noord-Holland Noord.', 'Veiligheidsanalyses, risicotaxaties, zwaarwegende adviezen.'],
    ['2021 — 2022', 'Jeugdhulpverlener Wijkteam Medemblik.', null],
    ['2023 — 2024', 'Procesbegeleider Kinderopvangtoeslagenaffaire.', 'Traumasensitief werken, hersteltrajecten.'],
    ['2024 — heden', 'Praktijk van Marijk — eigen praktijk.', 'Training en begeleiding van jeugdprofessionals op het thema intiem terreur.'],
  ];

  const samenwerkingen = [
    'Veilig Thuis Noord-Holland Noord',
    'Raad voor de Kinderbescherming',
    'Jeugdprofessionals Nederland',
    'Gemeente Alkmaar',
    'Gemeente Heerhugowaard',
    'Gemeente Drechterland',
    'Gemeente Medemblik',
    'De Jeugd- en Gezinsbeschermers',
  ];

  return (
    <div>
      {/* ============ HERO ============ */}
      <div style={{ padding: '64px 48px 48px', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <Eyebrow>Over Marijke</Eyebrow>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 24px', textWrap: 'balance', maxWidth: 580 }}>
            Ik werk sinds 2006 met jeugdprofessionals, en richt me volledig op één vraag.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 560 }}>
            Hoe herken je intiem terreur en machtsdisbalans in een gezin, en hoe vertaal je dat naar taal die standhoudt in rapportage, raadkamer en zitting?
          </p>
          <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 560 }}>
            Mijn achtergrond is in de jeugdbescherming. Ik ken het werk van binnenuit: de caseload, het taalgebruik, de druk van een multidisciplinair overleg, en hoe een onderbuikgevoel in een dossier verdampt als je het niet feitelijk kunt onderbouwen.
          </p>
          <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>
            Ik ben SKJ-geregistreerd en werk voor wijkteams, GI's en gemeentelijke jeugdzorginstellingen.
          </p>

          {/* SKJ-strip */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginTop: 28, padding: '10px 16px 10px 14px', border: '0.5px solid var(--line)', borderLeft: '3px solid var(--accent-3)', background: 'var(--surface)', borderRadius: 4 }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500 }}>SKJ-registratie</div>
            <div style={{ width: '0.5px', height: 16, background: 'var(--line)' }} />
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg1)', letterSpacing: '0.02em' }}>110005309</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg2)' }}>geldig t/m 25-05-2028</div>
          </div>
        </div>

        {/* Portret */}
        <div>
          <div style={{ background: 'var(--beige)', borderRadius: 6, aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent-3)', zIndex: 2 }} />
            <img
              src={window.__resources.overPortret}
              alt="Portret van Marijke Koomen"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }}
            />
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg3)', marginTop: 10, lineHeight: 1.55 }}>
            Marijke Koomen — trainer, coach en jeugdprofessional. Werkzaam vanuit Noord-Holland.
          </div>
        </div>
      </div>

      {/* ============ KERNZIN — dark quote strip ============ */}
      <div style={{ background: 'var(--surface-dark)', padding: '56px 48px', display: 'flex', alignItems: 'flex-start', gap: 28 }}>
        <div style={{ fontSize: 64, color: 'var(--accent-3)', lineHeight: 0.85, fontFamily: 'Lora, Georgia, serif', flexShrink: 0, marginTop: -6 }}>&ldquo;</div>
        <div style={{ maxWidth: 820 }}>
          <div style={{ fontFamily: 'Lora, serif', fontSize: 24, fontWeight: 500, color: 'var(--fg-on-dark)', lineHeight: 1.45, fontStyle: 'italic', textWrap: 'balance' }}>
            Ik maak zichtbaar wat onder de oppervlakte speelt en vertaal dit naar concrete interventies en heldere veiligheidskaders.
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--accent-2)', marginTop: 18, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>
            Marijke Koomen — werkwijze in één zin
          </div>
        </div>
      </div>

      {/* ============ TIJDLIJN ============ */}
      <div style={{ padding: '72px 48px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 64, alignItems: 'start', marginBottom: 36 }}>
          <div>
            <Eyebrow>Achtergrond</Eyebrow>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: 0, maxWidth: 280 }}>
              Bijna twintig jaar werkervaring in de jeugdketen.
            </h2>
          </div>
          <div style={{ paddingTop: 4 }}>
            <p style={{ fontSize: 14, color: 'var(--fg2)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>
              Van uitvoerend hulpverlener tot gezinsbeschermer en procesbegeleider. Elke rol heeft bijgedragen aan hoe ik nu naar gezinnen, professionals en systemen kijk.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '0.5px solid var(--line)' }}>
          {tijdlijn.map(([yr, title, note], i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 48,
                padding: '22px 0 22px',
                borderBottom: '0.5px solid var(--line)',
                alignItems: 'baseline',
              }}
            >
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--accent-3)',
                letterSpacing: '0.02em',
                fontVariantNumeric: 'tabular-nums',
              }}>{yr}</div>
              <div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.55 }}>
                  {title}
                </div>
                {note && (
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13.5, color: 'var(--fg2)', lineHeight: 1.65, marginTop: 4, maxWidth: 620 }}>
                    {note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* ============ SAMENGEWERKT MET ============ */}
      <div style={{ padding: '64px 48px 48px' }}>
        <Eyebrow>Samengewerkt met</Eyebrow>
        <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: '0 0 28px', maxWidth: 520 }}>
          Opdrachtgevers en samenwerkingspartners in de jeugdketen.
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '0.5px solid var(--line)',
          borderLeft: '0.5px solid var(--line)',
        }}>
          {samenwerkingen.map((name, i) => (
            <div
              key={i}
              style={{
                borderRight: '0.5px solid var(--line)',
                borderBottom: '0.5px solid var(--line)',
                padding: '28px 20px',
                minHeight: 96,
                display: 'flex',
                alignItems: 'center',
                background: 'var(--surface)',
              }}
            >
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--fg1)',
                lineHeight: 1.4,
                letterSpacing: '0.01em',
              }}>{name}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg3)', marginTop: 14, lineHeight: 1.5 }}>
          Plaatsing van logo's op verzoek en met toestemming van de organisatie.
        </div>
      </div>

      <SectionDivider />

      {/* ============ OPLEIDING ============ */}
      <div style={{ padding: '64px 48px 80px', display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 64, alignItems: 'start' }}>
        <div>
          <Eyebrow>Opleiding en methodieken</Eyebrow>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: 0, maxWidth: 280 }}>
            Pedagogisch geschoold, juridisch onderlegd.
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 16, color: 'var(--fg2)', lineHeight: 1.75, margin: 0, maxWidth: 620 }}>
            HBO Pedagogiek (PsychoSociaal Werk). Post-HBO Gestalt Therapie (NSG Amsterdam). Aangevuld met specialisaties in juridische kaders, familierecht en dwingende controle (Stichting Het Verdwenen Zelf, 2025).
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Over });
