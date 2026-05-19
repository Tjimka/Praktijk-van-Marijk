function Topbar({ route, setRoute }) {
  const items = [
    ['home', 'Home', 'Praktijk van Marijk — specialist intiem terreur voor jeugdprofessionals'],
    ['over', 'Over Marijke', 'Over Marijke Koomen, SKJ-geregistreerd jeugdprofessional'],
    ['professionals', 'Training jeugdprofessionals', 'Training en coaching voor jeugdprofessionals'],
    ['werkwijze', 'Werkwijze en aanpak', 'Werkwijze en aanpak van Praktijk van Marijk'],
    ['ervaringen', 'Ervaringen jeugdzorg', 'Ervaringen uit jeugdzorg en jeugdbescherming'],
    ['contact', 'Contact', 'Neem contact op met Marijke Koomen'],
  ];

  const [open, setOpen] = React.useState(false);

  // Sluit menu bij route-wissel
  React.useEffect(() => { setOpen(false); }, [route]);

  // ESC sluit menu, blokkeer scroll als menu open
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="pvm-topbar" role="banner">
      <a className="pvm-topbar__brand" onClick={() => setRoute('home')} aria-label="Naar de homepagina">
        <img
          className="pvm-topbar__logo"
          src={(window.__resources && window.__resources.logoPraktijk) || "assets/logo-praktijk-van-marijk.png"}
          alt="Praktijk van Marijk"
        />
        <span className="pvm-topbar__sep" aria-hidden="true"></span>
        <span className="pvm-topbar__tagline">voor jeugd&shy;professionals</span>
      </a>

      {/* Desktop nav */}
      <nav className="pvm-topbar__nav" aria-label="Hoofdnavigatie">
        <ul>
          {items.map(([key, label, title]) => (
            <li key={key}>
              <a
                onClick={() => setRoute(key)}
                title={title}
                aria-label={title}
                aria-current={route === key ? 'page' : undefined}
                className={'pvm-topbar__link' + (route === key ? ' is-active' : '')}
              >{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger trigger (alleen mobiel) */}
      <button
        type="button"
        className="pvm-topbar__hamburger"
        aria-label={open ? 'Sluit menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="pvm-mobile-nav"
        onClick={() => setOpen(v => !v)}
      >
        <span className={'pvm-hamburger' + (open ? ' is-open' : '')} aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobiele drawer */}
      <div
        className={'pvm-mobile-overlay' + (open ? ' is-open' : '')}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="pvm-mobile-nav"
        className={'pvm-mobile-nav' + (open ? ' is-open' : '')}
        aria-label="Mobiele navigatie"
        aria-hidden={!open}
      >
        <ul>
          {items.map(([key, label, title]) => (
            <li key={key}>
              <a
                onClick={() => { setRoute(key); setOpen(false); }}
                title={title}
                aria-label={title}
                aria-current={route === key ? 'page' : undefined}
                className={'pvm-mobile-nav__link' + (route === key ? ' is-active' : '')}
              >{label}</a>
            </li>
          ))}
        </ul>
        <div className="pvm-mobile-nav__foot">
          <a href="mailto:marijke@praktijkvanmarijk.nl" className="pvm-mobile-nav__contact">marijke@praktijkvanmarijk.nl</a>
          <a href="tel:+31627376003" className="pvm-mobile-nav__contact">06 - 27 37 60 03</a>
          <a href="https://calendly.com/praktijkvanmarijk/25min" target="_blank" rel="noopener noreferrer" className="pvm-mobile-nav__cta">Plan een kennismaking →</a>
        </div>
      </nav>
    </header>
  );
}

function Footer({ setRoute }) {
  return (
    <footer className="pvm-footer" role="contentinfo">
      <div className="pvm-footer__col pvm-footer__col--brand">
        <div className="pvm-footer__title">Praktijk van Marijk</div>
        <div className="pvm-footer__sub">SKJ-geregistreerd jeugd- en gezinsprofessional</div>
        <div className="pvm-footer__skj">
          <span className="pvm-footer__skj-label">SKJ-registratie</span>
          <span className="pvm-footer__skj-nr">110005309</span>
        </div>
      </div>

      <div className="pvm-footer__col">
        <div className="pvm-footer__heading">Site</div>
        <a onClick={() => setRoute('werkwijze')} className="pvm-footer__link">Werkwijze en aanpak</a>
        <a onClick={() => setRoute('professionals')} className="pvm-footer__link">Training jeugdprofessionals</a>
        <a onClick={() => setRoute('ervaringen')} className="pvm-footer__link">Ervaringen jeugdzorg</a>
      </div>

      <div className="pvm-footer__col">
        <div className="pvm-footer__heading">Contact</div>
        <div><a href="mailto:marijke@praktijkvanmarijk.nl" className="pvm-footer__link">marijke@praktijkvanmarijk.nl</a></div>
        <div style={{ fontVariantNumeric: 'tabular-nums' }}><a href="tel:+31627376003" className="pvm-footer__link">06 - 27 37 60 03</a></div>
        <a href="https://calendly.com/praktijkvanmarijk/25min" target="_blank" rel="noopener noreferrer" className="pvm-footer__cta">Plan een kennismaking →</a>
        <div className="pvm-footer__socials">
          <a href="https://www.facebook.com/profile.php?id=61562826452913" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="pvm-footer__social"><SocialIcon name="facebook" size={15} strokeWidth={1.5} /></a>
          <a href="https://www.instagram.com/praktijkvanmarijk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="pvm-footer__social"><SocialIcon name="instagram" size={15} strokeWidth={1.5} /></a>
          <a href="https://www.linkedin.com/in/marijke-koomen-365096b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="pvm-footer__social"><SocialIcon name="linkedin" size={15} strokeWidth={1.5} /></a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Topbar, Footer });
