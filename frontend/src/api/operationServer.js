import axios from "axios";

//Direccion de la API
const operationApi = axios.create({
    baseURL:'http://localhost:8000/api/operation/'
})

//Creacion de datos
export const createOperation = async (newOperation) => {
    return console.log(newOperation)
    //return await operationApi.post("/", newOperation)
}