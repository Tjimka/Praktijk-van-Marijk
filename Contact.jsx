function Contact() {
  const [form, setForm] = React.useState({ naam: '', email: '', organisatie: '', telefoon: '', bericht: '' });
  const [sent, setSent] = React.useState(false);
  const up = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {e.preventDefault();setSent(true);};

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg1)',
    background: '#fff', border: '0.5px solid var(--line-strong)',
    borderRadius: 4, padding: '10px 12px',
    outline: 'none'
  };
  const labelStyle = {
    display: 'block',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--fg1)',
    marginBottom: 6
  };

  const eyebrowLabel = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--fg3)',
    fontWeight: 500,
    marginBottom: 14
  };

  return (
    <div>
      {/* ============ HERO ============ */}
      <div style={{ padding: '64px 48px 32px', maxWidth: 760 }}>
        <Eyebrow>Contact</Eyebrow>
        <h1 style={{
          fontFamily: 'Lora, serif',
          fontSize: 34,
          fontWeight: 500,
          color: 'var(--fg1)',
          lineHeight: 1.3,
          margin: '0 0 20px',
          textWrap: 'balance'
        }}>
          Plan een vrijblijvende kennismaking.
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 17,
          color: 'var(--fg2)',
          lineHeight: 1.7,
          margin: 0,
          maxWidth: 56 + 'ch'
        }}>
          Laat weten waar je tegenaan loopt. Ik reageer binnen twee werkdagen.
        </p>
      </div>

      <SectionDivider />

      {/* ============ FORMULIER + GEGEVENS ============ */}
      <div style={{
        padding: '56px 48px 64px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
        gap: 72,
        alignItems: 'start'
      }}>
        {/* Form */}
        {!sent ?
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 560 }}>
            <div>
              <label style={labelStyle}>Naam</label>
              <input required value={form.naam} onChange={up('naam')} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>E-mail</label>
              <input required type="email" value={form.email} onChange={up('email')} placeholder="naam@organisatie.nl" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Organisatie</label>
              <input required value={form.organisatie} onChange={up('organisatie')} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>
                Telefoon <span style={{ color: 'var(--fg3)', fontWeight: 400 }}>(optioneel)</span>
              </label>
              <input type="tel" value={form.telefoon} onChange={up('telefoon')} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Bericht</label>
              <textarea
              required
              value={form.bericht}
              onChange={up('bericht')}
              style={{ ...inputStyle, minHeight: 160, resize: 'vertical', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif' }} />
            
            </div>
            <div style={{ marginTop: 4 }}>
              <Button type="submit">Verstuur bericht</Button>
            </div>
          </form> :

        <div style={{
          padding: 28,
          border: '0.5px solid var(--line)',
          borderTop: '3px solid var(--accent-2)',
          borderRadius: 6,
          background: '#fff',
          maxWidth: 560
        }}>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 22, fontWeight: 500, color: 'var(--fg1)', marginBottom: 8 }}>
              Verzonden.
            </div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg2)', lineHeight: 1.7 }}>
              {form.naam ? `Dank, ${form.naam.split(' ')[0]}. ` : ''}Ik reageer binnen twee werkdagen.
            </div>
          </div>
        }

        {/* Rechterkolom, foto + directe gegevens */}
        <div>
          <div style={{
            background: 'var(--beige)',
            borderRadius: 6,
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '3/2',
            marginBottom: 28
          }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent)', zIndex: 2 }} />
            <img
              src={window.__resources && window.__resources.marijkeContact || "assets/marijke-contact.jpg"}
              alt="Marijke Koomen bij de entree van de praktijk"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            
          </div>

          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14.5, color: 'var(--fg1)', lineHeight: 1.8 }}>
            <div style={eyebrowLabel}>Direct</div>
            <div style={{ marginBottom: 4 }}>
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={{ color: 'var(--fg1)', textDecoration: 'none', borderBottom: '0.5px solid var(--line-strong)' }}>
                marijke@praktijkvanmarijk.nl
              </a>
            </div>
            <div style={{ marginBottom: 28, fontVariantNumeric: 'tabular-nums' }}>
              <a href="tel:+31627376003" style={{ color: 'var(--fg1)', textDecoration: 'none', borderBottom: '0.5px solid var(--line-strong)' }}>06 - 27 37 60 03

              </a>
            </div>

            <div style={eyebrowLabel}>Praktijk</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '92px 1fr',
              rowGap: 4,
              fontSize: 14,
              color: 'var(--fg2)'
            }}>
              <div style={{ color: 'var(--fg3)' }}>SKJ</div>
              <div style={{ color: 'var(--fg1)', fontVariantNumeric: 'tabular-nums' }}>110005309</div>
              <div style={{ color: 'var(--fg3)' }}>KvK</div>
              <div style={{ color: 'var(--fg1)', fontVariantNumeric: 'tabular-nums' }}>72258209</div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

Object.assign(window, { Contact });