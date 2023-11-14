//@components
import NavBarAdmin from "components/NavBarAdmin";
//@services
import Map from "services/mapbox/mapbox_component";

const MapAdmin = () => {
    return (
        <>
            <NavBarAdmin />
            <Map />
        </>
    );
}

export default MapAdmin;