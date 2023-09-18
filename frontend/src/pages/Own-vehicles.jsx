import { NavLink } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";

export default function OwnVehicles() {
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
                    <tr>
                      <td className="column">xxx</td>
                      <td className="column">xxx</td>
                      <td className="column">xxx</td>
                      </tr>
                  </tbody>
                </table>

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
