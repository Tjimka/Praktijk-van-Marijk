function Professionals({ skjPlacement = 'bottom-aligned' }) {
  const rollen = [
    {
      title: 'Wijkteams',
      body: 'Generalisten die signalen willen duiden zonder te vroeg te escaleren of te laat te handelen.',
      accent: 'amber',
    },
    {
      title: 'Jeugdbescherming',
      body: 'Gezinsvoogden en raadsonderzoekers die in dossiers en zittingen onderbouwd willen rapporteren.',
      accent: 'bordeaux',
    },
    {
      title: 'Gedragswetenschappers',
      body: 'Die collega\u2019s op casusniveau willen meenemen in herkenning en taxatie van intiem terreur.',
      accent: 'olive',
    },
    {
      title: 'Teamleiders en managers',
      body: 'Die borging en methodische rust willen in teams onder druk.',
      accent: 'amber',
    },
  ];

  // ── SKJ-strip variaties ──────────────────────────────────────────────
  const SkjBlock = () => (
    <div style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: 14, padding: '10px 16px 10px 14px', border: '0.5px solid var(--line)', borderLeft: '3px solid var(--accent-2)', background: 'var(--accent-2-soft)', borderRadius: 4 }}>
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500 }}>SKJ-registratie</div>
      <div style={{ width: '0.5px', height: 16, background: 'var(--line)' }} />
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg1)', letterSpacing: '0.02em' }}>110005309</div>
    </div>
  );

  // Compacte inline-variant zonder pill, voor 'above-eyebrow'
  const SkjInline = () => (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', flexWrap: 'wrap', gap: 10, marginBottom: 18, paddingBottom: 12, borderBottom: '0.5px solid var(--line)' }}>
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500 }}>SKJ</div>
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg1)', letterSpacing: '0.02em' }}>110005309</div>
    </div>
  );

  // Brede strip, voor 'footer-strip'
  const SkjStrip = () => (
    <div style={{ borderTop: '0.5px solid var(--line)', borderBottom: '0.5px solid var(--line)', background: 'var(--bg-sunken)' }}>
      <div style={{ padding: '14px 48px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 18 }}>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500 }}>SKJ-registratie</div>
        <div style={{ width: '0.5px', height: 16, background: 'var(--line-strong)' }} />
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--fg1)', letterSpacing: '0.02em' }}>110005309</div>
        <div style={{ marginLeft: 'auto', fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg3)', fontStyle: 'italic' }}>
          Geregistreerd jeugdprofessional · 18+ jaar werkervaring in de jeugdketen
        </div>
      </div>
    </div>
  );

  // Foto-bijschrift met SKJ erin verwerkt, voor 'caption-bar'
  const PhotoCaption = ({ withSkj }) => {
    if (!withSkj) {
      return (
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg3)', marginTop: 10, lineHeight: 1.55 }}>
          Werken aan casus en taal, naast de professional, niet erboven.
        </div>
      );
    }
    return (
      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8, borderTop: '0.5px solid var(--line)', paddingTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500 }}>SKJ</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12.5, fontWeight: 600, color: 'var(--fg1)', letterSpacing: '0.02em' }}>110005309</div>
        </div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg3)', lineHeight: 1.55 }}>
          Werken aan casus en taal, naast de professional, niet erboven.
        </div>
      </div>
    );
  };

  const inHeroBottom = skjPlacement === 'bottom-aligned';
  const aboveEyebrow = skjPlacement === 'above-eyebrow';
  const captionBar   = skjPlacement === 'caption-bar';
  const footerStrip  = skjPlacement === 'footer-strip';

  return (
    <div>
      {/* ============ HERO ============ */}
      <div
        className="over-hero"
        style={inHeroBottom ? { alignItems: 'stretch' } : undefined}
      >
        <div
          className="over-hero__text"
          style={inHeroBottom ? { display: 'flex', flexDirection: 'column' } : undefined}
        >
          {aboveEyebrow && <SkjInline />}
          <Eyebrow>Voor professionals</Eyebrow>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 24px', textWrap: 'balance' }}>
            Voor wie deze praktijk is.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.7, margin: 0, maxWidth: '74ch' }}>
            Ik werk met professionals die dagelijks beslissingen nemen die het leven van kinderen raken. Dat vraagt om preciezer kijken en preciezer schrijven dan wat een standaardtraining biedt.
          </p>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7, margin: '24px 0 0', maxWidth: '74ch' }}>
            Je werkt in een systeem dat is ingericht op samenwerking tussen ouders. Echter bij intiem terreur is er geen samenwerking. Er is een kant die controleert en een kant die overleeft. Als je dat niet herkent, dan werk je onbewust mee aan het in stand houden van de situatie.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7, margin: '16px 0 0', maxWidth: '74ch' }}>
            Dat is niet jouw fout. Het is een blinde vlek die in bijna elke opleiding ontbreekt. Ik werk met professionals die die blinde vlek willen dichten, zonder dat het ten koste gaat van hun professionele positie of hun dossiervoering.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7, margin: '24px 0 0', maxWidth: '74ch' }}>
            Intiem terreur en een machtsdisbalans in complexe gezinssystemen zijn geen randverschijnselen. Ze zitten in een groot deel van de casuïstiek waar wijkteams, gezinsvoogden en raadsonderzoekers dagelijks mee werken. Herkenning begint met preciezer kijken. Professioneler handelen begint met preciezer en meer feitelijk schrijven.
          </p>

          {inHeroBottom && (
            <div style={{ marginTop: 'auto', paddingTop: 32 }}>
              <SkjBlock />
            </div>
          )}
        </div>

        {/* Foto rechts */}
        <div className="over-hero__portret">
          <div style={{ background: 'var(--beige)', borderRadius: 6, aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent-3)', zIndex: 2 }} />
            <img
              src={(window.__resources && window.__resources.marijkeGesprek) || "assets/marijke-gesprek.jpg"}
              alt="Marijke in gesprek met een professional"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%', display: 'block' }}
            />
          </div>
          <PhotoCaption withSkj={captionBar} />
        </div>
      </div>

      {footerStrip && <SkjStrip />}
      {!footerStrip && <SectionDivider />}

      {/* ============ DOELGROEPKAARTEN ============ */}
      <div style={{ padding: '64px 48px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 64, alignItems: 'start', marginBottom: 32 }}>
          <div>
            <Eyebrow>Doelgroepen</Eyebrow>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: 0, maxWidth: 320, textWrap: 'balance' }}>
              Vier rollen, één gemeenschappelijke vraag.
            </h2>
          </div>
          <div style={{ paddingTop: 4 }}>
            <p style={{ fontSize: 14, color: 'var(--fg2)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>
              Generalisten en specialisten met verschillende verantwoordelijkheden, die elk vanuit hun eigen positie precies willen kijken en precies willen schrijven.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {rollen.map((r) => (
            <Card key={r.title} accent={r.accent} style={r.accent === 'olive' ? { background: '#ffffff' } : undefined}>
              <div style={{ fontFamily: 'Lora, serif', fontSize: 19, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.35 }}>
                {r.title}
              </div>
              <div style={{ fontSize: 14.5, color: 'var(--fg2)', lineHeight: 1.7 }}>
                {r.body}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* ============ PROBLEEMSCHETS ============ */}
      <div style={{ padding: '72px 48px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>Wat professionals meemaken</Eyebrow>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: 0, maxWidth: 320, textWrap: 'balance' }}>
              Wat je voelt, zonder dat je het kunt benoemen.
            </h2>
          </div>
          <div style={{ maxWidth: 640 }}>
            <p style={{ fontSize: 16, color: 'var(--fg2)', lineHeight: 1.8, margin: '0 0 20px' }}>
              Je voelt in een gesprek dat er iets niet klopt. De ene ouder praat voor de ander. De kinderen kijken anders als vader in de buurt is. Wat schrijf je in je dossier? Ouders hebben een conflict. Want dat is wat je kunt benoemen.
            </p>
            <p style={{ fontSize: 16, color: 'var(--fg2)', lineHeight: 1.8, margin: '0 0 20px' }}>
              Intiem terreur ziet er aan de buitenkant anders uit dan dat het van binnen werkt. Daders functioneren vaak goed in het contact met hulpverleners. Slachtoffers reageren veelal emotioneel. En jij, jij werkt met een methodiek die uitgaat van twee gelijkwaardige partijen. Want dat is vaak wat jij op het eerste oog als professioneel ziet.
            </p>
            <p style={{ fontFamily: 'Lora, serif', fontSize: 18, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Dat is niet jouw tekortkoming. Het is een blinde vlek in het systeem. Die blinde vlek is (gelukkig) te corrigeren.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ============ WANNEER PAST DIT NIET ============ */}
      <div style={{ padding: '64px 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>Wanneer past dit niet</Eyebrow>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: 0, maxWidth: 320, textWrap: 'balance' }}>
              De grenzen van wat ik wel en niet doe.
            </h2>
          </div>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, border: '0.5px solid var(--line)', borderRadius: 6, overflow: 'hidden', background: 'var(--surface)' }}>
              <div style={{ padding: '22px 24px', borderBottom: '0.5px solid var(--line)' }}>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 8 }}>
                  Niet voor cliënten
                </div>
                <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7, margin: 0 }}>
                  Deze praktijk is niet gericht op cliënten, slachtoffers of daders. Voor individuele hulp verwijs ik graag door.
                </p>
              </div>
              <div style={{ padding: '22px 24px' }}>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 8 }}>
                  Geen casusovername
                </div>
                <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7, margin: 0 }}>
                  Ook neem ik geen casussen over. Ik versterk het handelen van de professional, ik vervang het niet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Professionals });
