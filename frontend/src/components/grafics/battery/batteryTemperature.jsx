import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getTemperatureForVehicle } from "api/operationServer";

function calculateAveragedTemperatureData(data, interval) {
  const averagedData = [];
  const groupedData = groupDataByInterval(data, interval);

  groupedData.forEach((group) => {
    const averageTemperature = calculateAverageTemperature(group);
    averagedData.push({
      timestamp: group[0].timestamp,
      batt_temp: averageTemperature,
    });
  });

  return averagedData;
}

function groupDataByInterval(data, interval) {
  const groupedData = {};
  const intervalKeyFn = getIntervalKeyFunction(interval);

  data.forEach((entry) => {
    const intervalKey = intervalKeyFn(entry.timestamp);
    if (!groupedData[intervalKey]) {
      groupedData[intervalKey] = [];
    }
    groupedData[intervalKey].push(entry);
  });

  return Object.values(groupedData);
}

function getIntervalKeyFunction(interval) {
  if (interval === 'day') {
    return (timestamp) => {
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };
  } else if (interval === 'hour') {
    return (timestamp) => {
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}`;
    };
  } else if (interval === 'minute') {
    return (timestamp) => {
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    };
  }

  return (timestamp) => timestamp;
}

function calculateAverageTemperature(data) {
  const sum = data.reduce((acc, entry) => acc + entry.batt_temp, 0);
  return sum / data.length;
}

const BatteryTemperature = ({ timeInterval, dataVehicle }) => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(0);

  useEffect(() => {
    const vehicleId = dataVehicle;

    const fetchTemperatureData = async () => {
      try {
        const response = await getTemperatureForVehicle(vehicleId);

        if (response && response.length > 0) {
          const averagedTemperatureData = calculateAveragedTemperatureData(response, timeInterval);

          const currentTemperatureValue = response[response.length - 1].batt_temp;
          setCurrentTemperature(currentTemperatureValue);

          setTemperatureData(averagedTemperatureData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemperatureData();
  }, [dataVehicle, timeInterval]);

  const formattedLabels = temperatureData.map((entry) => {
    const timestamp = new Date(entry.timestamp);
    if (timeInterval === 'day') {
      return timestamp.toLocaleDateString();
    } else if (timeInterval === 'hour') {
      return timestamp.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    } else if (timeInterval === 'minute') {
      return timestamp.toLocaleTimeString();
    }
    return entry.timestamp;
  });

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Temperatura Histórica',
        data: temperatureData.map(entry => entry.batt_temp),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const yAxes = [
    {
      ticks: {
        min: 0,
        max: 60,
      },
      scaleLabel: {
        display: true,
        labelString: 'Temperatura (°C)', // Nombre del eje Y
      },
    },
  ];

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
      x: [
        {
          type: 'time',
          time: {
            unit: timeInterval,
            tooltipFormat: 'll HH:mm:ss',
          },
          scaleLabel: {
            display: true,
            labelString: 'Fecha y Hora de Registro',
          },
        },
      ],
    },
  };

  return (
    <div>
      <section className="clean-block clean-blog-list dark" style={{ margin: "10px", height: '450px', overflowY: 'hidden', padding: "10px 10px 10px 10px" }}>
        <div className="container">
          <div className="block-content" style={{ width: '500px', height: '480px', padding: "40px 20px 0px 20px" }}>
            <h2 style={{ textAlign: 'center' }}>Temperatura Histórica</h2>
            <p style={{ textAlign: 'center' }}>
              Esta gráfica muestra la temperatura promedio por {timeInterval === 'day' ? 'día' : timeInterval === 'hour' ? 'hora' : 'minuto'} de la batería del vehículo eléctrico a lo largo del tiempo.
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%', height: '250px', position: 'relative', top: '10%', left: '0%' }}>
                <Line data={data} options={options} />
              </div>
              <div style={{ width: '30%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgreen', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h6 style={{ margin: '0', padding: '0' }}>{currentTemperature}(°C) Temperatura actual</h6>
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
