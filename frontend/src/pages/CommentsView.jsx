//@components
import Comentarios from "../components/Comentarios";
import NavBarApp from "../components/NavBarApp";

const CommentsView = () => {
    return (
        <>
            <NavBarApp />

            <section className="clean-block clean-blog-list dark">
                <div className="container">
                    <div className="block-content" style={{ margin: '80px 0 0 80px', }}>
                        <Comentarios 
                        title="Realiza un mantenimiento de la batería para una vida útil prolongada"
                        date="20/11/2023"
                        user="GRID"
                        description="Realiza una carga regular y evita descargar completamente la batería. Además, mantén la temperatura de la batería en un rango óptimo para prolongar su vida útil."
                        />
                        <Comentarios 
                        title="Planifica rutas con estaciones de carga"
                        date="20/11/2023"
                        user="GRID"
                        description="Antes de viajar, planifica tu ruta considerando las estaciones de carga. Asegúrate de conocer su ubicación y disponibilidad para evitar sorpresas durante el viaje."
                        />
                        <Comentarios 
                        title="Aprovecha las funciones de carga programada"
                        date="20/11/2023"
                        user="GRID"
                        description="Utiliza la función de carga programada de tu vehículo para cargar durante las horas de tarifas eléctricas más bajas. Esto no solo te ahorrará dinero, sino que también reducirá la carga en la red eléctrica en horas pico."
                        />
                        <Comentarios 
                        title="Conduce eficientemente para maximizar la autonomía"
                        date="20/11/2023"
                        user="GRID"
                        description="Practica una conducción suave y evita aceleraciones y frenadas bruscas para maximizar la eficiencia y, por ende, la autonomía de tu vehículo eléctrico."
                        />
                        <Comentarios 
                        title="Actualiza regularmente el software del vehículo"
                        date="20/11/2023"
                        user="GRID"
                        description="Mantén actualizado el software de tu vehículo. Las actualizaciones pueden mejorar la eficiencia, la autonomía y agregar nuevas funciones de seguridad."
                        />
                        <Comentarios 
                        title="Infraestructura de carga confiable en el hogar"
                        date="20/11/2023"
                        user="GRID"
                        description="Asegúrate de tener una infraestructura de carga confiable en casa. Un cargador doméstico de calidad y una instalación adecuada son clave para una experiencia de carga sin problemas."
                        />
                        {/* <Comentarios 
                        title=""
                        date="20/11/2023"
                        user="GRID"
                        description=""
                        /> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default CommentsView;