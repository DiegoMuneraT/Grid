import axios from "axios";

//Direccion de la API
const vehicleApi = axios.create({
    baseURL:'http://localhost:8000/api/vehicle/'
})

//Obtencion de vehiculos
export const listVehicles = async (usuario) => {
    return await vehicleApi.get("/?usuario="+usuario+'&activo=true');
}

export const adminListVehicles = async (usuario) => {
    return await vehicleApi.get("/?admin="+usuario);
}

//Creacion de vehiculos
export const createVehicle = async (newVehicle) => {
    const query = await vehicleApi.get("/")

    const data = query.data

    for(let i = 0; i < data.length; i++){
        
        if(data[i].placa === newVehicle.placa){
          return;
        }
      
    }

    return await vehicleApi.post("/", newVehicle)
}

export const AdminCreateVehicle = async (newVehicle) => {

    const query = await vehicleApi.get("/")

    const data = query.data

    console.log(data)

    for(let i = 0; i < data.length; i++){
        
        if(data[i].placa === newVehicle.placa){

            if (data[i].admin === ''){

                const vehicle = data[i]

                vehicle.admin = newVehicle.admin

                await vehicleApi.put("/"+vehicle.id+"/", vehicle)

                return 200

            } else {
                return 409
            }

        }
      
    }

    return

}


//Modificacion de vehiculos
export const modifyVehicle = async (id, data) => {
    return await vehicleApi.put("/"+id+"/", data)
}


