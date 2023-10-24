import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { getConsumptionDataForVehicle } from "api/operationServer";

function calculateHourlyAverage(consumptionData) {
  const hourlyAverages = new Array(24).fill(0);
  const hourlyCounts = new Array(24).fill(0);

  consumptionData.forEach(entry => {
    const timestamp = new Date(entry.timestamp);
    const hour = timestamp.getHours();
    hourlyAverages[hour] += entry.consumption;
    hourlyCounts[hour]++;
  });

  for (let i = 0; i < hourlyAverages.length; i++) {
    if (hourlyCounts[i] > 0) {
      hourlyAverages[i] /= hourlyCounts[i];
    }
  }

  return hourlyAverages;
}

function Consumption() {
  const [loading, setLoading] = useState(true);
  const totalConsumptionRef = useRef(0);

  useEffect(() => {
    const vehicleId = 'FXR906';
    getConsumptionDataForVehicle(vehicleId)
      .then(consumptionData => {
        const hourlyAverages = calculateHourlyAverage(consumptionData);

        // Calcular la suma del consumo promedio de todas las horas
        const totalConsumption = hourlyAverages.reduce((acc, avg) => acc + avg, 0);
        totalConsumptionRef.current = totalConsumption;

        const ctx = document.getElementById('myChart').getContext('2d');

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
            datasets: [{
              label: 'Consumo Promedio por Hora',
              data: hourlyAverages,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }],
          },
          options: {
            scales: {
              x: {
                type: 'category',
                labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="clean-block clean-blog-list dark" style={{ height: '100vh', overflowY: 'hidden' }}>
        <div className="container">
          <div className="block-content" style={{ margin: '80px 0 0 80px', width: '650px', height: '600px' }}>
            <h2 style={{ textAlign: 'center' }}>Consumo Horario Histórico</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '80%', height: '300px', position: 'relative', top: '10%', left: '0%' }}>
                <canvas id="myChart" width="400" height="200"></canvas>
              </div>
              <div style={{ width: '20%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'lightgray', padding: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h6 style={{ margin: '0', padding: '0' }}>
                    {loading ? 'Cargando...' : `${totalConsumptionRef.current.toFixed(2)} Promedio de consumo (Wh)`}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Consumption;
