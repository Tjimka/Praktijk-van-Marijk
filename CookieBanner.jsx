// Cookie consent banner — overlay met voorkeuren, localStorage-persistentie.
// Gebruikt de design tokens uit colors_and_type.css en het Icon-primitive.

const COOKIE_KEY = "cookie_consent";
const EXPIRY_DAYS = 365;

function hasConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return false;
    const { expires } = JSON.parse(raw);
    return new Date(expires) > new Date();
  } catch {
    return false;
  }
}

function saveConsent(prefs) {
  const expires = new Date();
  expires.setDate(expires.getDate() + EXPIRY_DAYS);
  localStorage.setItem(COOKIE_KEY, JSON.stringify({ prefs, expires }));
}

function CookieBanner({ onNavigate }) {
  const [visible, setVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(false);
  const [functional, setFunctional] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);

  React.useEffect(() => {
    if (!hasConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  const done = (prefs) => {
    saveConsent(prefs);
    setVisible(false);
  };

  const goTo = (route, e) => {
    if (typeof onNavigate === 'function') {
      e.preventDefault();
      onNavigate(route);
    }
  };

  return (
    <div style={cookieStyles.overlay} role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div style={cookieStyles.card}>
        <button
          onClick={() => done({ essential: true })}
          style={cookieStyles.close}
          aria-label="Sluiten"
        >
          <Icon name="x" size={16} />
        </button>

        <div style={cookieStyles.titleRow}>
          <Icon name="cookie" size={18} color="var(--accent)" />
          <h2 id="cookie-title" style={cookieStyles.title}>Cookievoorkeuren</h2>
        </div>

        <p style={cookieStyles.text}>
          We gebruiken cookies om de website goed te laten werken. Functionele cookies zijn
          noodzakelijk.{" "}
          <a href="#privacy" onClick={(e) => goTo('privacy', e)} style={cookieStyles.link}>Privacybeleid</a>
          {" · "}
          <a href="#privacy" onClick={(e) => goTo('privacy', e)} style={cookieStyles.link}>Cookiebeleid</a>
        </p>

        <button
          onClick={() => setOpen(!open)}
          style={cookieStyles.toggle}
          aria-expanded={open}
        >
          <Icon name="settings-2" size={14} />
          <span>{open ? "Voorkeuren verbergen" : "Voorkeuren instellen"}</span>
          <Icon name={open ? "chevron-up" : "chevron-down"} size={14} />
        </button>

        {open && (
          <div style={cookieStyles.panel}>
            <CookieRow label="Functioneel" desc="Noodzakelijk voor de website" checked disabled />
            <CookieRow label="Analytisch" desc="Bezoekersstatistieken" checked={analytics} onChange={setAnalytics} />
            <CookieRow label="Functionele voorkeuren" desc="Onthoud jouw instellingen" checked={functional} onChange={setFunctional} />
            <CookieRow label="Marketing" desc="Gepersonaliseerde advertenties" checked={marketing} onChange={setMarketing} last />
            <button
              onClick={() => done({ essential: true, analytics, functional, marketing })}
              style={cookieStyles.save}
            >
              Voorkeuren opslaan
            </button>
          </div>
        )}

        <div style={cookieStyles.buttons}>
          <button onClick={() => done({ essential: true })} style={cookieStyles.btnSecondary}>
            Alleen noodzakelijk
          </button>
          <button
            onClick={() => done({ essential: true, analytics: true, functional: true, marketing: true })}
            style={cookieStyles.btnPrimary}
          >
            Alles accepteren
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieRow({ label, desc, checked, onChange, disabled, last }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: "10px 0",
      borderBottom: last ? "none" : "0.5px solid var(--line)",
    }}>
      <div>
        <p style={{
          margin: 0,
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 500,
          fontSize: 14,
          color: 'var(--fg1)',
          lineHeight: 1.3,
        }}>{label}</p>
        <p style={{
          margin: '2px 0 0',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12,
          color: 'var(--fg3)',
          lineHeight: 1.4,
        }}>{desc}</p>
      </div>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          width: 18,
          height: 18,
          cursor: disabled ? "not-allowed" : "pointer",
          accentColor: 'var(--accent)',
          flexShrink: 0,
        }}
      />
    </div>
  );
}

const cookieStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(46, 31, 14, 0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: 16,
    fontFamily: 'DM Sans, sans-serif',
  },
  card: {
    background: "var(--surface)",
    border: "0.5px solid var(--line)",
    borderTop: "3px solid var(--accent)",
    borderRadius: 6,
    padding: 24,
    maxWidth: 440,
    width: "100%",
    position: "relative",
    boxShadow: "0 4px 24px rgba(46, 31, 14, 0.12)",
  },
  close: {
    position: "absolute",
    top: 12,
    right: 12,
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--fg3)",
    padding: 6,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Lora, Georgia, serif',
    fontSize: 20,
    fontWeight: 500,
    color: 'var(--fg1)',
    margin: 0,
    lineHeight: 1.3,
  },
  text: {
    fontSize: 14,
    color: 'var(--fg2)',
    lineHeight: 1.6,
    margin: '0 0 14px',
  },
  link: {
    color: 'var(--accent)',
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
  toggle: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: 'var(--accent)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    padding: 0,
    marginBottom: 14,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    letterSpacing: '0.02em',
  },
  panel: {
    background: 'var(--bg-sunken)',
    border: '0.5px solid var(--line)',
    borderRadius: 6,
    padding: '6px 14px 14px',
    marginBottom: 16,
  },
  save: {
    width: "100%",
    marginTop: 14,
    padding: 10,
    background: 'var(--accent)',
    color: 'var(--fg-on-accent)',
    border: 'none',
    borderRadius: 4,
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.03em',
    cursor: "pointer",
  },
  buttons: {
    display: "flex",
    gap: 10,
  },
  btnSecondary: {
    flex: 1,
    padding: 10,
    background: 'transparent',
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    borderRadius: 4,
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.03em',
    cursor: "pointer",
  },
  btnPrimary: {
    flex: 1,
    padding: 10,
    background: 'var(--accent)',
    color: 'var(--fg-on-accent)',
    border: '1px solid var(--accent)',
    borderRadius: 4,
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.03em',
    cursor: "pointer",
  },
};

Object.assign(window, { CookieBanner });
