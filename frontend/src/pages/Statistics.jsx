import React, {useState} from 'react';
import Consumption from "components/grafics/battery/Consumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";
import BatteryPowerElectric from "components/grafics/battery/batteryPowerElectric";
import DriveTime from "components/grafics/battery/drivetime";
import BatteryTemperature from "components/grafics/battery/batteryTemperature";
import NavBarApp from 'components/NavBarApp';
import VehicleInfo from "components/VehicleInfo";
import BatteryState from "components/grafics/battery/batteryState";

const Statistics = () => {
  const [timeInterval, setTimeInterval] = useState('hour'); // Inicializar con 'days'

  const handleTimeIntervalChange = (newTimeInterval) => {
    setTimeInterval(newTimeInterval);
  };

  return (
    <>
      <NavBarApp />
      <section className="clean-block clean-blog-list dark" style={{ height: "100%", overflowY: "hidden" }}>
        <div className="container">
          <div className="block-content table100" style={{ margin: '200px 0 28 20px' }}>
            <h1 style={{ textAlign: "center" }}>Estadísticas</h1>
            <h5 style={{ textAlign: "center" }}>Seleccione la escala de tiempo en la que desea visualizar las gráficas</h5>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '20px',
            }}>
              <div style={{ margin: '0 10px' }}>
                <input
                  type="radio"
                  id="day"
                  name="timeInterval"
                  value="day"
                  checked={timeInterval === 'day'}
                  onChange={() => handleTimeIntervalChange('day')}
                />
                <label htmlFor="day">Días</label>
              </div>
              <div style={{ margin: '0 10px' }}>
                <input
                  type="radio"
                  id="hour"
                  name="timeInterval"
                  value="hour"
                  checked={timeInterval === 'hour'}
                  onChange={() => handleTimeIntervalChange('hour')}
                />
                <label htmlFor="hour">Horas</label>
              </div>
              <div style={{ margin: '0 10px' }}>
                <input
                  type="radio"
                  id="minute"
                  name="timeInterval"
                  value="minute"
                  checked={timeInterval === 'minute'}
                  onChange={() => handleTimeIntervalChange('minute')}
                />
                <label htmlFor="minute">Minutos</label>
              </div>
            </div>
            <div style={{
              margin: "20px",
              position: "relative",
              right: "0",
              width: "15rem",
              height: "5rem",
              backdropFilter: "opacity(1) blur(0px)",
              opacity: "1",
              padding: "15px",
              background: "white",
              color: "black",
              zIndex: '2',
            }}>
              <VehicleInfo data="vehiculo" />
              <VehicleInfo data="placa" />
            </div>

            <div style={{ height: "500px", margin: "10px 0 0 10px" }}>
              <Consumption />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ height: "450px", margin: "50px 0 0 0px" }}>
                <DriveTime />
              </div>
              <div style={{ height: "450px", margin: "50px 0 0 0px" }}>
                <BatteryVoltage />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ height: "450px", margin: "0px 0 0 0px" }}>
                <BatteryPowerElectric />
              </div>
              <div style={{ height: "450px", margin: "0px 0 0 0px" }}>
                <BatteryTemperature />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ height: "450px", margin: "0px 0 0 0px" }}>
                <BatteryState />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
