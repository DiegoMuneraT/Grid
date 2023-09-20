import { NavLink } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";
import { useEffect, useState } from "react";
import * as vehicleServer from "api/vehicleServer";

export default function OwnVehicles() {

  const initial = [{
    marca: 'Mercedes',
    modelo: '2020',
    placa: 'ABC123'

  }];

  const [vehicles, setVehicles] = useState(initial);

  const listVehicles = async () => {
    try{
      const ans = await vehicleServer.listVehicles();
      console.log(ans);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    listVehicles();
  }, []);

  return (
    <body>
      <main className="page service-page" style={{background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden',}}>
        <NavBarApp/>
        
        <section className="clean-block clean-blog-list dark" style={{height: "100vh", overflowY: "hidden"}}>
            <div className="container">
              <div className="block-content table100" style={{margin: '80px 0 0 80px',}}>
                <h1 style={{textAlign: "center"}}>Mis Vehiculos</h1>
                <table>
                  <thead>
                    <tr>
                      <th className="column">Marca</th>
                      <th className="column">Modelo</th>
                      <th className="column">Placa</th>
                    </tr>
                  </thead>
                  <tbody>
                      {vehicles.map((vehicle) => (
                        <tr>
                          <td className="column" style={{color: "var(--bs-black)"}}>{vehicle.marca}</td>
                          <td className="column" style={{color: "var(--bs-black)"}}>{vehicle.modelo}</td>
                          <td className="column" style={{color: "var(--bs-black)"}}>{vehicle.placa}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <br/>

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

