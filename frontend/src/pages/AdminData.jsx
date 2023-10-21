import NavBarAdmin from "../components/NavBarAdmin";
import { useState } from "react";

import * as stationServer from "api/stationServer";
import * as operationServer from "api/operationServer";   

export default function Comments() {

    const [archivos, setArchivos] = useState(null);


    const subirArchivos = e => {
        setArchivos(e);
    }

    const enviarEstaciones = async (event) => {
        event.preventDefault();
        const f = new FormData();

        for (let index = 0; index < archivos.length; index++) {
            f.append("files", archivos[index]);
        }

        console.log(archivos)

        await stationServer.createStation(f);
    }

    const enviarDatos = async (event) => {
        event.preventDefault();
        const f = new FormData();

        for (let index = 0; index < archivos.length; index++) {
            f.append("files", archivos[index]);
        }

        await operationServer.createOperation(f);
    
    }


    return (
        <>
            <main className="page service-page" style={{background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden',}}>
                <NavBarAdmin/>
                
                <section className="clean-block clean-blog-list dark">
                    <div className="container">
                        <div className="block-content" style={{margin: '80px 0 0 80px',}}>

                            <form style={{padding: "40px 0"}}>

                                <div className="mb-3">
                                    <label className="form-label" for="station">
                                    Estaciones de carga:
                                    </label>
                                    <input
                                    className="form-control item"
                                    type="file"
                                    name="files"
                                    multiple
                                    data-bs-theme="light"
                                    onChange={(e) => subirArchivos(e.target.files)}

                                    />
                                </div>

                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    style={{
                                    background: "var(--bs-emphasis-color)",
                                    borderColor: "var(--bs-emphasis-color)",
                                    borderTopColor: "var(--bs-body-color)",
                                    }}
                                    onClick={enviarEstaciones}
                                >
                                    Agregar Estacion de carga
                                </button>

                            </form>

                            <form style={{padding: "40px 0"}}>

                                <div className="mb-3">
                                    <label className="form-label" for="data">
                                    Datos:
                                    </label>
                                    <input
                                    className="form-control item"
                                    type="file"
                                    id="file"
                                    name="file"
                                    data-bs-theme="light"
                                    multiple

                                    onChange={(e) => subirArchivos(e.target.files)}
                                    />
                                </div>

                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    style={{
                                    background: "var(--bs-emphasis-color)",
                                    borderColor: "var(--bs-emphasis-color)",
                                    borderTopColor: "var(--bs-body-color)",
                                    }}
                                    onClick={enviarDatos}
                                >
                                    Agregar Datos de vehiculos
                                </button>

                            </form>

                        </div>
                    </div>
                </section>

            </main>
    
        </>
      )
}