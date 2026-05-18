function Professionals() {
  const rollen = [
    ['Wijkteams', 'Generalisten die signalen willen duiden zonder te vroeg te escaleren of te laat te handelen.', 'amber'],
    ['Jeugdbescherming', 'Gezinsvoogden en raadsonderzoekers die in dossiers en zittingen onderbouwd willen rapporteren.', 'bordeaux'],
    ['Gedragswetenschappers', 'Die collega\'s op casusniveau willen meenemen in herkenning en taxatie van intiem terreur.', 'olive'],
    ['Teamleiders en managers', 'Die borging en methodische rust willen in teams onder druk.', 'amber'],
  ];
  return (
    <div>
      <div style={{ padding: '64px 48px 32px', maxWidth: 760 }}>
        <Eyebrow>Voor professionals</Eyebrow>
        <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 20px' }}>
          Voor wie deze praktijk is.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.75, margin: 0 }}>
          Ik werk met professionals die dagelijks beslissingen nemen die het leven van kinderen raken. Dat vraagt om preciezer kijken en preciezer schrijven dan wat een standaardtraining biedt.
        </p>
      </div>
      <SectionDivider />
      <div style={{ padding: '48px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {rollen.map(([title, body, accent]) => (
            <Card key={title} accent={accent}>
              <div style={{ fontFamily: 'Lora, serif', fontSize: 17, fontWeight: 500, color: 'var(--fg1)', marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: 14, color: 'var(--fg2)', lineHeight: 1.7 }}>{body}</div>
            </Card>
          ))}
        </div>
      </div>
      <SectionDivider />
      <div style={{ padding: '48px 48px', maxWidth: 760 }}>
        <Eyebrow>Wanneer past dit niet</Eyebrow>
        <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: 0 }}>
          Deze praktijk is niet gericht op cliënten, slachtoffers of daders. Voor individuele hulp verwijs ik graag door. Ook neem ik geen casussen over — ik versterk het handelen van de professional, ik vervang het niet.
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { Professionals });
