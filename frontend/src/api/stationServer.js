import axios from "axios";

//Direccion de la API
const stationApi = axios.create({
    baseURL:'http://localhost:8000/vehicles/api/station/'
})

//Creacion de estaciones
export const createStation = async (newStation) => {
    return await stationApi.post("/", newStation)
}