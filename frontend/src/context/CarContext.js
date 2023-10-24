// @react
import { 
    useContext, 
    createContext, 
    useEffect, 
    useState 
} from "react";
// @components
import { UserAuth } from "./AuthContext";
// @services
import * as vehicleServer from "api/vehicleServer";

const VehicleContext = createContext({});

const getUser = () => {
    const { user } = UserAuth();
    const userid = user.uid;
    return (userid);
}

export function VehicleContextProvider({ children }) {
    const [currentVehicle, setCurrentVehicle] = useState({});
    const [loading, setLoading] = useState(true);

    // Tomar el id del usuario
    const userid = getUser();

    // Cargar el vehículo del usuario
    useEffect(() => {
        if (userid !== undefined) {
            listVehicles();
        } else {
            setLoading(false);
        }
    }, [userid]);

    // Función para listar los vehículos del usuario
    const listVehicles = async () => {
        try {
            const ans = await vehicleServer.listVehicles(userid);
            const data = ans.data;
            setCurrentVehicle(data[0]);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    if (loading) {
        console.log("Cargando...");
    }

    return(
        <VehicleContext.Provider value={{ currentVehicle, setCurrentVehicle }}>
            {children}
        </VehicleContext.Provider>
    );
}

// Hook para usar el contexto del vehículo
export const UserVehicle = () => {
    return useContext(VehicleContext);
};
  