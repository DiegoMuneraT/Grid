import NavBarHome from "../components/NavBarHome"
import Footer from "../components/Footer"

export default function AboutUs() {
  return (
    <div>
        <NavBarHome/>
        <main className="page service-page" style={{background: 'var(--bs-body-bg)', }}>
            <section className="clean-block clean-services dark" style={{background: '#f9f9f9', padding: '0 0 100px'}}>           
                <div className="container">
                  <p></p>
                <h2 className="text-info" style={{textAlign: 'center'}}>Acerca de nosotros</h2>
                <header>
                  <p></p>
                  <h1>ManagEV, aprende a conocer más tu vehiculo</h1>
                </header>
                <div className="about-us-content">
                  <div className="left-column">
                    <img src="team-image.jpg" alt="Equipo" />
                  </div>
                  <div className="right-column">
                    <p>
                      Somos un equipo apasionado que se dedica a promover la movilidad sostenible a través de nuestra aplicación. Nuestra misión es...
                    </p>
                    <img src="/img/about_1.jpg" alt="Autos eléctricos" ></img>
                    <ul>
                      <li>Misión</li>
                    </ul>
                  </div>
                </div>
                <div className="detailed-description">
                  <h2>Nuestra Historia</h2>
                  <p>
                    Aquí puedes contar la historia detallada de tu proyecto, los desafíos que enfrentaron y los logros que han alcanzado.
                  </p>
                </div>
                <div className="team-section">
                  <h2>Nuestro Equipo</h2>
                  <div className="team-member">
                    <img src="team-member1.jpg" alt="Miembro del equipo 1" />
                    <h3>Nombre del Miembro 1</h3>
                    <p>Puesto / Rol</p>
                  </div>
                  <div className="team-member">
                    <img src="team-member2.jpg" alt="Miembro del equipo 2" />
                    <h3>Nombre del Miembro 2</h3>
                    <p>Puesto / Rol</p>
                  </div>
                </div>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
    
  )
}
