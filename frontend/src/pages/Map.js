import NavBarApp from "../components/NavBarApp";

export default function Map() {
  return (
    <body>
      <div style={{position: 'absolute', right: '0', width: '15rem', height: '5rem', backdropFilter: 'opacity(1) blur(0px)', opacity: '1', padding: '15px', background: 'var(--bs-body-color)', color: 'var(--bs-emphasis-color)',}}>
        <p style={{color: 'var(--bs-body-bg)', marginBottom: '0px', opacity: '1',}}>Vehiculo</p>
        <p style={{color: 'var(--bs-body-bg)', marginBottom: '0px', opacity: '1',}}>Placa</p>
      </div>
      <NavBarApp/>
      <div style={{height: '100vh', overflowY: 'hidden'}}><iframe title="map" allowFullScreen="" src="https://cdn.bootstrapstudio.io/placeholders/map.html" style={{width: '100%', height: '100%', position: 'static',}}></iframe></div>
    </body>
  )
}
