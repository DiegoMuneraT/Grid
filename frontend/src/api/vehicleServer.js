import axios from "axios";

//Direccion de la API
const vehicleApi = axios.create({
    baseURL:'http://localhost:8000/vehicles/api/vehicle/'
})


export const listVehicles = async () => {
    return await vehicleApi.get("/");
}

export const createVehicle = async (newVehicle) => {
    return await vehicleApi.post("/", newVehicle)
}
