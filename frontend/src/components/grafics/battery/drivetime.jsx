import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getDrivetimeDataForVehicle } from "api/operationServer"; 

const Drivetime = () => {
  const [drivetimeData, setDrivetimeData] = useState([]);
  const [currentDrivetime, setCurrentDrivetime] = useState(0);

  useEffect(() => {
    const vehicleId = "FXR906"; // Reemplazar con el ID del vehículo seleccionado

    const fetchDrivetimeData = async () => {
      try {
        const data = await getDrivetimeDataForVehicle(vehicleId); 

        if (data && data.length > 0) {
          const lastDrivetimeReading = data[data.length - 1].drivetime; 
          setCurrentDrivetime(lastDrivetimeReading);

          const historicalData = data.map(entry => ({
            x: entry.timestamp,
            y: entry.drivetime
          }));

          setDrivetimeData(historicalData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDrivetimeData();
  }, []);

  const data = {
    labels: drivetimeData.map(entry => entry.x),
    datasets: [
      {
        label: 'Tiempo de Manejo Histórico',
        data: drivetimeData.map(entry => entry.y),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  const currentDrivetimeInMinutes = currentDrivetime / 60

  return (
    <div>
      <section className="clean-block clean-blog-list dark" style={{margin:"10px",height: '100vh', overflowY: 'hidden', padding: "10px 10px 10px 10px" }}>
        <div className="container">
          <div className="block-content" style={{width: '500px', height: '480px', padding:"40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Tiempo de Manejo Histórico</h2>
            <p style={{ textAlign: 'center' }}>
              Esta gráfica muestra el historial del tiempo de manejo del vehículo. El eje X representa el tiempo, mientras que el eje Y muestra la duración del tiempo de manejo.
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '250px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '30%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgreen', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h6 style={{ margin: '0', padding: '0' }}>{currentDrivetimeInMinutes.toFixed(2)}(Min) Tiempo de Manejo actual</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Drivetime;
