import Consumption from "components/grafics/battery/Consumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";
import BatteryPowerElectric from "components/grafics/battery/batteryPowerElectric";
<<<<<<< HEAD
import DriveTime from "components/grafics/battery/DriveTime";
=======
import BatteryTemperature from "components/grafics/battery/batteryTemperature";
>>>>>>> eafd8a4543696f04c021ed0191bb2fa94223beeb
import NavBarApp from 'components/NavBarApp';

const Statistics = () => {
  return (
    <>
      <NavBarApp />
      <h1 style={{ textAlign: "center"}}>Estadísticas</h1>

<<<<<<< HEAD
        <div style={{ display: "grid", justifyContent: "space-between",gridTemplateColumns: "repeat(2, 1fr)"}}>
          <div style={{ flex: 1 }}>
            <Consumption/>
          </div>
          <div style={{ flex: 1 }}>
            <BatteryVoltage />
          </div>
          <div style={{ flex: 1 }}>
            <BatteryPowerElectric />
          </div>
          <div style={{ flex: 1 }}>
            <DriveTime />
          </div>
=======
      <div style={{ display: "grid", justifyContent: "space-between",gridTemplateColumns: "repeat(2, 1fr)"}}>
        <div style={{ flex: 1 }}>
          <BatteryConsumption />
>>>>>>> eafd8a4543696f04c021ed0191bb2fa94223beeb
        </div>
        <div style={{ flex: 1 }}>
          <BatteryVoltage />
        </div>
        <div style={{ flex: 1 }}>
          <BatteryPowerElectric />
        </div>
        <div style={{ flex: 1 }}>
          <BatteryTemperature />
        </div>
      </div>
    </>
  );
};

export default Statistics;
