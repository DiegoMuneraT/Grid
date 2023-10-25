import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getTemperatureForVehicle} from "api/operationServer"; 

const BatteryTemperature = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(0); 

  useEffect(() => {
    const vehicleId = "FXR906"; // Reemplazar con el ID del vehículo seleccionado

    const fetchVoltageData = async () => {
      try {
        const data = await getTemperatureForVehicle(vehicleId);

        if (data && data.length > 0) {
          const lastTemperatureReading = data[data.length - 1].batt_temp;
          setCurrentTemperature(lastTemperatureReading);

          const historicalData = data.map(entry => ({
            x: entry.timestamp,
            y: entry.batt_temp
          }));

          setTemperatureData(historicalData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVoltageData();
  }, []);

  const voltageValues = temperatureData.map(entry => entry.y);

  const data = {
    labels: temperatureData.map(entry => entry.x),
    datasets: [
      {
        label: 'Temperatura',
        data: voltageValues,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const yAxes = [{
    ticks: {
      min: 0,
      max: 60,
    },
  }];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: yAxes,
    },
  };

  return (
    <div>
      <section className="clean-block clean-blog-list dark" style={{margin:"8px", height: '450px', overflowY: 'hidden', padding: "10px 10px 10px 10px" }}>
        <div className="container">
          <div className="block-content" style={{width: '500px', height: '400px', padding:"40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Temperatura Histórica</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '300px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '20%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgreen', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h6 style={{fontSize: "12px", margin: '0', padding: '0' }}>{currentTemperature}(°C) Temperatura</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteryTemperature;