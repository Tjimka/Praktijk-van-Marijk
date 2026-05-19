function LogoSlider({ items }) {
  const trackRef = React.useRef(null);
  const [page, setPage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(1);
  const [perView, setPerView] = React.useState(5);
  const dragState = React.useRef(null);

  // Responsive perView
  React.useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 560) setPerView(1);
      else if (w < 760) setPerView(2);
      else if (w < 980) setPerView(3);
      else if (w < 1200) setPerView(4);
      else setPerView(5);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  // Recalculate pageCount based on visible vs total
  React.useEffect(() => {
    setPageCount(Math.max(1, items.length - perView + 1));
    setPage((p) => Math.min(p, Math.max(0, items.length - perView)));
  }, [items.length, perView]);

  const scrollToPage = (idx) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0];
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    track.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0];
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setPage(Math.min(Math.max(0, idx), pageCount - 1));
  };

  const go = (delta) => {
    const next = Math.min(Math.max(0, page + delta), pageCount - 1);
    setPage(next);
    scrollToPage(next);
  };

  // Drag to scroll
  const onPointerDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      startX: e.clientX,
      startScroll: track.scrollLeft,
      moved: false,
      pointerId: e.pointerId,
    };
    track.setPointerCapture(e.pointerId);
    track.style.scrollBehavior = 'auto';
    track.style.cursor = 'grabbing';
  };
  const onPointerMove = (e) => {
    const track = trackRef.current;
    const st = dragState.current;
    if (!track || !st) return;
    const dx = e.clientX - st.startX;
    if (Math.abs(dx) > 3) st.moved = true;
    track.scrollLeft = st.startScroll - dx;
  };
  const endDrag = (e) => {
    const track = trackRef.current;
    const st = dragState.current;
    if (!track || !st) return;
    try { track.releasePointerCapture(st.pointerId); } catch (_) {}
    track.style.scrollBehavior = '';
    track.style.cursor = '';
    // Snap to nearest page
    const card = track.children[0];
    if (card) {
      const cardWidth = card.getBoundingClientRect().width;
      const idx = Math.round(track.scrollLeft / cardWidth);
      const clamped = Math.min(Math.max(0, idx), pageCount - 1);
      setPage(clamped);
      track.scrollTo({ left: cardWidth * clamped, behavior: 'smooth' });
    }
    dragState.current = null;
  };

  const atStart = page <= 0;
  const atEnd = page >= pageCount - 1;

  const ArrowBtn = ({ direction, disabled, onClick, label }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '0.5px solid var(--line)',
        background: disabled ? 'transparent' : 'var(--surface)',
        color: disabled ? 'var(--fg3)' : 'var(--fg1)',
        cursor: disabled ? 'default' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 0.15s ease, color 0.15s ease',
        fontFamily: 'DM Sans, sans-serif',
        padding: 0,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = 'var(--accent-2-soft)'; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = 'var(--surface)'; }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'prev'
          ? <polyline points="15 18 9 12 15 6"></polyline>
          : <polyline points="9 18 15 12 9 6"></polyline>}
      </svg>
    </button>
  );

  return (
    <div style={{ position: 'relative' }}>
      {/* Slider track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          borderTop: '0.5px solid var(--line)',
          borderBottom: '0.5px solid var(--line)',
          borderLeft: '0.5px solid var(--line)',
          cursor: 'grab',
          userSelect: 'none',
        }}
        className="logo-slider-track"
      >
        {items.map((org, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 calc(100% / ${perView})`,
              borderRight: '0.5px solid var(--line)',
              padding: '32px 20px 20px',
              minHeight: 168,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 18,
              background: 'var(--surface)',
              scrollSnapAlign: 'start',
              boxSizing: 'border-box',
            }}
            title={org.name}
          >
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              minHeight: 80,
              pointerEvents: 'none',
            }}>
              <img
                src={org.logo}
                alt={`Logo ${org.name}`}
                draggable={false}
                style={{
                  maxHeight: org.maxHeight || 56,
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--fg1)',
                lineHeight: 1.4,
                letterSpacing: '0.01em',
              }}>{org.name}</div>
              {org.sub && (
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  color: 'var(--fg3)',
                  lineHeight: 1.45,
                  marginTop: 3,
                }}>{org.sub}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        marginTop: 20,
        flexWrap: 'wrap',
      }}>
        {/* Page dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setPage(i); scrollToPage(i); }}
              aria-label={`Ga naar pagina ${i + 1}`}
              style={{
                width: i === page ? 22 : 8,
                height: 8,
                border: 'none',
                padding: 0,
                borderRadius: 4,
                background: i === page ? 'var(--accent-2)' : 'var(--line)',
                cursor: 'pointer',
                transition: 'width 0.2s ease, background 0.2s ease',
              }}
            />
          ))}
        </div>

        {/* Counter + arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg3)',
            fontWeight: 500,
            fontVariantNumeric: 'tabular-nums',
          }}>
            {String(Math.min(page + perView, items.length)).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <ArrowBtn direction="prev" disabled={atStart} onClick={() => go(-1)} label="Vorige" />
            <ArrowBtn direction="next" disabled={atEnd} onClick={() => go(1)} label="Volgende" />
          </div>
        </div>
      </div>

      <style>{`
        .logo-slider-track::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

function Over() {
  const tijdlijn = [
    ['2006 — 2009', 'Begeleider bij Lijn5, jeugdzorg.', null],
    ['2009 — 2017', 'Jeugd- en Gezinsbeschermer, De Jeugd- en Gezinsbeschermers Noord-Holland.', 'Regie over complexe casuïstiek. Verantwoording afleggen aan kinderrechter en Raad voor de Kinderbescherming.'],
    ['2017', 'Jeugd- en Gezinscoach, Gemeente Alkmaar.', null],
    ['2018', 'Jeugddeskundige, Gemeente Heerhugowaard.', null],
    ['2018 — 2020', 'Medewerker Team Inzet, Gemeente Drechterland.', null],
    ['2020 — 2021', 'Medewerker Veilig Thuis Noord-Holland Noord.', 'Veiligheidsanalyses, risicotaxaties, zwaarwegende adviezen.'],
    ['2021 — 2022', 'Jeugdhulpverlener Wijkteam Medemblik.', null],
    ['2023 — 2024', 'Procesbegeleider Kinderopvangtoeslagenaffaire.', 'Traumasensitief werken, hersteltrajecten.'],
    ['2024 — heden', 'Praktijk van Marijk, eigen praktijk.', 'Training en begeleiding van jeugdprofessionals op het thema intiem terreur.'],
  ];

  const samenwerkingenMetLogo = [
    {
      name: 'De Jeugd- en Gezinsbeschermers',
      logo: (window.__resources && window.__resources.logoJgb) || 'assets/logo-jgb-alkmaar.svg',
      maxHeight: 56,
    },
    {
      name: 'Veilig Thuis Noord-Holland Noord',
      logo: (window.__resources && window.__resources.logoVt) || 'assets/logo-vt-nhn.svg',
      maxHeight: 44,
    },
    {
      name: 'Sociaal Wijkteam Dijk en Waard',
      logo: (window.__resources && window.__resources.logoSwtDijk) || 'assets/logo-swt-dijk-en-waard.svg',
      maxHeight: 72,
    },
    {
      name: 'Sociaal Wijkteam Medemblik',
      logo: (window.__resources && window.__resources.logoSwtMedemblik) || 'assets/logo-swt-medemblik.svg',
      maxHeight: 52,
    },
    {
      name: 'SED-organisatie',
      sub: 'Stede Broec · Enkhuizen · Drechterland',
      logo: (window.__resources && window.__resources.logoSed) || 'assets/logo-sed.png',
      maxHeight: 44,
    },
    {
      name: 'VNG',
      sub: 'Vereniging van Nederlandse Gemeenten',
      logo: (window.__resources && window.__resources.logoVng) || 'assets/logo-vng.png',
      maxHeight: 56,
    },
  ];

  const samenwerkingenOverig = [
    'Gemeente Alkmaar',
  ];

  return (
    <div>
      {/* ============ HERO ============ */}
      <div className="over-hero">
        <div className="over-hero__text">
          <Eyebrow>Over Marijke</Eyebrow>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 24px', textWrap: 'balance' }}>
            Twintig jaar lang stond ik zelf in de praktijk. Nu zet ik die kennis in voor jou.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.7, margin: '0 0 28px' }}>
            Hoe herken je intiem terreur en een machtsdisbalans in een gezin, hoe vertaal je dat naar feitelijke, onderbouwde taal en veiligheidsinterventies die standhouden in bijvoorbeeld een zitting en Raadkamer?
          </p>
          <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: '0 0 16px' }}>
            Mijn achtergrond is in de jeugdbescherming. Ik ken het werk van binnenuit: de caseload, het taalgebruik, de druk van een multidisciplinair overleg en hoe een onderbuikgevoel in een dossier verdampt als je het niet feitelijk kunt onderbouwen.
          </p>
          <p style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.75, margin: 0 }}>
            Ik ben SKJ-geregistreerd en werk voor wijkteams, GI's en gemeentelijke jeugdzorginstellingen.
          </p>

          {/* SKJ-strip */}
          <div style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: 14, marginTop: 28, padding: '10px 16px 10px 14px', border: '0.5px solid var(--line)', borderLeft: '3px solid var(--accent-2)', background: 'var(--accent-2-soft)', borderRadius: 4 }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500 }}>SKJ-registratie</div>
            <div style={{ width: '0.5px', height: 16, background: 'var(--line)' }} />
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--fg1)', letterSpacing: '0.02em' }}>110005309</div>
          </div>
        </div>

        {/* Portret */}
        <div className="over-hero__portret">
          <div style={{ background: 'var(--beige)', borderRadius: 6, aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent-2)', zIndex: 2 }} />
            <img
              src={(window.__resources && window.__resources.marijkePortret) || "assets/marijke-portret.jpg"}
              alt="Portret van Marijke Koomen"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }}
            />
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--fg3)', marginTop: 10, lineHeight: 1.55 }}>
            Marijke Koomen, trainer, coach en jeugdprofessional. Werkzaam vanuit Noord-Holland.
          </div>
        </div>
      </div>

      {/* ============ KERNZIN, dark quote strip ============ */}
      <div style={{ background: 'var(--surface-dark)', padding: '56px 48px', display: 'flex', alignItems: 'flex-start', gap: 28 }}>
        <div style={{ fontSize: 64, color: 'var(--accent-2)', lineHeight: 0.85, fontFamily: 'Lora, Georgia, serif', flexShrink: 0, marginTop: -6 }}>&ldquo;</div>
        <div style={{ maxWidth: 820 }}>
          <div style={{ fontFamily: 'Lora, serif', fontSize: 24, fontWeight: 500, color: 'var(--fg-on-dark)', lineHeight: 1.45, fontStyle: 'italic', textWrap: 'balance' }}>
            Ik maak zichtbaar wat onder de oppervlakte speelt en vertaal dit naar concrete interventies en heldere veiligheidskaders.
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--accent-2)', marginTop: 18, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>
            Marijke Koomen
          </div>
        </div>
      </div>

      {/* ============ TIJDLIJN ============ */}
      <div style={{ padding: '72px 48px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 64, alignItems: 'start', marginBottom: 36 }}>
          <div>
            <Eyebrow>Achtergrond</Eyebrow>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: 0, maxWidth: 460, textWrap: 'balance' }}>
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
          {[...tijdlijn].reverse().map(([yr, title, note], i) => (
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
                color: 'var(--accent-2)',
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
        <h2 style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.4, margin: '0 0 28px', whiteSpace: 'nowrap' }}>
          Opdrachtgevers en samenwerkingspartners in de jeugdketen.
        </h2>

        {/* Logo-slider, interactief */}
        <LogoSlider items={samenwerkingenMetLogo} />

        {/* Overige samenwerkingen, tekst */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          gap: '6px 14px',
          marginTop: 28,
          paddingTop: 20,
          borderTop: '0.5px solid var(--line)',
        }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg3)',
            fontWeight: 500,
            marginRight: 6,
          }}>Daarnaast</div>
          {samenwerkingenOverig.map((name, i) => (
            <React.Fragment key={i}>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--fg1)',
                lineHeight: 1.5,
              }}>{name}</div>
              {i < samenwerkingenOverig.length - 1 && (
                <div style={{ color: 'var(--fg3)', fontSize: 13, lineHeight: 1.5 }}>·</div>
              )}
            </React.Fragment>
          ))}
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
            HBO Pedagogiek (PsychoSociaal Werk). Post-HBO Gestalt Therapie (NSG Amsterdam). Aangevuld met specialisaties o.a. in juridische kaders, familierecht en dwingende controle (Stichting Het Verdwenen Zelf, 2025).
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Over });
