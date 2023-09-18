import React, { useEffect } from 'react';
import NavBarApp from '../components/NavBarApp';
import Chart from 'chart.js/auto';

export default function Statistics() {
    useEffect(() => {
        // Obtener el elemento canvas para la gráfica
        const ctx = document.getElementById('myChart').getContext('2d');
      
        // Destruir la instancia anterior de Chart.js (si existe)
        Chart.getChart(ctx)?.destroy();
      
        // Datos y configuración de la gráfica (puedes personalizar esto)
        const data = {
          labels: ['Marca A', 'Marca B', 'Marca C', 'Marca D'],
          datasets: [
            {
              label: 'Consumo',
              data: [10, 25, 15, 8],
              backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(54, 162, 235, 0.6)'],
            },
          ],
        };
      
        // Crear la nueva gráfica de barras
        new Chart(ctx, {
          type: 'bar',
          data: data,
        });
      }, []);

  return (
    <div>
      <NavBarApp />
      <section className="clean-block clean-blog-list dark" style={{ height: '100vh', overflowY: 'hidden' }}>
        <div className="container">
          <div className="block-content" style={{ margin: '80px 0 0 80px' }}>
            {/* Elemento canvas para la gráfica */}
            <div style={{ maxWidth: '400px', maxHeight: '400px' }}> {/* Ajusta el tamaño máximo */}
              <canvas id="myChart" width="400" height="400"></canvas>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

