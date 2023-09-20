import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "context/AuthContext";
import { useState } from "react";

import NavBarApp from "../components/NavBarApp";
import * as vehicleServer from "api/vehicleServer";


export default function AddVehicle() {
  const { user } = UserAuth();

  const userid = user.uid;

  const navigate = useNavigate();

  const [data, setData] = useState({
    modelo: '',
    marca: '',
    placa: '',
    usuario: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
      usuario: userid,
    });
    console.log(data)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      await vehicleServer.createVehicle(data);
      navigate('/app/mis-vehiculos/')

    }catch(error){
      console.log(error);
    }
  }

  return (
    <body>
      <main className="page service-page" style={{ background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden', }}>
        <NavBarApp />

        <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
          <div className="container">
            <div className="block-content" style={{ margin: '80px 0 0 80px', }}>
              <form style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
                <div className="mb-3">
                  <label className="form-label">
                    Marca <b>*</b> 
                  </label>
                  <input
                    className="form-control item"
                    name="marca"
                    value={data.marca}
                    required
                    onChange={handleInputChange}
                    data-bs-theme="light"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Modelo <b>*</b>
                  </label>
                  <input
                    className="form-control item"
                    type="number"
                    name="modelo"
                    required
                    value={data.modelo}
                    onChange={handleInputChange}
                    data-bs-theme="light"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Placa <b>*</b>
                  </label>
                  <input
                    className="form-control item"
                    name="placa"
                    required
                    value={data.placa}
                    onChange={handleInputChange}
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
                    onClick={handleSubmit}
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

