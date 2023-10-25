import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getPowerDataForVehicle } from "api/operationServer"; 

const PowerElectric = () => {
  const [powerData, setPowerData] = useState([]);
  const [currentPower, setCurrentPower] = useState(0);

  useEffect(() => {
    const vehicleId = "FXR906"; // Reemplazar con el ID del vehículo seleccionado

    const fetchPowerData = async () => {
      try {
        const data = await getPowerDataForVehicle(vehicleId); 

        if (data && data.length > 0) {
          const lastPowerReading = data[data.length - 1].power_kw; 
          setCurrentPower(lastPowerReading);

          const historicalData = data.map(entry => ({
            x: entry.timestamp,
            y: entry.power_kw
          }));

          setPowerData(historicalData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPowerData();
  }, []);

  const data = {
    labels: powerData.map(entry => entry.x),
    datasets: [
      {
        label: 'Potencia Eléctrica Histórico',
        data: powerData.map(entry => entry.y),
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

  return (
    <div>
      <section className="clean-block clean-blog-list dark" style={{ height: '100vh', overflowY: 'hidden' }}>
        <div className="container">
          <div className="block-content" style={{ margin: '80px 0 0 80px', width: '650px', height: '600px' }}>
            <h2 style={{ textAlign: 'center' }}>Potencia Eléctrica Histórica</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '80%', height: '300px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '20%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgray', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h6 style={{ margin: '0', padding: '0' }}>{currentPower}(Kw) Potencia actual</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerElectric;
