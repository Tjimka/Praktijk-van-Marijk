function Topbar({ route, setRoute }) {
  const items = [
    ['home', 'Home'],
    ['over', 'Over Marijke'],
    ['professionals', 'Voor professionals'],
    ['werkwijze', 'Werkwijze'],
    ['ervaringen', 'Ervaringen'],
    ['contact', 'Contact'],
  ];
  return (
    <div style={{
      background: 'var(--bg)',
      borderBottom: '0.5px solid var(--line)',
      padding: '0 48px',
      height: 58,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <a onClick={() => setRoute('home')} style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 16,
        fontWeight: 500,
        color: 'var(--fg1)',
        letterSpacing: '0.02em',
        cursor: 'pointer',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}>Praktijk van Marijk
        <span style={{
          fontWeight: 400,
          color: 'var(--accent)',
          fontSize: 13,
          marginLeft: 8,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>jeugdprofessionals</span>
      </a>
      <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map(([key, label]) => (
          <li key={key}>
            <a onClick={() => setRoute(key)} style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              color: route === key ? 'var(--accent)' : 'var(--fg2)',
              textDecoration: 'none',
              borderBottom: route === key ? '1.5px solid var(--accent)' : '1.5px solid transparent',
              paddingBottom: 2,
              letterSpacing: '0.02em',
              cursor: 'pointer',
            }}>{label}</a>
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
        <div style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 500, color: 'var(--fg1)', marginBottom: 8 }}>Praktijk van Marijk</div>
        <div>Training en advies voor jeugdprofessionals.</div>
        <div style={{ color: 'var(--fg3)', fontSize: 12, marginTop: 16 }}>KvK 12345678 · SKJ-registratie 110001234</div>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500, marginBottom: 8 }}>Site</div>
        <a onClick={() => setRoute('werkwijze')} style={{ display: 'block', color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer' }}>Werkwijze</a>
        <a onClick={() => setRoute('professionals')} style={{ display: 'block', color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer' }}>Voor professionals</a>
        <a onClick={() => setRoute('ervaringen')} style={{ display: 'block', color: 'var(--fg2)', textDecoration: 'none', cursor: 'pointer' }}>Ervaringen</a>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500, marginBottom: 8 }}>Contact</div>
        <div>marijke@praktijkvanmarijk.nl</div>
        <div>06 — 12 34 56 78</div>
        <a onClick={() => setRoute('contact')} style={{ color: 'var(--accent)', cursor: 'pointer', textDecoration: 'none' }}>Plan een kennismaking →</a>
      </div>
    </div>
  );
}

Object.assign(window, { Topbar, Footer });
