import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getVoltageDataForVehicle } from "api/operationServer";

const BatteryVoltage = ({timeInterval, dataVehicle}) => {
  const [voltageData, setVoltageData] = useState([]);
  const [currentVoltage, setCurrentVoltage] = useState(0);

  useEffect(() => {
    const vehicleId = dataVehicle; // Reemplazar con el ID del vehículo seleccionado
    
    const fetchVoltageData = async () => {
      try {
        const response = await getVoltageDataForVehicle(vehicleId);

        if (response && response.length > 0) {
          const currentVoltage = response[response.length - 1].voltage;
          setCurrentVoltage(currentVoltage);

          const historicalData = response.map(entry => ({
            x: timestampToLabel(entry.timestamp, timeInterval),
            y: entry.voltage,
          }));

          setVoltageData(historicalData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVoltageData();
  }, [timeInterval]);

  const timestampToLabel = (timestamp, interval) => {
    const date = new Date(timestamp);

    if (interval === 'day') {
      return date.toLocaleDateString();
    } else if (interval === 'hour') {
      return date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
    } else if (interval === 'minute') {
      return date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    return timestamp;
  };

  const data = {
    labels: voltageData.map(entry => entry.x),
    datasets: [
      {
        label: 'Voltaje Histórico',
        data: voltageData.map(entry => entry.y),
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
        type: 'time', // Configura el tipo de escala como tiempo
        time: {
          unit: timeInterval, // Utiliza el valor de timeInterval como unidad de tiempo
        },
        scaleLabel: {
          display: true,
          labelString: 'Fecha y Hora de Registro', // Obtén el nombre del eje X según el filtro seleccionado
        },
      }],
    },
  };

  return (
    <div>
      <section className="clean-block clean-blog-list dark" style={{ margin: "8px", height: '100vh', overflowY: 'hidden', padding: "10px 10px 10px 10px" }}>
        <div className="container">
          <div className="block-content" style={{ width: '500px', height: '480px', padding: "40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Voltaje Histórico</h2>
            <p style={{ textAlign: 'center' }}>
              Esta gráfica muestra la evolución histórica del voltaje de la batería del vehículo eléctrico en voltios (V).
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '275px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '30%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgreen', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h5 style={{ margin: '0', padding: '0' }}>
                    {`${currentVoltage} (V) Voltaje actual`}
                  </h5>
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
