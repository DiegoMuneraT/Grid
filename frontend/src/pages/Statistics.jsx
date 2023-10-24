import BatteryConsumption from "components/grafics/battery/batteryConsumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";
import BatteryPowerElectric from "components/grafics/battery/batteryPowerElectric";
import NavBarApp from 'components/NavBarApp';

const Statistics = () => {
  return (
    <>
        <NavBarApp />
        <h1 style={{ textAlign: "center"}}>Estadísticas</h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <BatteryConsumption />
          </div>
          <div style={{ flex: 1 }}>
            <BatteryVoltage />
          </div>
          <div style={{ flex: 1 }}>
            <BatteryPowerElectric />
          </div>
        </div>
    </>
  );
};

export default Statistics;
