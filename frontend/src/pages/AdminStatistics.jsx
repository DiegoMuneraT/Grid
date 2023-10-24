import BatteryConsumption from "components/grafics/battery/batteryConsumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";
import BatteryPowerElectric from "components/grafics/battery/batteryPowerElectric";
import BatteryTemperature from "components/grafics/battery/batteryTemperature";
import NavBarAdmin from "components/NavBarAdmin";

const Statistics = () => {
  return (
    <>
      <NavBarAdmin />
      
      <h1 style={{ textAlign: "center"}}>Estadísticas</h1>
      <div style={{ display: "grid", justifyContent: "space-between",gridTemplateColumns: "repeat(2, 1fr)"}}>
        <div style={{ flex: 1 }}>
          <BatteryConsumption />
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