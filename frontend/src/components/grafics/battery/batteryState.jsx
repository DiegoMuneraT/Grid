import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getStateOfChargeForVehicle } from "api/operationServer";

const BatteryState = () => {
  const [chargeData, setChargeData] = useState([]);
  const [currentCharge, setCurrentCharge] = useState(0);

  useEffect(() => {
    const vehicleId = "FXR906"; // Reemplazar con el ID del vehículo seleccionado

    const fetchChargeData = async () => {
      try {
        const data = await getStateOfChargeForVehicle(vehicleId);

        if (data && data.length > 0) {
          const lastChargeReading = data[data.length - 1].soc;
          setCurrentCharge(lastChargeReading);

          const historicalData = data.map(entry => ({
            x: entry.timestamp,
            y: entry.soc
          }));

          setChargeData(historicalData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchChargeData();
  }, []);

  const chargeValues = chargeData.map(entry => entry.y);

  const data = {
    labels: chargeData.map(entry => entry.x),
    datasets: [
      {
        label: 'Carga Actual',
        data: chargeValues,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const yAxes = [{
    ticks: {
      min: 0,
      max: 100,  // Suponiendo que el SOC máximo es 100%
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
          <div className="block-content" style={{width: '500px', height: '480px', padding:"40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Carga Histórica de la Batería</h2>
            <p style={{ textAlign: 'center' }}>
              Esta gráfica muestra la evolución histórica del estado de carga de la batería del vehículo eléctrico en porcentaje(%).
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '250px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '20%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgreen', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h6 style={{fontSize: "12px", margin: '0', padding: '0' }}>{currentCharge.toFixed(2)}(%) Carga Actual</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteryState;
