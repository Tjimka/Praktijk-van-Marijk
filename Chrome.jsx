function Topbar({ route, setRoute }) {
  const items = [
    ['home', 'Home', 'Praktijk van Marijk — specialist intiem terreur voor jeugdprofessionals'],
    ['over', 'Over Marijke', 'Over Marijke Koomen, SKJ-geregistreerd jeugdprofessional'],
    ['professionals', 'Training jeugdprofessionals', 'Training en coaching voor jeugdprofessionals'],
    ['werkwijze', 'Werkwijze en aanpak', 'Werkwijze en aanpak van Praktijk van Marijk'],
    ['ervaringen', 'Ervaringen jeugdzorg', 'Ervaringen uit jeugdzorg en jeugdbescherming'],
    ['contact', 'Contact', 'Neem contact op met Marijke Koomen'],
  ];
  return (
    <div style={{
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
      }}>
        <img
          src={(window.__resources && window.__resources.logoPraktijk) || "assets/logo-praktijk-van-marijk.png"}
          alt="Praktijk van Marijk"
          style={{ height: 64, width: 'auto', display: 'block' }}
        />
        <span style={{
          display: 'inline-block',
          width: 1,
          height: 28,
          background: 'var(--line)',
        }}></span>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 500,
          color: 'var(--accent)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}>voor jeugd&shy;professionals</span>
      </a>
      <ul style={{ display: 'flex', gap: 22, listStyle: 'none', margin: 0, padding: 0 }}>
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
    </div>
  );
}

function Footer({ setRoute }) {
  return (
    <div style={{
      borderTop: '0.5px solid var(--line)',
      padding: '40px 48px',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr',
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
        <div><a href="mailto:marijke@praktijkvanmarijk.nl" style={{ color: 'var(--fg2)', textDecoration: 'none' }}>marijke@praktijkvanmarijk.nl</a></div>
        <div style={{ fontVariantNumeric: 'tabular-nums' }}><a href="tel:+31627376003" style={{ color: 'var(--fg2)', textDecoration: 'none' }}>06 - 27 37 60 03</a></div>
        <a href="https://calendly.com/praktijkvanmarijk/25min" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 8, color: 'var(--accent)', cursor: 'pointer', textDecoration: 'none' }}>Plan een kennismaking →</a>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <a href="https://www.facebook.com/profile.php?id=61562826452913" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', border: '0.5px solid var(--line-strong)', color: 'var(--fg2)', textDecoration: 'none', transition: 'color 200ms, border-color 200ms, background 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg2)'; e.currentTarget.style.borderColor = 'var(--line-strong)'; }}>
            <SocialIcon name="facebook" size={15} strokeWidth={1.5} />
          </a>
          <a href="https://www.instagram.com/praktijkvanmarijk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', border: '0.5px solid var(--line-strong)', color: 'var(--fg2)', textDecoration: 'none', transition: 'color 200ms, border-color 200ms, background 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg2)'; e.currentTarget.style.borderColor = 'var(--line-strong)'; }}>
            <SocialIcon name="instagram" size={15} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/marijke-koomen-365096b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', border: '0.5px solid var(--line-strong)', color: 'var(--fg2)', textDecoration: 'none', transition: 'color 200ms, border-color 200ms, background 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg2)'; e.currentTarget.style.borderColor = 'var(--line-strong)'; }}>
            <SocialIcon name="linkedin" size={15} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Topbar, Footer });
