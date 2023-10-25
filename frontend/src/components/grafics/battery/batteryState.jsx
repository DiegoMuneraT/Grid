import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getVoltageDataForVehicle, getPowerDataForVehicle } from "api/operationServer";

const BatteryState = () => {
  const [chargeData, setChargeData] = useState([]);
  const [currentCharge, setCurrentCharge] = useState(0);

  useEffect(() => {
    const vehicleId = "FXR906"; // Reemplazar con el ID del vehículo seleccionado

    const fetchChargeData = async () => {
      try {
        const voltageData = await getVoltageDataForVehicle(vehicleId);
        const powerData = await getPowerDataForVehicle(vehicleId);

        if (voltageData && voltageData.length > 0 && powerData && powerData.length > 0) {
          // Suponiendo que la carga actual se puede calcular utilizando la fórmula I = P/V
          const lastVoltageReading = voltageData[voltageData.length - 1].voltage;
          const lastPowerReading = powerData[powerData.length - 1].power_kw;
          const calculatedCharge = lastPowerReading / lastVoltageReading;

          setCurrentCharge(calculatedCharge);

          const historicalData = voltageData.map((entry, index) => ({
            x: entry.timestamp,
            y: powerData[index]?.power_kw / entry.voltage  // Asegurarse de que powerData y voltageData tengan la misma longitud
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
          <div className="block-content" style={{width: '500px', height: '400px', padding:"40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Carga Histórica de la Batería</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '300px', position: 'relative', top: '10%', left: '0%' }}>
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
