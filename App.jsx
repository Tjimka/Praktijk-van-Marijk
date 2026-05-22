const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "skjPlacement": "bottom-aligned"
}/*EDITMODE-END*/;

const ROUTES = ['home', 'over', 'professionals', 'werkwijze', 'ervaringen', 'contact', 'voorwaarden', 'privacy'];

function readHashRoute() {
  const h = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase();
  return ROUTES.includes(h) ? h : 'home';
}

function App() {
  const [route, _setRoute] = React.useState(readHashRoute);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const setRoute = React.useCallback((r) => {
    _setRoute(r);
    if (ROUTES.includes(r)) {
      try { history.replaceState(null, '', '#' + r); } catch (_) {}
    }
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const onHash = () => _setRoute(readHashRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Report body height to a parent frame (used by preview cards to autosize).
  React.useEffect(() => {
    if (window.parent === window) return;
    let last = 0;
    const send = () => {
      const h = document.documentElement.scrollHeight;
      if (h !== last) {
        last = h;
        try { window.parent.postMessage({ type: '__pvm_page_height', route, height: h }, '*'); } catch (_) {}
      }
    };
    send();
    const ro = new ResizeObserver(send);
    ro.observe(document.documentElement);
    const id = setInterval(send, 500);
    return () => { ro.disconnect(); clearInterval(id); };
  }, [route]);

  const page = {
    home: <Home setRoute={setRoute} />,
    over: <Over />,
    professionals: <Professionals skjPlacement={t.skjPlacement} />,
    werkwijze: <Werkwijze />,
    ervaringen: <Ervaringen setRoute={setRoute} />,
    contact: <Contact />,
    voorwaarden: <AlgemeneVoorwaarden />,
    privacy: <Privacy />,
  }[route];
  const label = { home: '01 Home', over: '02 Over Marijke', professionals: '03 Training jeugdprofessionals', werkwijze: '04 Werkwijze en aanpak', ervaringen: '05 Ervaringen jeugdzorg', contact: '06 Contact', voorwaarden: '07 Algemene voorwaarden', privacy: '08 Privacybeleid' }[route];

  return (
    <div data-screen-label={label} style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Topbar route={route} setRoute={setRoute} />
      {page}
      <Footer setRoute={setRoute} />
      <CookieBanner onNavigate={setRoute} />

      <TweaksPanel>
        <TweakSection label="Voor professionals, SKJ-strip" />
        <TweakSelect
          label="Plaatsing SKJ"
          value={t.skjPlacement}
          options={[
            { value: 'bottom-aligned', label: 'In hero, onderaan tekstkolom' },
            { value: 'caption-bar',    label: 'Onder foto, als bijschrift' },
            { value: 'footer-strip',   label: 'Slimme strip onder hero' },
            { value: 'above-eyebrow',  label: 'Boven eyebrow (compact)' },
          ]}
          onChange={(v) => setTweak('skjPlacement', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
