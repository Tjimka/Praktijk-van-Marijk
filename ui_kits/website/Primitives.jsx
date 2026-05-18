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

function Button({ children, variant = 'primary', onClick, href, type }) {
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
  if (href) return <a href={href} {...props}>{children}</a>;
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

Object.assign(window, { Eyebrow, SectionDivider, Button, Card, Icon });
