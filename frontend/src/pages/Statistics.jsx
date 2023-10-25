import Consumption from "components/grafics/battery/Consumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";
import BatteryPowerElectric from "components/grafics/battery/batteryPowerElectric";
import DriveTime from "components/grafics/battery/drivetime";
import NavBarApp from 'components/NavBarApp';

const Statistics = () => {
  return (
    <>
        <NavBarApp />
        <h1 style={{ textAlign: "center"}}>Estadísticas</h1>

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
        </div>
    </>
  );
};

export default Statistics;
