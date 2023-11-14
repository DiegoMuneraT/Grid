//@react
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//@components
import * as vehicleServer from "api/vehicleServer";
import NavBarApp from "../components/NavBarApp";
//@context
import { UserAuth } from "context/AuthContext";

const AddVehiclesUser = () => {
    //Obtener el usuario autenticado
    const { user } = UserAuth();

    //Obtener el id del usuario
    const userid = user.uid;

    const navigate = useNavigate();

    //Datos del formulario para agregar vehiculo
    const [data, setData] = useState({
        modelo: '',
        marca: '',
        placa: '',
        usuario: '',
    })

    //Actualiza las variables con base a los input del usuario
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setData({
            ...data,
            [name]: value,
            usuario: userid,
        });
    }

    //Envio de datos y redireccionamiento
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const ans = await vehicleServer.createVehicle(data);

            if (ans === undefined) {
                alert("El vehiculo introducido ya se encuentra registrado!");
            } else {
                navigate('/app/mis-vehiculos/')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBarApp />

            <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
                <div className="container">
                    <div className="block-content" style={{ margin: '80px 0 0 80px', }}>
                        <form style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Marca <b>*</b>
                                </label>
                                <select
                                    className="form-select"
                                    name="marca"
                                    value={data.marca}
                                    required
                                    onChange={handleInputChange}
                                    data-bs-theme="light"
                                >
                                    <option selected>Seleccionar una marca</option>
                                    <option value="Renault">Renault</option>
                                    <option value="BYD">BYD</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Oransh">Oransh</option>
                                    <option value="Stark">Stark</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Sunwin">Sunwin</option>
                                    <option value="JAC">JAC</option>
                                    <option value="Dongfen">Dongfen</option>
                                    <option value="Changan">Changan</option>
                                    <option value="Zhidou">Zhidou</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="BAIC">BAIC</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Kia">Kia</option>
                                    <option value="Chery">Chery</option>
                                </select>

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
        </>
    )

}

export default AddVehiclesUser;