import axios from "axios";

//Direccion de la API
const operationApi = axios.create({
    baseURL:'http://localhost:8000/api/operation/'
})

//Creacion de datos
export const createOperation = async (newOperation) => {
    return await operationApi.post("/", newOperation)
}

//Elegir un auto en especifico
const filterDataByVehicleId = (allData, vehicleId) => {
    return allData.filter(entry => entry.vehicle_id === vehicleId);
  };

//Obtener datos de Voltaje
export const getVoltageDataForVehicle = async (vehicleId) => {
    try {
      const response = await operationApi.get('/');
      const allData = response.data;
  
      const filteredData = filterDataByVehicleId(allData, vehicleId);
  
      const voltageData = filteredData.map(entry => ({
        timestamp: entry.timestamp,
        voltage: entry.voltage
      }));
  
      return voltageData;
    } catch (error) {
      throw error;
    }
  };
  
  // Obtener datos de potencia eléctrica
  export const getPowerDataForVehicle = async (vehicleId) => {
    try {
      const response = await operationApi.get('/');
      const allData = response.data;
  
      const filteredData = filterDataByVehicleId(allData, vehicleId);
  
      const powerElectricData = filteredData.map(entry => ({
        timestamp: entry.timestamp,
        power_kw: entry.power_kw
      }));
  
      return powerElectricData;
    } catch (error) {
      throw error;
    }
  };
 // Obtener datos de consumo
export const getConsumptionDataForVehicle = async (vehicleId) => {
  try {
    const response = await operationApi.get('/');
    const allData = response.data;

    const filteredData = filterDataByVehicleId(allData, vehicleId);

    const consumptionData = filteredData.map(entry => ({
      timestamp: entry.timestamp,
      consumption: entry.consumption
    }));

    return consumptionData;
  } catch (error) {
    throw error;
  }
};
 
// Obtener datos de tiempo de conducción
export const getDrivetimeDataForVehicle = async (vehicleId) => {
  try {
    const response = await operationApi.get('/');
    const allData = response.data;

    const filteredData = filterDataByVehicleId(allData, vehicleId);

    const drivetimeData = filteredData.map(entry => ({
      timestamp: entry.timestamp,
      drivetime: entry.drivetime
    }));

    return drivetimeData;
  } catch (error) {
    throw error;
  }
};
  
// Obtener datos de temperatura
export const getTemperatureForVehicle = async (vehicleId) => {
  try {
    const response = await operationApi.get('/');
    const allData = response.data;

    const filteredData = filterDataByVehicleId(allData, vehicleId);

    const temperatureData = filteredData.map(entry => ({
      timestamp: entry.timestamp,
      batt_temp: entry.batt_temp
    }));

    return temperatureData;
  } catch (error) {
    throw error;
  }
};

// Obtener datos del Eatdo de Carga
export const getStateOfChargeForVehicle = async (vehicleId) => {
  try {
    const response = await operationApi.get('/');
    const allData = response.data;

    const filteredData = filterDataByVehicleId(allData, vehicleId);

    const ChargeData = filteredData.map(entry => ({
      timestamp: entry.timestamp,
      soc: entry.soc
    }));

    return ChargeData;
  } catch (error) {
    throw error;
  }
};