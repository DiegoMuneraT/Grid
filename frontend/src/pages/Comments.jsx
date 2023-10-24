//@components
import Comentarios from "../components/Comentarios";
import NavBarApp from "../components/NavBarApp";
import VehicleInfo from "../pages/vehicletesting";

// Hay que eliminar la linea 20, VehicleInfo y su importacion. Solo es para probar el contexto

export default function Comments() {
    return (
        <>
            <main className="page service-page" style={{background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden',}}>
                <NavBarApp/>
                
                <section className="clean-block clean-blog-list dark">
                    <div className="container">
                        <div className="block-content" style={{margin: '80px 0 0 80px',}}>
                            <Comentarios/>
                            <Comentarios/>
                            <Comentarios/>
                            <VehicleInfo/>
                        </div>
                    </div>
                </section>

            </main>
    
        </>
      )
}