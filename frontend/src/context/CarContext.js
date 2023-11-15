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
    const [standar, setStandar] = useState(true);
    const [currentVehicleId, setCurrentVehicleId] = useState(null);

    // Tomar el id del usuario
    const userid = getUser();

    // Cargar los vehículos del usuario
    useEffect(() => {
        if (userid !== undefined) {
            listVehicles();
        } else {
            setStandar(false);
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
            setStandar(false);
            return data;
            // En la siguiente linea setea el primer vehículo de la lista
            // Se puede cambiar para que sea el último o el que se quiera
            //setCurrentVehicle(data[0]);
        } catch (error) {
            console.log(error);
            setStandar(false);
        }
    }

    // Función para obtener un vehículo según su id
    const getSingleVehicle = async () => {
        try {
            const ans = await vehicleServer.getVehicle(currentVehicleId);
            const data = ans.data;
            setCurrentVehicle(data);
            setStandar(false);
        } catch (error) {
            //console.log(error);
            setStandar(false);
        }
    }

    const standarVehicle = async () => {
        const id = Math.round(Math.random() * (31-27) + 27 );
        const ans = await vehicleServer.getVehicle(id);
        const data = ans.data;
        setCurrentVehicle(data);
        setStandar(false);
    }

    if (standar) {
        standarVehicle();
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
  