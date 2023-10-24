import React from 'react'
import { UserVehicle } from '../context/CarContext'

const VehicleInfo = () => {
    const { currentVehicle } = UserVehicle()

    if (!currentVehicle || Object.keys(currentVehicle).length === 0){
        console.log('Vehiculo: ', currentVehicle)
        return <div>Loading...</div>;

    }

    console.log(currentVehicle)
    return (
        <div>
            <h2>Vehicle Info</h2>
            <p>Placa: {currentVehicle.placa}</p>
            <p>Modelo: {currentVehicle.modelo}</p>
        </div>
    )
}

export default VehicleInfo;