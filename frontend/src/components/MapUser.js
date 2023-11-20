//@components
import NavBarApp from "../components/NavBarApp";
import VehicleInfo from "components/VehicleInfo";
//@services
import Map from "services/mapbox/mapbox_component";

const MapUser = () => {
    return (
        <>
          <div
            style={{
              position: "absolute",
              right: "0",
              width: "15rem",
              height: "4.4rem",
              backdropFilter: "opacity(1) blur(0px)",
              opacity: "1",
              padding: "10px",
              background: "var(--bs-body-color)",
              color: "white",
              zIndex: '2',
            }}
          >
            <VehicleInfo data="vehiculo"/>
            <VehicleInfo data="placa"/>
          </div>
          <NavBarApp />
          <Map/>
        </>
    );
}

export default MapUser;
