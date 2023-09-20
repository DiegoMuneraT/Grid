import { NavLink } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";
import { useEffect, useState } from "react";
import * as vehicleServer from "api/vehicleServer";


const Table = ({ modelo, marca, placa }) => {
  return (
  <>
  <tbody>
    <th className="column">{marca}</th> 
    <th className="column">{modelo}</th>
    <th className="column">{placa}</th>
  </tbody>
  <br/>
  </>
  )
}

export default function OwnVehicles() {

  const [vehicles, setVehicles] = useState({});

  const listVehicles = async () => {
    try {
      const ans = await vehicleServer.listVehicles();
      const data = await ans.data

      setVehicles(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listVehicles();
  }, []);

  const carConstructor = () => {
    
    const keys = Object.keys(vehicles)
  
    if (keys.length === 0) {
      return <><br/><p style={{ justifyContent: 'left'}}>Servidor fuera de linea 😭 </p></>

    }

    const carElements = [];

    keys.forEach((key) => {
      carElements.push(
        <Table
          modelo={vehicles[key].modelo}
          marca={vehicles[key].marca}
          placa={vehicles[key].placa}
        />
      );
    });

    return carElements

  };


  return (
    <body>
      <main className="page service-page" style={{ background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden', }}>
        <NavBarApp />

        <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
          <div className="container">
            <div className="block-content table100" style={{ margin: '80px 0 0 80px', }}>
              <h1 style={{ textAlign: "center" }}>Mis Vehiculos</h1>
              <table>
                <thead>
                  <tr>
                    <th className="column">Marca</th>
                    <th className="column">Modelo</th>
                    <th className="column">Placa</th>
                  </tr>
                </thead>
                {carConstructor()}
              </table>
              <br />

              <NavLink className="nav-link py-3 border-bottom rounded-0" to='/app/mis-vehiculos/agregar-vehiculo/'>
                <button
                  className="btn btn-primary"
                  style={{
                    background: "var(--bs-emphasis-color)",
                    borderColor: "var(--bs-emphasis-color)",
                    borderTopColor: "var(--bs-body-color)",
                    marginTop: "20px",
                  }}>
                  Agregar un vehiculo
                </button>
              </NavLink>


            </div>
          </div>
        </section>

      </main>
    </body>
  )
}

