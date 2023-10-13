import BatteryConsumption from "components/grafics/battery/batteryConsumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";

const Statistics = () => {
  return (
    <>
      <body style={{background: '#f9f9f9'}}>
        <h1 style={{ textAlign: "center"}}>Estadísticas</h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <BatteryConsumption />
          </div>
          <div style={{ flex: 1 }}>
            <BatteryVoltage />
          </div>
        </div>
      </body>

    </>
  );
};

export default Statistics;
