import NavBarApp from "../components/NavBarApp";

const key = "AIzaSyCERW3YjcC1e0M984boxaeATpGhJXRsy2M";

const Map = () => {
  return (
    <body>
      <div style={{position: 'absolute', right: '0', width: '15rem', height: '5rem', backdropFilter: 'opacity(1) blur(0px)', opacity: '1', padding: '15px', background: 'var(--bs-body-color)', color: 'var(--bs-emphasis-color)',}}>
        <p style={{color: 'var(--bs-body-bg)', marginBottom: '0px', opacity: '1',}}>Vehiculo</p>
        <p style={{color: 'var(--bs-body-bg)', marginBottom: '0px', opacity: '1',}}>Placa</p>
      </div>
      <NavBarApp/>
      <div id="map" style={{height: '100vh', overflowY: 'hidden'}}>
        
      </div>
    </body>
  )
}
export default Map;

// Mapa https://www.google.com/maps/d/u/0/edit?mid=1tmDkMVSfIYowe3z-6Jgy6J0y9nsQkKM&usp=sharing
