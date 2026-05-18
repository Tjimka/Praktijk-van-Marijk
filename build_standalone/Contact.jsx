function Contact() {
  const [form, setForm] = React.useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = React.useState(false);
  const up = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    fontFamily: 'DM Sans', fontSize: 15, color: 'var(--fg1)',
    background: '#fff', border: '0.5px solid var(--line-strong)',
    borderRadius: 4, padding: '10px 12px',
  };
  const labelStyle = { display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--fg1)', marginBottom: 6 };

  return (
    <div>
      <div style={{ padding: '64px 48px 32px', maxWidth: 760 }}>
        <Eyebrow>Contact</Eyebrow>
        <h1 style={{ fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: 'var(--fg1)', lineHeight: 1.35, margin: '0 0 20px' }}>
          Plan een vrijblijvende kennismaking.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--fg2)', lineHeight: 1.75, margin: 0 }}>
          Laat weten waar je tegenaan loopt. Ik reageer binnen twee werkdagen.
        </p>
      </div>
      <SectionDivider />
      <div style={{ padding: '48px 48px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
        {!sent ? (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 520 }}>
            <div>
              <label style={labelStyle}>Naam</label>
              <input required value={form.naam} onChange={up('naam')} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>E-mail</label>
              <input required type="email" value={form.email} onChange={up('email')} placeholder="naam@organisatie.nl" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Telefoon <span style={{ color: 'var(--fg3)', fontWeight: 400 }}>(optioneel)</span></label>
              <input type="tel" value={form.telefoon} onChange={up('telefoon')} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Bericht</label>
              <textarea required value={form.bericht} onChange={up('bericht')} style={{ ...inputStyle, minHeight: 160, resize: 'vertical', lineHeight: 1.7 }} />
            </div>
            <div>
              <Button type="submit">Verstuur bericht</Button>
            </div>
          </form>
        ) : (
          <div style={{ padding: 32, border: '0.5px solid var(--line)', borderTop: '3px solid var(--accent-2)', borderRadius: 6, background: '#fff', maxWidth: 520 }}>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', marginBottom: 8 }}>Verzonden.</div>
            <div style={{ fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7 }}>Ik reageer binnen twee werkdagen, {form.naam.split(' ')[0] || 'dank'}.</div>
          </div>
        )}
        <div style={{ fontSize: 14, color: 'var(--fg2)', lineHeight: 1.8 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500, marginBottom: 12 }}>Direct</div>
          <div style={{ marginBottom: 4 }}>marijke@praktijkvanmarijk.nl</div>
          <div style={{ marginBottom: 20 }}>06 — 12 34 56 78</div>
          <div style={{ fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--fg3)', fontWeight: 500, marginBottom: 12 }}>Praktijk</div>
          <div>SKJ 110001234</div>
          <div>KvK 12345678</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Contact });
