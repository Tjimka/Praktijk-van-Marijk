function Topbar({ route, setRoute }) {
  const items = [
    ['home', 'Home', 'Praktijk van Marijk — specialist intiem terreur voor jeugdprofessionals'],
    ['over', 'Over Marijke', 'Over Marijke Koomen, SKJ-geregistreerd jeugdprofessional'],
    ['professionals', 'Training jeugdprofessionals', 'Training en coaching voor jeugdprofessionals'],
    ['werkwijze', 'Werkwijze en aanpak', 'Werkwijze en aanpak van Praktijk van Marijk'],
    ['ervaringen', 'Ervaringen jeugdzorg', 'Ervaringen uit jeugdzorg en jeugdbescherming'],
    ['contact', 'Contact', 'Neem contact op met Marijke Koomen'],
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Close drawer on Esc, and lock body scroll when open.
  React.useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [drawerOpen]);

  const go = (key) => { setRoute(key); setDrawerOpen(false); };

  return (
    <div className="pvm-topbar" style={{
      background: 'var(--bg)',
      borderBottom: '0.5px solid var(--line)',
      padding: '0 48px',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <a onClick={() => setRoute('home')} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        cursor: 'pointer',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        minWidth: 0,
      }}>
        <img
          src={(window.__resources && window.__resources.logoPraktijk) || "assets/logo-praktijk-van-marijk.png"}
          alt="Praktijk van Marijk"
          className="pvm-topbar-logo"
          style={{ height: 64, width: 'auto', display: 'block' }}
        />
        <span className="pvm-topbar-divider" style={{
          display: 'inline-block',
          width: 1,
          height: 28,
          background: 'var(--line)',
        }}></span>
        <span className="pvm-topbar-tagline" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 500,
          color: 'var(--accent)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}>voor jeugd&shy;professionals</span>
      </a>

      {/* Desktop nav */}
      <ul className="pvm-nav" style={{ display: 'flex', gap: 22, listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map(([key, label, title]) => (
          <li key={key}>
            <a
              onClick={() => setRoute(key)}
              title={title}
              aria-label={title}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                color: route === key ? 'var(--accent)' : 'var(--fg2)',
                textDecoration: 'none',
                borderBottom: route === key ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                paddingBottom: 2,
                letterSpacing: '0.02em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >{label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="pvm-hamburger"
        type="button"
        aria-label="Menu openen"
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen(true)}
        style={{ display: 'none' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="17" x2="20" y2="17"></line>
        </svg>
      </button>

      {/* Mobile drawer + backdrop */}
      {drawerOpen && (
        <React.Fragment>
          <div className="pvm-mobile-drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
          <nav className="pvm-mobile-drawer" aria-label="Hoofdmenu" role="dialog" aria-modal="true">
            <button
              type="button"
              className="pvm-mobile-drawer__close"
              aria-label="Menu sluiten"
              onClick={() => setDrawerOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18"></line>
                <line x1="18" y1="6" x2="6" y2="18"></line>
              </svg>
            </button>
            <ul className="pvm-mobile-drawer__nav">
              {items.map(([key, label, title]) => (
                <li key={key}>
                  <a
                    onClick={() => go(key)}
                    title={title}
                    aria-label={title}
                    className={route === key ? 'is-active' : ''}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </React.Fragment>
      )}
    </div>
  );
}

function Footer({ setRoute }) {
  return (
    <div className="pvm-footer-root" style={{ borderTop: '0.5px solid var(--line)' }}>
    <div className="pvm-footer" style={{
      padding: '40px 48px 32px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1.2fr 1fr',
      gap: 32,
      fontFamily: 'DM Sans, sans-serif',
      fontSize: 13,
      color: 'var(--fg2)',
      lineHeight: 1.8,
    }}>
      <div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 10 }}>Praktijk van Marijk</div>
        <div style={{ color: 'var(--fg2)', lineHeight: 1.7 }}>SKJ-geregistreerd jeugd- en gezinsprofessional</div>
        <div style={{ color: 'var(--fg3)', fontSize: 12, marginTop: 12, lineHeight: 1.7, fontVariantNumeric: 'tabular-nums', display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
          <span style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>SKJ-registratie</span>
          <span style={{ color: 'var(--fg1)', fontWeight: 600, letterSpacing: '0.02em' }}>110005309</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500, marginBottom: 8 }}>Site</div>
        <a onClick={() => setRoute('werkwijze')} style={{ display: 'block', color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer' }}>Werkwijze en aanpak</a>
        <a onClick={() => setRoute('professionals')} style={{ display: 'block', color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer' }}>Training jeugdprofessionals</a>
        <a onClick={() => setRoute('ervaringen')} style={{ display: 'block', color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer' }}>Ervaringen jeugdzorg</a>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500, marginBottom: 8 }}>Contact</div>
        <div><a href="mailto:marijke@praktijkvanmarijk.nl" style={{ color: 'var(--fg2)', textDecoration: 'none', wordBreak: 'break-word' }}>marijke@praktijkvanmarijk.nl</a></div>
        <div style={{ fontVariantNumeric: 'tabular-nums' }}><a href="tel:+31627376003" style={{ color: 'var(--fg2)', textDecoration: 'none' }}>06 - 27 37 60 03</a></div>
        <a href="https://calendly.com/praktijkvanmarijk/25min" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 8, color: 'var(--accent)', cursor: 'pointer', textDecoration: 'none' }}>Plan een kennismaking →</a>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500, marginBottom: 8 }}>Volg mij</div>
        <div style={{ color: 'var(--fg2)', lineHeight: 1.6, marginBottom: 12 }}>Volg me op LinkedIn voor reflecties uit de praktijk.</div>
        <a href="https://www.linkedin.com/in/marijke-koomen-365096b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--fg2)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; const c = e.currentTarget.firstChild; if (c) c.style.borderColor = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg2)'; const c = e.currentTarget.firstChild; if (c) c.style.borderColor = 'var(--line-strong)'; }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', border: '0.5px solid var(--line-strong)', transition: 'border-color 200ms' }}>
            <SocialIcon name="linkedin" size={15} strokeWidth={1.5} />
          </span>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>

    {/* Fine print / legal row */}
    <div className="pvm-footer-fineprint" style={{
      borderTop: '0.5px solid var(--line)',
      padding: '18px 48px 28px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 16,
      fontFamily: 'DM Sans, sans-serif',
      fontSize: 12,
      color: 'var(--fg3)',
      lineHeight: 1.6,
    }}>
      <div style={{ letterSpacing: '0.01em' }}>
        © {new Date().getFullYear()} Praktijk van Marijk · Marijke Koomen
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 18 }}>
        <a
          onClick={() => setRoute('voorwaarden')}
          style={{ color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer', borderBottom: '0.5px solid transparent', transition: 'color 200ms, border-color 200ms' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderBottomColor = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg2)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
        >Algemene voorwaarden</a>
        <a
          onClick={() => setRoute('privacy')}
          style={{ color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer', borderBottom: '0.5px solid transparent', transition: 'color 200ms, border-color 200ms' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderBottomColor = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg2)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
        >Privacybeleid</a>
        <a
          onClick={() => { setRoute('voorwaarden'); setTimeout(() => window.print(), 350); }}
          style={{ color: 'var(--fg3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'color 200ms', cursor: 'pointer' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg3)'; }}
          aria-label="Download algemene voorwaarden als PDF"
          title="Download als PDF"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          PDF
        </a>
      </div>
    </div>
    </div>
  );
}

Object.assign(window, { Topbar, Footer });
