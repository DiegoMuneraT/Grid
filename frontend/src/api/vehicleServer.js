import axios from "axios";

//Direccion de la API
const vehicleApi = axios.create({
    baseURL: 'http://localhost:8000/api/vehicle' //'https://grid-api-r3rjzt6gwa-uc.a.run.app/api/vehicle'
})

//Obtencion de vehiculos
export const listVehicles = async (usuario) => {
    return await vehicleApi.get("/?usuario="+usuario+'&activo=true');
}

// obtener un vehiculo segun su id
export const getVehicle = async (id) => {
    return await vehicleApi.get("/"+id);
}

export const adminListVehicles = async (usuario) => {
    return await vehicleApi.get("/?admin="+usuario);
}

export const adminListVehiclesFiltro = async (usuario, activo) => {
    return await vehicleApi.get("/?admin="+usuario+'&activo='+activo);
}



//Creacion de vehiculos
export const createVehicle = async (newVehicle) => {
    const query = await vehicleApi.get("/")
    
    const data = query.data

    for(let i = 0; i < data.length; i++){
        
        if(data[i].placa === newVehicle.placa){
            if(data[i].activo === false){
                data[i].activo = true
                data[i].usuario = newVehicle.usuario
                if (data[i].admin === ""){
                    delete data[i].admin
                }
                
                return await vehicleApi.put("/"+data[i].id+"/", data[i])
            } else {
                return;
            }
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


