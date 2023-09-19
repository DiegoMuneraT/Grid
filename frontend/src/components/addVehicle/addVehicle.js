import * as vehicleServer from "components/vehicleServer"

export default async function AddCar(data){
    
    const res = await vehicleServer.createVehicle(data);
    console.log(res)
    
}