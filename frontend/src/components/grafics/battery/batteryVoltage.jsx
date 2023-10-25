import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getVoltageDataForVehicle } from "api/operationServer"; 

const BatteryVoltage = () => {
  const [voltageData, setVoltageData] = useState([]);
  const [currentVoltage, setCurrentVoltage] = useState(0); 

  useEffect(() => {
    const vehicleId = "FXR906"; // Reemplazar con el ID del vehículo seleccionado

    const fetchVoltageData = async () => {
      try {
        const data = await getVoltageDataForVehicle(vehicleId);

        if (data && data.length > 0) {
          const lastVoltageReading = data[data.length - 1].voltage;
          setCurrentVoltage(lastVoltageReading);

          const historicalData = data.map(entry => ({
            x: entry.timestamp,
            y: entry.voltage
          }));

          setVoltageData(historicalData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVoltageData();
  }, []);

  const voltageValues = voltageData.map(entry => entry.y);

  const data = {
    labels: voltageData.map(entry => entry.x),
    datasets: [
      {
        label: 'Voltaje Histórico',
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
    scaleLabel: {
      display: true,
      labelString: 'Kilovatios (kw)', // Nombre del eje Y
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
      x: [{
        scaleLabel: {
          display: true,
          labelString: 'Fecha y Hora de Registro', // Nombre del eje X
        },
      }],
    },
  };
  
  return (
    <div>
      <section className="clean-block clean-blog-list dark" style={{margin:"8px", height: '100vh', overflowY: 'hidden', padding: "10px 10px 10px 10px" }}>
        <div className="container">
          <div className="block-content" style={{ width: '500px', height: '400px', padding:"40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Voltaje Histórico</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '300px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '30%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgreen', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h5 style={{ margin: '0', padding: '0' }}>{currentVoltage}(V) Voltaje actual</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );  
};

export default BatteryVoltage;
