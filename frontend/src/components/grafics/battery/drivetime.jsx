import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getDrivetimeDataForVehicle } from "api/operationServer";

function calculateAveragedData(data, interval) {
  const averagedData = [];
  const groupedData = groupDataByInterval(data, interval);

  groupedData.forEach((group) => {
    const averageDrivetime = calculateAverage(group);
    averagedData.push({
      timestamp: group[0].timestamp,
      drivetime: averageDrivetime,
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

function calculateAverage(data) {
  const sum = data.reduce((acc, entry) => acc + entry.drivetime, 0);
  return sum / data.length;
}

const Drivetime = ({ timeInterval, dataVehicle }) => {
  const [drivetimeData, setDrivetimeData] = useState([]);
  const [currentDrivetime, setCurrentDrivetime] = useState(0);

  useEffect(() => {
    const vehicleId = dataVehicle;

    const fetchDrivetimeData = async () => {
      try {
        const response = await getDrivetimeDataForVehicle(vehicleId);

        if (response && response.length > 0) {
          const averagedData = calculateAveragedData(response, timeInterval);

          const currentDrivetime = response[response.length - 1].drivetime;
          setCurrentDrivetime(currentDrivetime);

          setDrivetimeData(averagedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDrivetimeData();
  }, [dataVehicle, timeInterval]);

  const formattedLabels = drivetimeData.map((entry) => {
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

  const currentDrivetimeInMinutes = currentDrivetime / 60;

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Tiempo de Manejo Histórico',
        data: drivetimeData.map((entry) => entry.drivetime),
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
        labelString: 'Minutos', // Nombre del eje Y
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
