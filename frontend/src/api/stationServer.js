import axios from "axios";

//Direccion de la API
const stationApi = axios.create({
    baseURL: 'http://localhost:8000/api/station'//'http://34.31.210.135/api/station'
})

//Creacion de estaciones
export const createStation = async (newStation) => {
    return console.log(newStation)
    //return await stationApi.post("/", newStation)
}