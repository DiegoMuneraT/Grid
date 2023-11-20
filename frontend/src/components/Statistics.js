import React, { useState } from 'react';
import Consumption from "components/grafics/battery/Consumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";
import BatteryPowerElectric from "components/grafics/battery/batteryPowerElectric";
import DriveTime from "components/grafics/battery/drivetime";
import BatteryTemperature from "components/grafics/battery/batteryTemperature";
import VehicleInfo from "components/VehicleInfo";
import BatteryState from "components/grafics/battery/batteryState";
import { UserVehicle } from '../context/CarContext'

const Statistics = () => {
    const [timeInterval, setTimeInterval] = useState('hour'); // Inicializar con 'days'

    const handleTimeIntervalChange = (newTimeInterval) => {
        setTimeInterval(newTimeInterval);
    };

    const { currentVehicle } = UserVehicle()

    const vehicleId = currentVehicle.placa

    return (
        <>
            <section className="clean-block clean-blog-list dark container">
                <div className="block-content" style={{ margin: '200px 0 28 20px' }}>
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

                    <div className="clean-block clean-blog-list dark" style={{padding: "20px", width: '100%'}}>
                        <div className='statistics-grid-col-2'>
                            <Consumption dataVehicle={vehicleId} />
                        </div>

                        <div className='statistics-grid'>
                            <div>
                                <DriveTime timeInterval={timeInterval} dataVehicle={vehicleId} />
                            </div>
                            <div>
                                <BatteryVoltage timeInterval={timeInterval} dataVehicle={vehicleId} />
                            </div>
                            <div>
                                <BatteryPowerElectric timeInterval={timeInterval} dataVehicle={vehicleId} />
                            </div>
                            <div>
                                <BatteryTemperature timeInterval={timeInterval} dataVehicle={vehicleId} />
                            </div>
                        </div>
                        <div className='statistics-grid-col-2' style={{marginTop: "20px"}}>
                            <BatteryState timeInterval={timeInterval} dataVehicle={vehicleId} />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );

}

export default Statistics;