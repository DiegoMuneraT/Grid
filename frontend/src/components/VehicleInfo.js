//@react
import React from 'react'
//@context
import { UserVehicle } from '../context/CarContext'

const VehicleInfo = (data) => {
    const { currentVehicle } = UserVehicle()

    if (!currentVehicle || Object.keys(currentVehicle).length === 0){
        console.log('Cargando vehiculo... ', currentVehicle)
        return <div>Loading...</div>;

    }

    const dataType = data.data

    if (dataType === "vehiculo") {
      return (
        <p
          style={{
            marginBottom: "0px",
            opacity: "1",
          }}
        >
          <strong>Vehiculo:</strong> {currentVehicle.marca}
        </p>
      );
    }    

    if (dataType === "placa") {
      return (
        <p
          style={{
            marginBottom: "0px",
            opacity: "1",
          }}
        >
          <strong>Placa:</strong> {currentVehicle.placa}
        </p>
      );
    }
}

export default VehicleInfo;