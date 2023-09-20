import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserAuth } from "context/AuthContext";
import { useState } from "react";

import NavBarApp from "../components/NavBarApp";
import AddCar from "components/addVehicle/addVehicle";


export default function AddVehicle() {
  const { user } = UserAuth();

  const userid = user.uid;

  const [data, setData] = useState({
    modelo: '',
    marca: '',
    placa: '',
    id: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
      id: userid,
    });
    console.log(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    AddCar(data)
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
                    type="marca"
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
                    type="modelo"
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
                    type="placa"
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

