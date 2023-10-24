import axios from "axios";

//Direccion de la API
const operationApi = axios.create({
    baseURL:'http://localhost:8000/api/operation/'
})

//Creacion de datos
export const createOperation = async (newOperation) => {
    return await operationApi.post("/", newOperation)
}

//obtener Voltaje
export const getVoltageDataForVehicle = async (vehicleId) => {
  try {
    const response = await operationApi.get('/'); 
    const allData = response.data;

    // Filtrar los datos para obtener solo aquellos con el vehicle_id específico
    const filteredData = allData.filter(entry => entry.vehicle_id === vehicleId);

    const voltageData = filteredData.map(entry => ({
      timestamp: entry.timestamp,
      voltage: entry.voltage
    }));

    return voltageData;
  } catch (error) {
    throw error;
  }
};