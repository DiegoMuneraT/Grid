import React, { useEffect } from 'react';
import NavBarApp from 'components/NavBarApp';
import Chart from 'chart.js/auto';

const BatteryConsumption = () => {

    useEffect(() => {
  
      const ctx = document.getElementById('batteryChart').getContext('2d');
  
      Chart.getChart(ctx)?.destroy();
      // Datos de consumo de batería por horas (esto debe ser personalizado)
      const hourlyData = [2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 19, 17, 16, 14, 12, 10, 8, 7, 5, 4];
  
      // Horas del día (etiquetas para el eje X)
      const hoursOfDay = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  
      // Datos para la gráfica
      const data = {
        labels: hoursOfDay,
        datasets: [
          {
            label: 'Consumo de Batería (kWh)',
            data: hourlyData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
          },
        ],
      };
  
      const config = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Horas del Día',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Consumo de Batería (kWh)',
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
          responsive: true,
          maintainAspectRatio: false, // Permite ajustar el tamaño de la gráfica
          animation: {
            duration: 1000, // Duración de la animación
            easing: 'easeInOutQuart', // Tipo de animación
          },
        },
      };
      // Crear la gráfica de barras 
      new Chart(ctx, config);
    }, []);
  
    return (
      <div>
        <NavBarApp />
        <section className="clean-block clean-blog-list dark" style={{ height: '100vh', overflowY: 'hidden' }}>
          <div className="container">
            <div className="block-content" style={{ margin: '80px 0 0 80px' }}>
            <h1 style={{textAlign: "center"}}>Estadisticas</h1>
              {/* Contenedor de la gráfica */}
              <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
                {/* Elemento canvas para la gráfica */}
                <canvas id="batteryChart" width="800" height="700"></canvas>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default BatteryConsumption;