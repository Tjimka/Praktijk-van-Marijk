function Contact() {
  const [result, setResult] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("Bericht wordt verzonden…");
    const formData = new FormData(event.target);
    formData.append("access_key", "4f2ba78f-5b7f-43b0-8978-065ddc0a9450");
    formData.append("from_name", "Praktijk van Marijke — website");
    formData.append("subject", "Nieuw bericht via contactformulier");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setResult("Bericht verzonden. Ik reageer binnen twee werkdagen.");
        event.target.reset();
      } else {
        setResult(data.message || "Er ging iets mis. Probeer het opnieuw of mail direct naar marijke@praktijkvanmarijk.nl.");
      }
    } catch (err) {
      setResult("Er ging iets mis. Probeer het opnieuw of mail direct naar marijke@praktijkvanmarijk.nl.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--fg1)',
    background: '#fff', border: '0.5px solid var(--line-strong)',
    borderRadius: 4, padding: '10px 12px',
    outline: 'none',
  };

  const eyebrowLabel = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--fg3)',
    fontWeight: 500,
    marginBottom: 14,
  };

  return (
    <div>
      {/* ============ HERO ============ */}
      <div className="pvm-section" style={{ padding: '64px 48px 32px', maxWidth: 760 }}>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="pvm-h1" style={{
          fontFamily: 'Lora, serif',
          fontSize: 34,
          fontWeight: 500,
          color: 'var(--fg1)',
          lineHeight: 1.3,
          margin: '0 0 20px',
          textWrap: 'balance',
        }}>
          Plan een vrijblijvende kennismaking.
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 17,
          color: 'var(--fg2)',
          lineHeight: 1.7,
          margin: 0,
          maxWidth: 56 + 'ch',
        }}>
          Laat weten waar je tegenaan loopt. Ik reageer binnen twee werkdagen.
        </p>
      </div>

      <SectionDivider />

      {/* ============ FORMULIER + GEGEVENS ============ */}
      <div className="pvm-contact-grid" style={{
        padding: '56px 48px 64px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
        gap: 72,
        alignItems: 'start',
      }}>
        {/* Form — Web3Forms */}
        <form
          onSubmit={onSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 560 }}
        >
          {/* Honeypot — onzichtbaar voor mensen, vangt bots */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

          <input type="text" name="name" placeholder="Naam" required style={inputStyle} />
          <input type="email" name="email" placeholder="E-mail" required style={inputStyle} />
          <textarea
            name="message"
            placeholder="Bericht"
            required
            style={{ ...inputStyle, minHeight: 160, resize: 'vertical', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif' }}
          />
          <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Button type="submit" disabled={sending}>{sending ? 'Bezig…' : 'Verstuur'}</Button>
            {result && (
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13.5,
                color: success ? 'var(--accent-2, var(--fg2))' : 'var(--fg2)',
                lineHeight: 1.5,
              }}>
                {result}
              </span>
            )}
          </div>
        </form>

        {/* Rechterkolom, foto + directe gegevens */}
        <div>
          <div style={{
            background: 'var(--beige)',
            borderRadius: 6,
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '3/2',
            marginBottom: 28,
          }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent)', zIndex: 2 }} />
            <img
              src={(window.__resources && window.__resources.marijkeContact) || "assets/marijke-contact.jpg"}
              alt="Marijke Koomen bij de entree van de praktijk"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14.5, color: 'var(--fg1)', lineHeight: 1.8 }}>
            <div style={eyebrowLabel}>Direct</div>
            <div style={{ marginBottom: 4 }}>
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={{ color: 'var(--fg1)', textDecoration: 'none', borderBottom: '0.5px solid var(--line-strong)' }}>
                marijke@praktijkvanmarijk.nl
              </a>
            </div>
            <div style={{ marginBottom: 28, fontVariantNumeric: 'tabular-nums' }}>
              <a href="tel:+31627376003" style={{ color: 'var(--fg1)', textDecoration: 'none', borderBottom: '0.5px solid var(--line-strong)' }}>
                06 - 27 37 60 03
              </a>
            </div>

            <div style={eyebrowLabel}>Volg de praktijk</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
              <a href="https://www.linkedin.com/in/marijke-koomen-365096b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', border: '0.5px solid var(--line-strong)', color: 'var(--fg1)', textDecoration: 'none', transition: 'color 200ms, border-color 200ms, background 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg1)'; e.currentTarget.style.borderColor = 'var(--line-strong)'; }}>
                <SocialIcon name="linkedin" size={16} strokeWidth={1.5} />
              </a>
            </div>

            <div style={eyebrowLabel}>Praktijk</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '92px 1fr',
              rowGap: 4,
              fontSize: 14,
              color: 'var(--fg2)',
            }}>
              <div style={{ color: 'var(--fg3)' }}>SKJ</div>
              <div style={{ color: 'var(--fg1)', fontVariantNumeric: 'tabular-nums' }}>110005309</div>
              <div style={{ color: 'var(--fg3)' }}>KvK</div>
              <div style={{ color: 'var(--fg1)', fontVariantNumeric: 'tabular-nums' }}>72258209</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Contact });
