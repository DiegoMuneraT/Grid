import axios from "axios";

//Direccion de la API
const vehicleApi = axios.create({
    baseURL:'http://localhost:8000/vehicles/api/vehicle/'
})

//Obtencion de vehiculos
export const listVehicles = async (usuario) => {
    return await vehicleApi.get("/?usuario="+usuario+'&activo=true');
}

//Creacion de vehiculos
export const createVehicle = async (newVehicle) => {
    return await vehicleApi.post("/", newVehicle)
}

//Creacion de vehiculos
export const modifyVehicle = async (id, data) => {
    return await vehicleApi.put("/"+id+"/", data)
}


export const adminListVehicles = async () => {
    return await vehicleApi.get();
}