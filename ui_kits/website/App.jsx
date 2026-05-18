const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "skjPlacement": "bottom-aligned"
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = React.useState('home');
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const page = {
    home: <Home setRoute={setRoute} />,
    over: <Over />,
    professionals: <Professionals skjPlacement={t.skjPlacement} />,
    werkwijze: <Werkwijze />,
    ervaringen: <Ervaringen setRoute={setRoute} />,
    contact: <Contact />,
  }[route];
  const label = { home: '01 Home', over: '02 Over Marijke', professionals: '03 Voor professionals', werkwijze: '04 Werkwijze', ervaringen: '05 Ervaringen', contact: '06 Contact' }[route];

  return (
    <div data-screen-label={label} style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Topbar route={route} setRoute={setRoute} />
      {page}
      <Footer setRoute={setRoute} />

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
