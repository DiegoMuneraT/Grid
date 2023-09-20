import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const BatteryVoltage = () => {

    const [currentVoltage, setCurrentVoltage] = useState(220); // Valor que cambia

    useEffect(() => {
      const fetchCurrentVoltage = () => {
        // Aquí se realiza una solicitudo para obtener el valor actual del voltaje.
        // Por ahora, lo simulamos con un valor fijo.
        setCurrentVoltage(220); //Valor que cambia
      };

      fetchCurrentVoltage();
    }, []);
  
    const data = {
        labels: ['Voltaje Actual', 'Voltaje Restante'],
        datasets: [
          {
            data: [currentVoltage, 240 - currentVoltage],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 0,
          },
        ],
    };
      
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
    };
      
  
    return (
      <div>
        <section className="clean-block clean-blog-list dark" style={{ height: '100vh', overflowY: 'hidden' }}>
          <div className="container">
            <div className="block-content" style={{ margin: '80px 0 0 80px',  width: '650px', height: '600px' }}>
              <h2 style={{ textAlign: 'center' }}>Voltaje Actual</h2>
              {/* Contenedor de la gráfica */}
              <div style={{ width: '300px', height: '300px', position: 'relative', top: '15%', left: '20%'}}>
                {/* Componente Pie de react-chartjs-2 */}
                <Pie data={data} options={options} />
                {/* Mostrar el valor actual de voltaje en el centro */}
                <div style={{ position: 'absolute', top: '50%', left: '35%'}}>
                <h2>{currentVoltage} V</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default BatteryVoltage;

