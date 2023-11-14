//@react
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//@components
import * as vehicleServer from "api/vehicleServer";
import NavBarAdmin from "../components/NavBarAdmin";
//@context
import { UserAuth } from "context/AuthContext";

const AddVehiclesAdmin = () => {
    //Obtener el usuario autenticado
    const { user } = UserAuth();

    //Obtener el id del usuario
    const userid = user.uid;

    const navigate = useNavigate();

    //Datos del formulario para agregar vehiculo
    const [data, setData] = useState({
        placa: '',
        usuario: '',
    })

    //Actualiza las variables con base a los input del usuario
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setData({
            ...data,
            [name]: value,
            admin: userid,
        });
    }

    //Envio de datos y redireccionamiento
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const ans = await vehicleServer.AdminCreateVehicle(data);

            if (ans === undefined) {
                alert("El vehiculo no se encuentra registrado");
            } else if (ans === 409) {
                alert("El vehiculo se encuentra registrado por otro administrador");
            }

            navigate('/admin/vehiculos/')


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBarAdmin />

            <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
                <div className="container">
                    <div className="block-content" style={{ margin: '80px 0 0 80px', }}>
                        <form style={{ borderTopColor: "var(--bs-emphasis-color)" }}>

                            <div className="mb-3">
                                <p>Para agregar un vehiculo, ten en cuenta que debe estar registrado previamente por algun usuario.</p>
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

                                <Link to="/admin/vehiculos/"><button
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
        </>
    )
}

export default AddVehiclesAdmin;