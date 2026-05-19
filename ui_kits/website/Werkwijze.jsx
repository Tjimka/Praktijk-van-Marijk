function Werkwijze() {
  const fasen = [
    {
      nr: '01',
      title: 'Analyse',
      duur: 'Intake (1 uur)',
      body: 'We brengen samen in kaart welke casussen of teamdynamieken vastlopen. Wat is herkenbaar, wat niet? Welke taal ontbreekt?',
    },
    {
      nr: '02',
      title: 'Training',
      duur: '3-6 dagdelen',
      body: 'In een serie bijeenkomsten werken we aan herkenning van intiem terreur, risicotaxatie en aan het schrijven van feitelijke verslaglegging. Altijd met eigen casuïstiek van de deelnemers.',
    },
    {
      nr: '03',
      title: 'Borging',
      duur: '3-6 maanden',
      body: 'Mentorschap en intervisie om inzichten in dagelijks handelen te laten landen. Geen nazorg als formaliteit. Wél met een werkende feedbackloop.',
    },
  ];

  return (
    <div>
      {/* ============ HERO ============ */}
      <div className="over-hero">
        <div className="over-hero__text">
          <Eyebrow>Werkwijze</Eyebrow>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 24px', textWrap: 'balance' }}>
            Drie fasen. Geen afvinklijstje.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.7, margin: '0 0 28px', maxWidth: '58ch' }}>
            Ieder traject begint met een analyse, heeft een trainingscomponent en sluit af met borging. De verhouding verschilt per organisatie. De volgorde staat vast.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: '0 0 16px', maxWidth: '60ch' }}>
            Veel trainingen geven kennis mee. Die kennis zakt weg zodra jij in je werkdruk terugkomt. Niet omdat professionals het niet willen vasthouden. Wel omdat kennis zonder terugkerende oefening en terugkoppeling niet beklijft onder werkdruk. Weggegooid geld.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: '0 0 16px', maxWidth: '60ch' }}>
            Daarom werkt elk traject in drie fasen. De analyse brengt in kaart wat er speelt in de specifieke context van het team én in de casuïstiek. De training werkt met eigen casuïstiek, niet met bedachte voorbeelden. De borging zorgt dat inzichten landen in dagelijks handelen, niet alleen in de week na de training.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: 0, maxWidth: '60ch' }}>
            Trajecten zijn op maat. De fasering staat vast, de invulling niet.
          </p>
        </div>

        {/* Foto rechts */}
        <div className="over-hero__portret">
          <div style={{ background: 'var(--beige)', borderRadius: 6, aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent-3)', zIndex: 2 }} />
            <img
              src={(window.__resources && window.__resources.marijkeWerkwijze) || "assets/marijke-werkwijze.jpg"}
              alt="Marijke in gesprek met een professional aan de werktafel, met flip-over over intiem terreur"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center', display: 'block' }}
            />
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg3)', marginTop: 10, lineHeight: 1.55 }}>
            Werksessie, analyse, training en borging lopen door elkaar.
          </div>
        </div>
      </div>

      {/* ============ DRIE FASEN ============ */}
      <div className="pvm-section" style={{ padding: '64px 48px 64px', background: 'var(--bg-sunken)' }}>
        <div>
          {fasen.map((f, i) => (
            <div
              key={f.nr}
              className="pvm-phase-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '88px 1fr 180px',
                gap: 40,
                padding: '36px 0',
                borderBottom: i < 2 ? '0.5px solid var(--line-strong)' : 'none',
                alignItems: 'start',
              }}
            >
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 40,
                fontWeight: 500,
                color: 'var(--accent-3)',
                lineHeight: 1,
                letterSpacing: '-0.01em',
                fontVariantNumeric: 'tabular-nums',
              }}>{f.nr}</div>
              <div>
                <div style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10, lineHeight: 1.35 }}>
                  {f.title}
                </div>
                <div style={{ fontSize: 15.5, color: 'var(--fg2)', lineHeight: 1.75, maxWidth: 580 }}>
                  {f.body}
                </div>
              </div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                color: 'var(--fg3)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 500,
                paddingTop: 14,
                textAlign: 'right',
                lineHeight: 1.5,
              }}>{f.duur}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ WAT IK NIET DOE ============ */}
      <div className="pvm-section pvm-split" style={{ padding: '64px 48px 80px', display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 64, alignItems: 'start' }}>
        <div>
          <Eyebrow>Wat ik niet doe</Eyebrow>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: 0, maxWidth: 320, textWrap: 'balance' }}>
            De grenzen van mijn rol.
          </h2>
        </div>
        <div style={{ maxWidth: 640 }}>
          <p style={{ fontSize: 16, color: 'var(--fg2)', lineHeight: 1.8, margin: 0 }}>
            Ik neem geen casussen over en ik doe geen crisiswerk. Ik werk niet met ouders, kinderen of cliënten. Mijn rol is de professional sterker maken in zijn eigen werk.
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Werkwijze });
