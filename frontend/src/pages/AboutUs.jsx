import NavBarHome from "../components/NavBarHome"
import Footer from "../components/Footer"

export default function AboutUs() {
  return (
    <>
        <NavBarHome/>
        <main className="page service-page" style={{background: 'var(--bs-body-bg)', }}>
            <section className="clean-block clean-services dark" style={{background: '#f9f9f9', padding: '0 0 100px'}}>           
                <div className="container">
                <div className="block-heading" style={{paddingTop: '35px'}}>
                  <h2 className="text-info" style={{textAlign: 'center'}}>Acerca de nosotros</h2>
                </div>
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
                    Aquí se puede contar la historia detallada del proyecto.
                  </p>
                </div>
                <div className="team-section">
                  <h2>Nuestro Equipo</h2>
                  <div className="team-member">
                    <img src="team-member1.jpg" alt="Miembro del equipo 1" />
                    <h3>Brigith Lorena Giraldo Vargas</h3>
                    <p>Scrum Master</p>
                  </div>
                  <div className="team-member">
                    <img src="team-member2.jpg" alt="Miembro del equipo 2" />
                    <h3>Daniel Melguizo Roldan</h3>
                    <p>Developer</p>
                  </div>
                  <div className="team-member">
                    <img src="team-member2.jpg" alt="Miembro del equipo 2" />
                    <h3>Diego Alexander Munera Tobon</h3>
                    <p>Developer</p>
                  </div>
                  <div className="team-member">
                    <img src="team-member2.jpg" alt="Miembro del equipo 2" />
                    <h3>Holmer Ortega Gomez</h3>
                    <p>Tester</p>
                  </div>
                  <div className="team-member">
                    <img src="team-member2.jpg" alt="Miembro del equipo 2" />
                    <h3>Samuel Salazar Salazar</h3>
                    <p>Tester/Arquitecto</p>
                  </div>
                  <div className="team-member">
                    <img src="team-member2.jpg" alt="Miembro del equipo 2" />
                    <h3>Valentina Ochoa Arboleda</h3>
                    <p>Arquitecto</p>
                  </div>
                </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
    
  )
}
