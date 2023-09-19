import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserAuth } from "context/AuthContext";
import { useState } from "react";

import NavBarApp from "../components/NavBarApp";
import AddCar from "components/addVehicle/addVehicle";


export default function AddVehicle() {

  const { user } = UserAuth();

  const [datos, setData] = useState()

  const getUser = () => user.uid

  const { register, handleSubmit, formState: {
    errors
  } } = useForm()

  const onSubmit = handleSubmit(data => {
    
    setData({ ...data, id: getUser() })
    AddCar(datos)
    
  })



  return (
    <body>
      <main className="page service-page" style={{ background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden', }}>
        <NavBarApp />

        <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
          <div className="container">
            <div className="block-content" style={{ margin: '80px 0 0 80px', }}>
              <form onSubmit={onSubmit} style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
                <div className="mb-3">
                  <label className="form-label">
                    Marca <b>*</b> {errors.marca && <span>Este campo es requerido</span>}
                  </label>
                  <input
                    className="form-control item"
                    type="marca"
                    name="marca"
                    {...register("marca", { required: true })}
                    data-bs-theme="light"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Modelo <b>*</b> {errors.modelo && <span>Este campo es requerido</span>}
                  </label>
                  <input
                    className="form-control item"
                    type="modelo"
                    name="modelo"
                    {...register("modelo", { required: true })}
                    data-bs-theme="light"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Placa <b>*</b> {errors.placa && <span>Este campo es requerido</span>}
                  </label>
                  <input
                    className="form-control item"
                    type="placa"
                    name="placa"
                    {...register("placa", { required: true })}
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

