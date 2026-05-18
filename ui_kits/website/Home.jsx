function Home({ setRoute }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 460 }}>
        <div style={{ padding: '72px 48px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow>SKJ-geregistreerd jeugdprofessional</Eyebrow>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 32, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.3, margin: '0 0 20px', textWrap: 'balance', maxWidth: 480 }}>
            Je voelt dat er iets niet klopt. Je kunt het alleen nog niet op papier krijgen.
          </h1>
          <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7, maxWidth: 440, margin: '0 0 32px' }}>
            Marijke Koomen helpt jeugdprofessionals de onderstroom te vertalen naar taal. Van onderbuikgevoel naar onderbouwde verslaglegging en helder handelen.
          </p>
          <div>
            <Button onClick={() => setRoute('contact')}>Neem contact op&nbsp;→</Button>
          </div>
        </div>
        <div style={{ background: 'var(--beige)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent-3)', zIndex: 2 }}></div>
          <img src={(window.__resources && window.__resources.marijkeSessie) || "assets/marijke-sessie.jpg"} alt="Marijke Koomen in gesprek met twee professionals aan tafel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block', position: 'absolute', inset: 0 }} />
        </div>
      </div>
      <SectionDivider />

      {/* Herkenning */}
      <div style={{ padding: '56px 48px 48px' }}>
        <Eyebrow>Herkenbaar?</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Card accent="bordeaux">
            <div style={{ fontFamily: 'Lora, serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.45 }}>Je casus klopt niet, en toch kun je het niet op papier krijgen.</div>
            <div style={{ fontSize: 13, color: 'var(--fg2)', lineHeight: 1.6 }}>Je hebt een knoop in je maag na elk gesprek met die ene ouder. Je schrijft het op. Het klinkt alleen niet overtuigend. Dat is precies waar ik begin.</div>
          </Card>
          <Card accent="olive">
            <div style={{ fontFamily: 'Lora, serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.45 }}>De training zat vol goede inzichten. Een week later was alles weg.</div>
            <div style={{ fontSize: 13, color: 'var(--fg2)', lineHeight: 1.6 }}>Kennis wegzakt zodra de werkdruk terugkomt. Dat is geen persoonlijk falen. Het vraagt een andere aanpak om het werkbaar te houden.</div>
          </Card>
          <Card accent="amber">
            <div style={{ fontFamily: 'Lora, serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.45 }}>Je ziet twee ouders. De dynamiek is niet gelijkwaardig.</div>
            <div style={{ fontSize: 13, color: 'var(--fg2)', lineHeight: 1.6 }}>Bij intiem terreur is er altijd sprake van een machtsdisbalans. Het past niet op een afvinklijstje. Het is wel zichtbaar, als je weet waar je op let.</div>
          </Card>
        </div>
      </div>

      {/* Aanbod */}
      <div style={{ padding: '8px 48px 56px' }}>
        <Eyebrow>Wat ik aanbied</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            ['01', 'Groepstraining', 'Intiem terreur, coercive control, signalering en risicotaxatie. Altijd met eigen casuïstiek van de deelnemers.'],
            ['02', 'Casuïstiekcoaching', 'Individuele begeleiding voor professionals die vastlopen in een specifieke casus.'],
            ['03', 'Teamintervisie', 'Voor teams die te maken hebben met geëscaleerde of vastgelopen casuïstiek.'],
            ['04', 'Mentorschap', 'Periodieke begeleiding om inzichten te borgen in dagelijks handelen.'],
          ].map(([nr, title, body]) => (
            <Card key={nr} style={{ padding: '20px 18px' }}>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 24, fontWeight: 500, color: 'var(--accent-3)', marginBottom: 10, lineHeight: 1 }}>{nr}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--fg1)', marginBottom: 6, letterSpacing: '0.01em' }}>{title}</div>
              <div style={{ fontSize: 12.5, color: 'var(--fg2)', lineHeight: 1.55 }}>{body}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quote strip */}
      <div style={{ background: 'var(--surface-dark)', padding: '44px 48px', display: 'flex', alignItems: 'flex-start', gap: 28 }}>
        <div style={{ fontSize: 56, color: 'var(--accent-3)', lineHeight: 0.9, fontFamily: 'Lora, Georgia, serif', flexShrink: 0, marginTop: -4 }}>&ldquo;</div>
        <div style={{ maxWidth: 760 }}>
          <div style={{ fontFamily: 'Lora, serif', fontSize: 19, fontWeight: 400, color: 'var(--fg-on-dark)', lineHeight: 1.55, fontStyle: 'italic' }}>Eindelijk iemand die weet waar ik het over heb. Ik voelde mijn hele lijf ontspannen.</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--accent-2)', marginTop: 14, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>Gezinsvoogd, wijkteam Noord-Holland</div>
        </div>
      </div>

      {/* Slot-CTA */}
      <div style={{ padding: '64px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32 }}>
        <div>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 24, fontWeight: 500, color: 'var(--fg1)', margin: '0 0 8px', lineHeight: 1.3 }}>Klaar om verder te kijken?</h2>
          <p style={{ fontSize: 15, color: 'var(--fg2)', margin: 0, maxWidth: 520, lineHeight: 1.65 }}>Neem contact op voor een vrijblijvende kennismaking. Ik reageer binnen twee werkdagen.</p>
        </div>
        <Button onClick={() => setRoute('contact')}>Plan een kennismaking&nbsp;→</Button>
      </div>
    </div>
  );
}

Object.assign(window, { Home });
