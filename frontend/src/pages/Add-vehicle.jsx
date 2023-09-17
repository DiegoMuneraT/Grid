import { Link } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";
import AddCar from "components/addVehicle/addVehicle";

export default function AddVehicle() {
  return (
    <body>
      <main className="page service-page" style={{background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden',}}>
        <NavBarApp/>
        
        <section className="clean-block clean-blog-list dark" style={{height: "100vh", overflowY: "hidden"}}>
            <div className="container">
              <div className="block-content" style={{margin: '80px 0 0 80px',}}>
                <form onSubmit={AddCar} style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
                    <div className="mb-3">
                        <label className="form-label" for="marca">
                        Marca
                        </label>
                        <input
                        className="form-control item"
                        type="marca"
                        name="marca"
                        data-bs-theme="light"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="modelo">
                        Modelo
                        </label>
                        <input
                        className="form-control item"
                        type="modelo"
                        name="modelo"
                        data-bs-theme="light"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="placa">
                        Placa
                        </label>
                        <input
                        className="form-control item"
                        type="placa"
                        name="placa"
                        data-bs-theme="light"
                        />
                    </div>
                    <div
                        className="align-items-center"
                        style={{
                        display: "flex",
                        margin: "20px 50px",
                        justifyContent: "space-between",
                        }}
                    >
                        <button
                        className="btn btn-primary"
                        type="submit"
                        style={{
                            background: "var(--bs-emphasis-color)",
                            borderColor: "var(--bs-emphasis-color)",
                            borderTopColor: "var(--bs-body-color)",
                        }}
                        >
                        Agregar Vehiculo
                        </button>

                        <Link to="/app/mis-vehiculos/"><button
                        className="btn btn-primary"
                        type="submit"
                        style={{
                            background: "var(--bs-blue)",
                            borderColor: "var(--bs-blue)",
                            borderTopColor: "var(--bs-blue)",
                        }}
                        >
                        Cancelar
                        </button></Link>
                        
                    </div>
                
                </form>

                </div>
                
            </div>
        </section>

      </main>
    </body>
  )
}

