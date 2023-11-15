import axios from "axios";

//Direccion de la API
const stationApi = axios.create({
    baseURL: 'http://localhost:8000/api/station'//'https://grid-api-r3rjzt6gwa-uc.a.run.app/api/station'
})

//Creacion de estaciones
export const createStation = async (newStation) => {
    return console.log(newStation)
    //return await stationApi.post("/", newStation)
}