import NavBarApp from "../components/NavBarApp";
import Map from "services/mapbox/mapbox_component";

const MapView = () => {
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
      <Map/>
    </>
  );
};
export default MapView;

// Mapa https://www.google.com/maps/d/u/0/edit?mid=1tmDkMVSfIYowe3z-6Jgy6J0y9nsQkKM&usp=sharing