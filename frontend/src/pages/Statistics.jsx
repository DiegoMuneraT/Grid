import Consumption from "components/grafics/battery/Consumption";
import BatteryVoltage from "components/grafics/battery/batteryVoltage";
import BatteryPowerElectric from "components/grafics/battery/batteryPowerElectric";
import DriveTime from "components/grafics/battery/drivetime";
import BatteryTemperature from "components/grafics/battery/batteryTemperature"
import NavBarApp from 'components/NavBarApp';
import VehicleInfo from "components/VehicleInfo";
import BatteryState from "components/grafics/battery/BatteryState";

const Statistics = () => {
  return (
    <>
        <NavBarApp />
        <section className="clean-block clean-blog-list dark" style={{ height: "100%", overflowY: "hidden" }}>
        <div className="container">
          <div className="block-content table100" style={{ margin: '20px 0 0 20px', }}>
            <h1 style={{ textAlign: "center" }}>Estadísticas</h1>
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
              <VehicleInfo data="vehiculo"/>
              <VehicleInfo data="placa"/>
            </div>

                <div style={{ height: "500px", margin: "10px 0 0 10px"}}>
                  <Consumption/>
                </div>
                <div style={{display: "flex"}}> 
                  <div style={{ height: "450px", margin: "50px 0 0 0px"}}>
                    <DriveTime />
                  </div>
                  <div style={{ height: "450px", margin: "50px 0 0 0px"}}>
                    <BatteryVoltage />
                  </div>
                </div>
                <div style={{display: "flex"}}>
                  <div style={{ height: "450px", margin: "0px 0 0 0px"}}>
                    <BatteryPowerElectric />
                  </div>
                  <div style={{ height: "450px", margin: "0px 0 0 0px"}}>
                    <BatteryTemperature />
                  </div>
                </div>
                <div style={{display: "flex"}}>
                <div style={{ height: "450px", margin: "0px 0 0 0px"}}>
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
