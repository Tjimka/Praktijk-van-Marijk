function App() {
  const [route, setRoute] = React.useState('home');
  const page = {
    home: <Home setRoute={setRoute} />,
    over: <Over />,
    professionals: <Professionals />,
    werkwijze: <Werkwijze />,
    ervaringen: <Ervaringen />,
    contact: <Contact />,
  }[route];
  const label = { home: '01 Home', over: '02 Over Marijke', professionals: '03 Voor professionals', werkwijze: '04 Werkwijze', ervaringen: '05 Ervaringen', contact: '06 Contact' }[route];
  return (
    <div data-screen-label={label} style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Topbar route={route} setRoute={setRoute} />
      {page}
      <Footer setRoute={setRoute} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
