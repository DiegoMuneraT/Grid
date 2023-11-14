import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getPowerDataForVehicle } from "api/operationServer"; 

const PowerElectric = ({dataVehicle}) => {
  const [powerData, setPowerData] = useState([]);
  const [currentPower, setCurrentPower] = useState(0);

  useEffect(() => {
    const vehicleId = dataVehicle; // Reemplazar con el ID del vehículo seleccionado

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
      <section className="clean-block clean-blog-list dark" style={{margin:"10px", height: '450px', overflowY: 'hidden', padding: "10px 10px 10px 10px" }}>
        <div className="container">
          <div className="block-content" style={{ width: '500px', height: '480px', padding:"40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Potencia Eléctrica Histórica</h2>
            <p style={{ textAlign: 'center' }}>
              Esta gráfica representa la evolución de la potencia eléctrica en kilovatios (kW) del vehículo eléctrico a lo largo del tiempo. 
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '250px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '30%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgreen', padding: '10px' }}>
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
