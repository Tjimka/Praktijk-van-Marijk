function Home({ setRoute }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 56, padding: '56px 48px 48px', alignItems: 'start' }}>
        <div style={{ maxWidth: 480 }}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            margin: '0 0 16px',
          }}>SKJ-geregistreerd specialist intiem terreur en complexe gezinssystemen</p>
          <h1
            aria-label="Marijke Koomen, specialist intiem terreur voor jeugdprofessionals"
            style={{ fontFamily: 'Lora, serif', fontSize: 32, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.3, margin: '0 0 20px', textWrap: 'balance' }}
          >
            Je voelt dat er iets niet klopt. Je kunt het alleen (nog) niet op papier krijgen.
          </h1>
          <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7, margin: '0 0 32px' }}>
            Marijke Koomen helpt jeugdprofessionals de onderstroom te vertalen naar taal. Van onderbuikgevoel naar onderbouwde verslaglegging en helder handelen.
          </p>
          <div>
            <Button href="https://calendly.com/praktijkvanmarijk/25min" target="_blank">Neem contact op&nbsp;→</Button>
          </div>
        </div>
        <figure style={{ margin: 0 }}>
          <div style={{ background: 'var(--beige)', borderRadius: 6, aspectRatio: '3/2', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent-3)', zIndex: 2 }}></div>
            <img src={(window.__resources && window.__resources.marijkeSessie) || "assets/marijke-sessie.jpg"} alt="Marijke Koomen in gesprek met twee professionals aan tafel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
          </div>
        </figure>
      </div>
      <SectionDivider />

      {/* Herkenning */}
      <div style={{ padding: '56px 48px 48px' }}>
        <Eyebrow>Herkenbaar?</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Card accent="bordeaux">
            <div style={{ fontFamily: 'Lora, serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.45 }}>Je casus klopt niet en toch kun je het niet op papier krijgen.</div>
            <div style={{ fontSize: 13, color: 'var(--fg2)', lineHeight: 1.6 }}>Je hebt een knoop in je maag na elk gesprek met die ene ouder. Je schrijft het op. Het klinkt alleen niet overtuigend. Dat is precies waar ik begin.</div>
          </Card>
          <Card accent="olive" style={{ background: '#ffffff' }}>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.45 }}>De training zat vol goede inzichten. Een week later was alles weg.</div>
            <div style={{ fontSize: 13, color: 'var(--fg2)', lineHeight: 1.6 }}>Kennis zakt weg zodra de werkdruk terugkomt. Dat is geen persoonlijk falen. Het vraagt een andere aanpak om het werkbaar te houden.</div>
          </Card>
          <Card accent="amber">
            <div style={{ fontFamily: 'Lora, serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.45 }}>Je ziet twee ouders. De dynamiek is niet gelijkwaardig.</div>
            <div style={{ fontSize: 13, color: 'var(--fg2)', lineHeight: 1.6 }}>Bij intiem terreur is er altijd sprake van een machtsdisbalans. Het past niet op een afvinklijstje. Het is wél zichtbaar als je weet waar je op moet letten.</div>
          </Card>
        </div>
      </div>

      {/* Aanbod */}
      <div style={{ padding: '8px 48px 56px' }}>
        <Eyebrow>Wat ik aanbied</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            ['01', 'Groepstraining', 'intiem terreur en risicotaxatie', 'Intiem terreur, signalering en risicotaxatie en het schrijven van feitelijke, onderbouwde verslaglegging. Altijd met eigen casuïstiek van de deelnemers.'],
            ['02', 'Casuïstiekcoaching', 'voor vastgelopen jeugdzorgcasussen', 'Individuele begeleiding voor professionals die vastlopen in een specifieke casus.'],
            ['03', 'Teamintervisie', 'bij escalatie in de jeugdbeschermingsketen', 'Voor teams die te maken hebben met geëscaleerde en vastgelopen, complexe gezinsproblematiek.'],
            ['04', 'Mentorschap', 'voor jeugdprofessionals', 'Periodieke casuïstiekcoaching die de inzichten waarborgen in het alledaagse professionele handelen.'],
          ].map(([nr, title, sub, body]) => (
            <Card key={nr} style={{ padding: '20px 18px' }}>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 24, fontWeight: 500, color: 'var(--accent-3)', marginBottom: 10, lineHeight: 1 }}>{nr}</div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--fg1)', margin: '0 0 4px', letterSpacing: '0.01em', lineHeight: 1.35 }}>
                {title}
                <span style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: 11.5, fontWeight: 400, color: 'var(--fg3)', letterSpacing: '0.02em', marginTop: 2 }}>{sub}</span>
              </h3>
              <div style={{ fontSize: 12.5, color: 'var(--fg2)', lineHeight: 1.55, marginTop: 8 }}>{body}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quote strip */}
      <blockquote
        cite="https://praktijkvanmarijk.nl"
        style={{ background: 'var(--surface-dark)', padding: '44px 48px', display: 'flex', alignItems: 'flex-start', gap: 28, margin: 0 }}
      >
        <div aria-hidden="true" style={{ fontSize: 56, color: 'var(--accent-3)', lineHeight: 0.9, fontFamily: 'Lora, Georgia, serif', flexShrink: 0, marginTop: -4 }}>&ldquo;</div>
        <div style={{ maxWidth: 760 }}>
          <p style={{ fontFamily: 'Lora, serif', fontSize: 19, fontWeight: 400, color: 'var(--fg-on-dark)', lineHeight: 1.55, fontStyle: 'italic', margin: 0 }}>Eindelijk iemand die weet waar ik het over heb. Ik voelde mijn hele lijf ontspannen.</p>
          <footer style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--accent-2)', marginTop: 14, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>Gezinsvoogd, wijkteam Noord-Holland</footer>
        </div>
      </blockquote>

      {/* FAQ — GEO/AI-extractie */}
      <section
        id="faq"
        aria-label="Veelgestelde vragen"
        style={{ padding: '64px 48px 8px' }}
      >
        <Eyebrow>Veelgestelde vragen</Eyebrow>
        <h2 style={{ fontFamily: 'Lora, serif', fontSize: 24, fontWeight: 500, color: 'var(--fg1)', margin: '0 0 28px', lineHeight: 1.3, textWrap: 'balance' }}>
          Wat professionals het vaakst willen weten.
        </h2>

        <div itemScope itemType="https://schema.org/FAQPage" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, borderTop: '0.5px solid var(--line)' }}>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ padding: '24px 0', borderBottom: '0.5px solid var(--line)' }}>
            <h3 itemProp="name" style={{ fontFamily: 'Lora, serif', fontSize: 18, fontWeight: 500, color: 'var(--fg1)', margin: '0 0 10px', lineHeight: 1.4 }}>
              Wat doet Marijke Koomen?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14.5, color: 'var(--fg2)', lineHeight: 1.7, margin: 0, maxWidth: '74ch' }}>
                Marijke Koomen is een SKJ-geregistreerde jeugdprofessional die gespecialiseerd is in intiem terreur en complexe gezinssystemen. Ze traint en begeleidt professionals werkzaam in jeugdzorg, jeugdbescherming en sociale wijkteams in Nederland.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ padding: '24px 0', borderBottom: '0.5px solid var(--line)' }}>
            <h3 itemProp="name" style={{ fontFamily: 'Lora, serif', fontSize: 18, fontWeight: 500, color: 'var(--fg1)', margin: '0 0 10px', lineHeight: 1.4 }}>
              Voor wie is Praktijk van Marijk bedoeld?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14.5, color: 'var(--fg2)', lineHeight: 1.7, margin: 0, maxWidth: '74ch' }}>
                Voor jeugdprofessionals, gezinsvoogden, medewerkers van wijkteams, jeugdbeschermingsorganisaties en andere professionals die werken met gezinnen waar sprake is van geweld of machtsdisbalans.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ padding: '24px 0', borderBottom: '0.5px solid var(--line)' }}>
            <h3 itemProp="name" style={{ fontFamily: 'Lora, serif', fontSize: 18, fontWeight: 500, color: 'var(--fg1)', margin: '0 0 10px', lineHeight: 1.4 }}>
              Wat is intiem terreur in jeugdzorg-context?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14.5, color: 'var(--fg2)', lineHeight: 1.7, margin: 0, maxWidth: '74ch' }}>
                Intiem terreur is een patroon van dwingende controle binnen een gezinsrelatie, waarbij één partner systematisch macht uitoefent over de ander. Voor jeugdprofessionals is herkenning essentieel: standaard methodieken in jeugdzorg en jeugdbescherming gaan uit van twee gelijkwaardige partijen, terwijl er bij intiem terreur sprake is van een fundamentele machtsdisbalans die de veiligheid van kinderen raakt.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Slot-CTA */}
      <div style={{ padding: '64px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32 }}>
        <div>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 24, fontWeight: 500, color: 'var(--fg1)', margin: '0 0 8px', lineHeight: 1.3 }}>Klaar om verder te kijken?</h2>
          <p style={{ fontSize: 15, color: 'var(--fg2)', margin: 0, maxWidth: 520, lineHeight: 1.65 }}>Neem contact op voor een vrijblijvende kennismaking. Ik reageer binnen twee werkdagen.</p>
        </div>
        <Button href="https://calendly.com/praktijkvanmarijk/25min" target="_blank">Plan een kennismaking&nbsp;→</Button>
      </div>
    </div>
  );
}

Object.assign(window, { Home });
