// Shared primitives, klein en hergebruikbaar

function Eyebrow({ children, color }) {
  return (
    <div style={{
      fontFamily: 'DM Sans, sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: color || 'var(--accent)',
      marginBottom: 16,
    }}>{children}</div>
  );
}

function SectionDivider() {
  return <div style={{ height: '0.5px', background: 'var(--line)', margin: '0 48px' }} />;
}

function Button({ children, variant = 'primary', onClick, href, type, target, rel }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.03em',
    padding: '10px 22px',
    borderRadius: 4,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background 200ms, color 200ms, border-color 200ms',
    lineHeight: 1,
  };
  const styles = {
    primary:   { ...base, background: 'var(--accent)', color: 'var(--fg-on-accent)', border: '1px solid var(--accent)' },
    secondary: { ...base, background: 'transparent',   color: 'var(--accent)',         border: '1px solid var(--accent)' },
    tertiary:  { ...base, background: 'transparent',   color: 'var(--accent)',         border: '1px solid transparent', padding: '10px 0', textDecoration: 'underline', textUnderlineOffset: '4px' },
  };
  const props = { style: styles[variant], onClick, type };
  if (href) {
    const safeRel = target === '_blank' ? (rel || 'noopener noreferrer') : rel;
    return <a href={href} target={target} rel={safeRel} {...props}>{children}</a>;
  }
  return <button {...props}>{children}</button>;
}

function Card({ accent, children, style }) {
  const accents = { amber: '#CF872D', olive: '#A6AC3E', bordeaux: '#89221D' };
  const bg = accent === 'olive' ? '#F0F2E4' : '#fff';
  return (
    <div style={{
      background: bg,
      border: '0.5px solid var(--line)',
      borderTop: accent ? `3px solid ${accents[accent]}` : '0.5px solid var(--line)',
      borderRadius: 6,
      padding: 20,
      ...style,
    }}>{children}</div>
  );
}

function Icon({ name, size = 18, color, strokeWidth = 1.5 }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { 'stroke-width': strokeWidth, width: size, height: size } });
    }
  }, [name, size, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', color: color || 'currentColor', width: size, height: size }} />;
}

function SocialIcon({ name, size = 16, strokeWidth = 1.5 }) {
  // Brand glyphs in line-style om aan te sluiten op de Lucide-iconen elders.
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (name === 'facebook') {
    return (
      <svg {...common}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  if (name === 'instagram') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-4.74-4.74A4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (name === 'linkedin') {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  return null;
}

Object.assign(window, { Eyebrow, SectionDivider, Button, Card, Icon, SocialIcon });
