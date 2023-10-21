import NavBarAdmin from "../components/NavBarAdmin";
import { useState } from "react";

export default function Comments() {

    const [archivos, setArchivos] = useState(null);


    const handleFileChange = (e) => {

    }



    return (
        <>
            <main className="page service-page" style={{background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden',}}>
                <NavBarAdmin/>
                
                <section className="clean-block clean-blog-list dark">
                    <div className="container">
                        <div className="block-content" style={{margin: '80px 0 0 80px',}}>

                            <form onSubmit={handleFileChange} style={{padding: "40px 0"}}>

                                <div className="mb-3">
                                    <label className="form-label" for="station">
                                    Estaciones de carga:
                                    </label>
                                    <input
                                    className="form-control item"
                                    type="file"
                                    id="file"
                                    name="file"
                                    data-bs-theme="light"

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
                                >
                                    Agregar Estacion de carga
                                </button>

                            </form>

                            <form action="" style={{padding: "40px 0"}}>

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