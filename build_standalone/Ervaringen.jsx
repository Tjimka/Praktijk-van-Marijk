function Ervaringen() {
  const quotes = [
    ['Eindelijk iemand die weet waar ik het over heb. Ik voelde mijn hele lijf ontspannen.', 'gezinsvoogd, wijkteam Noord-Holland'],
    ['Na de training schreef ik voor het eerst een rapport dat standhield in de raadkamer. Zonder dat ik mijn onderbuikgevoel hoefde weg te redeneren.', 'raadsonderzoeker, Raad voor de Kinderbescherming'],
    ['Marijke haalt dingen naar boven waar je zelf niet bij komt. En ze laat het niet zweven — je kunt er maandagochtend iets mee.', 'teamleider jeugdbescherming, Gelderland'],
  ];
  return (
    <div>
      <div style={{ padding: '64px 48px 32px', maxWidth: 760 }}>
        <Eyebrow>Ervaringen</Eyebrow>
        <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 20px' }}>
          Wat professionals na een traject meenemen.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.75, margin: 0 }}>
          Alle ervaringen zijn geanonimiseerd, met toestemming gedeeld.
        </p>
      </div>
      <SectionDivider />
      {quotes.map(([text, source], i) => (
        <React.Fragment key={i}>
          <div style={{ padding: '48px 48px', maxWidth: 820 }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 48, color: 'var(--accent-3)', lineHeight: 1, marginBottom: 12 }}>&ldquo;</div>
            <div style={{ fontFamily: 'Lora, serif', fontStyle: 'italic', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, marginBottom: 16 }}>{text}</div>
            <div style={{ fontSize: 13, color: 'var(--fg2)', letterSpacing: '0.04em' }}>{source}</div>
          </div>
          {i < quotes.length - 1 && <SectionDivider />}
        </React.Fragment>
      ))}
      {/* Dark closing strip */}
      <div style={{ background: 'var(--surface-dark)', padding: '40px 48px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ fontSize: 13, color: 'var(--fg-on-dark)', lineHeight: 1.7, maxWidth: 620 }}>
          Referenties op aanvraag beschikbaar voor organisaties die een traject overwegen. Neem contact op voor een kennismaking.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Ervaringen });
