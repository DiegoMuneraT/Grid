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
import { async } from "q";

const VehicleContext = createContext({});

const getUser = () => {
    const { user } = UserAuth();

    if (user === null) {
        return undefined;
    }

    const userid = user.uid;
    return (userid);
}

export function VehicleContextProvider({ children }) {
    const [currentVehicle, setCurrentVehicle] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentVehicleId, setCurrentVehicleId] = useState(null);

    // Tomar el id del usuario
    const userid = getUser();

    // Cargar los vehículos del usuario
    useEffect(() => {
        if (userid !== undefined) {
            listVehicles();
        } else {
            setLoading(false);
        }
    }, [userid]);

    // Funcion para setear el estado
    function setCurrentVehicleState(id) {
        setCurrentVehicleId(id);
        getSingleVehicle(currentVehicleId);
    }

    // Función para listar los vehículos del usuario
    const listVehicles = async () => {
        try {
            const ans = await vehicleServer.listVehicles(userid);
            const data = ans.data;
            setLoading(false);
            return data;
            // En la siguiente linea setea el primer vehículo de la lista
            // Se puede cambiar para que sea el último o el que se quiera
            //setCurrentVehicle(data[0]);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // Función para obtener un vehículo según su id
    const getSingleVehicle = async () => {
        try {
            const ans = await vehicleServer.getVehicle(currentVehicleId);
            const data = ans.data;
            setCurrentVehicle(data);
            setLoading(false);
        } catch (error) {
            //console.log(error);
            setLoading(false);
        }
    }

    if (loading) {
        console.log('Cargando vehículos...');
    }

    return(
        <VehicleContext.Provider value={{ currentVehicle, setCurrentVehicle, setCurrentVehicleState }}>
            {children}
        </VehicleContext.Provider>
    );
}

// Hook para usar el contexto del vehículo
export const UserVehicle = () => {
    return useContext(VehicleContext);
};
  