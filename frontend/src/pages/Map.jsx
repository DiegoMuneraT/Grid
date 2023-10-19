import { useEffect, useRef, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import mapboxgl from "mapbox-gl";

const Map = () => {
  mapboxgl.accessToken = "pk.eyJ1IjoiZGllZ29tdW5lcmE3IiwiYSI6ImNsbWw3bWxrbzA4cGkycnBxYXNpMHpuZ3gifQ.0xmZY7JTLBK2q5QhDGmCVA";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-75.56888);
  const [lat, setLat] = useState(6.24281);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/diegomunera7/clml7xe4b04g301qx0jrfc2i8',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          right: "0",
          width: "15rem",
          height: "5rem",
          backdropFilter: "opacity(1) blur(0px)",
          opacity: "1",
          padding: "15px",
          background: "var(--bs-body-color)",
          color: "var(--bs-emphasis-color)",
          zIndex: '2',
        }}
      >
        <p
          style={{
            color: "var(--bs-body-bg)",
            marginBottom: "0px",
            opacity: "1",
          }}
        >
          Vehiculo
        </p>
        <p
          style={{
            color: "var(--bs-body-bg)",
            marginBottom: "0px",
            opacity: "1",
          }}
        >
          Placa
        </p>
      </div>
      <NavBarApp />
      <div ref={mapContainer} style={{ zIndex: '1', right: '0',  width: '96.24%', height: '100%', position: 'absolute', overflowY: 'hidden' }}/>
    </>
  );
};
export default Map;

// Mapa https://www.google.com/maps/d/u/0/edit?mid=1tmDkMVSfIYowe3z-6Jgy6J0y9nsQkKM&usp=sharing