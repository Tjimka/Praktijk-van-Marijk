function TestimonialCarousel({ quotes }) {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const total = quotes.length;
  const FADE_MS = 320;
  const AUTOPLAY_MS = 6000;

  const goTo = React.useCallback((next) => {
    setVisible(false);
    window.setTimeout(() => {
      setIndex(((next % total) + total) % total);
      setVisible(true);
    }, FADE_MS);
  }, [total]);

  const prev = React.useCallback(() => goTo(index - 1), [index, goTo]);
  const next = React.useCallback(() => goTo(index + 1), [index, goTo]);

  // Autoplay
  React.useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      goTo(index + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index, paused, goTo]);

  // Keyboard navigation
  const regionRef = React.useRef(null);
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  };

  const [text, source] = quotes[index];

  const arrowBase = {
    appearance: 'none',
    background: 'transparent',
    border: '1px solid #89221d',
    color: '#89221d',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 0,
    transition: 'background 160ms ease, color 160ms ease',
  };

  return (
    <section
      ref={regionRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Ervaringen van professionals"
      style={{
        background: '#faf8f4',
        padding: '88px 48px 72px',
        outline: 'none',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: 820,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '40px minmax(0, 1fr) 40px',
        alignItems: 'center',
        gap: 32,
      }}>
        {/* Prev */}
        <button
          type="button"
          onClick={prev}
          aria-label="Vorige ervaring"
          aria-controls="testimonial-live"
          style={arrowBase}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#89221d'; e.currentTarget.style.color = '#faf8f4'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#89221d'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Quote */}
        <div
          id="testimonial-live"
          role="group"
          aria-roledescription="slide"
          aria-label={`Ervaring ${index + 1} van ${total}`}
          aria-live="polite"
          aria-atomic="true"
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease`,
            textAlign: 'center',
            minHeight: 240,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'Lora, Georgia, serif',
              fontSize: 96,
              color: '#cf872d',
              lineHeight: 0.7,
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            &ldquo;
          </div>
          <blockquote style={{ margin: 0 }}>
            <p style={{
              fontFamily: 'Lora, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 28,
              color: '#2e1f0e',
              lineHeight: 1.45,
              margin: '0 0 28px',
              textWrap: 'pretty',
            }}>
              {text}
            </p>
            <footer style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 12,
              color: '#a6ac3e',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}>
              {source}
            </footer>
          </blockquote>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="Volgende ervaring"
          aria-controls="testimonial-live"
          style={arrowBase}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#89221d'; e.currentTarget.style.color = '#faf8f4'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#89221d'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div
        role="tablist"
        aria-label="Kies een ervaring"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12,
          marginTop: 48,
        }}
      >
        {quotes.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Toon ervaring ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                appearance: 'none',
                border: '1px solid #89221d',
                background: active ? '#89221d' : 'transparent',
                width: 9,
                height: 9,
                borderRadius: '50%',
                padding: 0,
                cursor: 'pointer',
                transition: 'background 160ms ease',
              }}
            />
          );
        })}
      </div>

    </section>
  );
}

function Ervaringen({ setRoute }) {
  const quotes = [
    [
      'Eindelijk iemand die weet waar ik het over heb. Ik voelde mijn hele lijf ontspannen.',
      'Gezinsvoogd, Wijkteam Noord-Holland',
    ],
    [
      'Na de training schreef ik voor het eerst een rapport dat standhield in de raadkamer. Zonder dat ik mijn onderbuikgevoel hoefde weg te redeneren.',
      'Raadsonderzoeker, Raad voor de Kinderbescherming',
    ],
    [
      'Ik had al tien jaar het gevoel dat ik iets miste. Nu heb ik daar taal voor.',
      'Jeugd- en gezinsprofessional, Gemeentelijk Wijkteam',
    ],
  ];

  return (
    <div>
      {/* ============ HERO ============ */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
        gap: 56,
        padding: '56px 48px 48px',
        alignItems: 'start',
      }}>
        <div style={{ maxWidth: 480 }}>
          <Eyebrow>Ervaringen</Eyebrow>
          <h1 style={{
            fontFamily: 'Lora, serif',
            fontSize: 30,
            fontWeight: 500,
            color: 'var(--fg1)',
            lineHeight: 1.35,
            margin: '0 0 20px',
            textWrap: 'balance',
          }}>
            Wat professionals na een traject meenemen.
          </h1>
          {/* Inleidende alinea's vóór de carousel */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 15,
            color: 'var(--fg2)',
            lineHeight: 1.7,
            margin: '0 0 16px',
          }}>
            Na een traject schrijven professionals concretere, meer feitelijk onderbouwde verslagen, herkennen ze de machtsdynamiek in een gezin en gaan ze sneller over tot handelen op het vergroten van de veiligheid. Niet omdat ze meer kennis hebben gekregen. Wél omdat ze die kennis hebben geoefend met hun eigen casuïstiek.
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 15,
            color: 'var(--fg2)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Meer over hoe een traject is opgebouwd, staat op de pagina{' '}
            <a
              onClick={(e) => { e.preventDefault(); setRoute && setRoute('werkwijze'); }}
              href="/werkwijze"
              style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid currentColor', cursor: 'pointer' }}
            >Werkwijze</a>.
          </p>
        </div>

        {/* Foto, training in uitvoering */}
        <figure style={{ margin: 0 }}>
          <div style={{
            background: 'var(--beige)',
            borderRadius: 6,
            aspectRatio: '3/2',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'var(--accent-2)', zIndex: 2 }} />
            <img
              src={(window.__resources && window.__resources.marijkeTraining) || "assets/marijke-training.jpg"}
              alt="Marijke geeft online training aan een groep jeugdprofessionals"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <figcaption style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12,
            color: 'var(--fg3)',
            marginTop: 10,
            lineHeight: 1.55,
          }}>
            Online training met jeugdprofessionals, voorjaar 2026.
          </figcaption>
        </figure>
      </div>

      <SectionDivider />

      {/* ============ TESTIMONIAL CAROUSEL ============ */}
      <TestimonialCarousel quotes={quotes} />

      {/* ============ CONTACT CTA ============ */}
      <div style={{ padding: '48px 48px 56px', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 15,
          color: 'var(--fg2)',
          lineHeight: 1.7,
          margin: '0 0 20px',
        }}>
          Wil je weten of een training of traject past bij jouw team of organisatie?
        </p>
        <a
          href="https://calendly.com/praktijkvanmarijk/25min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: 'var(--fg-on-accent)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: '0.01em',
            padding: '12px 22px',
            borderRadius: 4,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'background 160ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; }}
        >
          Neem contact op&nbsp;→
        </a>
      </div>

      {/* ============ FAQ, JSON-LD (SEO, niet zichtbaar) ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Wat leren jeugdprofessionals van een training intiem terreur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Professionals leren intiem terreur en dwingende controle herkennen, ook als de dader functioneel overkomt en de situatie aan de buitenkant geordend lijkt. Ze oefenen met het vertalen van non-verbale signalen en incongruenties naar feitelijke observaties die standhouden in verslaglegging, raadkamer en MDO. De training werkt altijd met eigen casuïstiek van de deelnemers."
              }
            },
            {
              "@type": "Question",
              "name": "Hoe herken je dwingende controle in een vechtscheiding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dwingende controle is niet altijd zichtbaar als fysiek geweld. Het uit zich in gedragspatronen: een ouder die consequent voor de ander spreekt, kinderen die anders reageren in aanwezigheid van één ouder, of een slachtoffer dat bagatelliseert terwijl de dader zich coöperatief opstelt. Standaard methodieken gaan uit van twee gelijkwaardige partijen. Bij dwingende controle is die gelijkwaardigheid er niet."
              }
            },
            {
              "@type": "Question",
              "name": "Wat is het verschil tussen een training en casuïstiekcoaching bij Marijke Koomen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Een groepstraining richt zich op een heel team en behandelt herkenning, risicotaxatie en verslaglegging aan de hand van casuïstiek van de deelnemers. Casuïstiekcoaching is individueel en gaat dieper in op één of meerdere specifieke casussen waar een professional in vastloopt. Beide vormen zijn gericht op het versterken van het professionele handelen, niet op het overnemen van de casus."
              }
            }
          ]
        }) }}
      />
    </div>
  );
}

Object.assign(window, { Ervaringen, TestimonialCarousel });
