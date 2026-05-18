function Werkwijze() {
  const fasen = [
    ['01', 'Analyse', 'We brengen samen in kaart welke casussen of teamdynamieken vastlopen. Wat is herkenbaar, wat niet? Welke taal ontbreekt?', 'Intake (1 uur)'],
    ['02', 'Training', 'In een serie bijeenkomsten werken we aan herkenning van intiem terreur, risicotaxatie en feitelijke verslaglegging. Altijd met eigen casuïstiek.', '3 — 6 dagdelen'],
    ['03', 'Borging', 'Mentorschap en intervisie om inzichten in dagelijks handelen te laten landen. Geen nazorg als formaliteit; een werkende feedbackloop.', '3 — 6 maanden'],
  ];
  return (
    <div>
      <div style={{ padding: '64px 48px 32px', maxWidth: 760 }}>
        <Eyebrow>Werkwijze</Eyebrow>
        <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 20px' }}>
          Drie fasen. Geen afvinklijstje.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.75, margin: 0 }}>
          Ieder traject begint met een analyse, heeft een trainingscomponent, en sluit af met borging. De verhouding verschilt per organisatie; de volgorde staat vast.
        </p>
      </div>
      <SectionDivider />
      <div style={{ padding: '48px 48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {fasen.map(([nr, title, body, duur], i) => (
            <div key={nr} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 140px',
              gap: 32,
              padding: '32px 0',
              borderBottom: i < fasen.length - 1 ? '0.5px solid var(--line)' : 'none',
              alignItems: 'start',
            }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 36, fontWeight: 500, color: 'var(--accent-3)', lineHeight: 1 }}>{nr}</div>
              <div>
                <div style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, maxWidth: 560 }}>{body}</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--fg3)', letterSpacing: '0.06em', textTransform: 'uppercase', paddingTop: 10 }}>{duur}</div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider />
      <div style={{ padding: '48px 48px', maxWidth: 760 }}>
        <Eyebrow>Wat ik niet doe</Eyebrow>
        <ul style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.85, margin: 0, paddingLeft: 20 }}>
          <li>Losse inspiratiesessies zonder vervolg.</li>
          <li>Generieke trainingen zonder eigen casuïstiek.</li>
          <li>Overname van lopende casussen of dossiers.</li>
        </ul>
      </div>
    </div>
  );
}

Object.assign(window, { Werkwijze });
