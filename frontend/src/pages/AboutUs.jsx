import React from 'react';
import NavBarHome from '../components/NavBarHome';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <NavBarHome />
      <main className="page service-page" style={{ background: 'var(--bs-body-bg)' }}>
        <section className="clean-block clean-services dark" style={{ background: '#f9f9f9', padding: '0 0 100px' }}>
          <div className="container about-container">
            <div className="block-heading" style={{ paddingTop: '35px', textAlign: 'center' }}>
              <h2 className="text-info">Acerca de nosotros</h2>
            </div>

            <div className="row about-us-content">
              <div className="col-md-6 mb-4">
                {}
                <div className="history-container text-center">
                  <h2>Nuestra Historia</h2>
                  <p className="text-center">
                  ManagEv surge de la creciente inquietud de los usuarios respecto al consumo y duración de las baterías en vehículos eléctricos, una inversión fundamental. Nuestra herramienta aborda estas preocupaciones proporcionando un monitoreo integral de múltiples variables que impactan el rendimiento de la batería. Más allá de la observación, ManagEv capacita a los usuarios para comprender y mitigar los factores que podrían afectar la vida útil de sus baterías. 
                  Además, ofrecemos una funcionalidad única: planificación de rutas óptimas según el nivel de batería actual.
                    {}
                  </p>
                  <p>¡Únete a la revolución ManagEv y lleva tu experiencia de conducción eléctrica al siguiente nivel!</p>
                  <img className="img-fluid mx-auto d-block" src="/img/imagen.png" alt="Historia" />
                </div>
              </div>

              <div className="col-md-6 mb-4">
                {}
                <div className="mission-container text-center">
                  <h2>Misión</h2>
                  <p className="text-center">
                  ManagEV dedicamos apasionadamente a impulsar la revolución de la movilidad sostenible mediante soluciones innovadoras y tecnológicas. Nuestra misión es liderar el cambio hacia un futuro más limpio y eficiente, transformando la experiencia de conducción de vehículos eléctricos y contribuyendo de manera significativa a la preservación del medio ambiente.
                    {}
                  </p>
                  <img className="img-fluid mx-auto d-block" src="/img/imagen1.png" alt="Misión" />
                </div>
              </div>
            </div>

            <div className="team-section">
              <h2>Nuestro Equipo</h2>
              <div className="row">
                {renderTeamMember("team-member1.jpg", "Brigith Lorena Giraldo Vargas", "Scrum Master")}
                {renderTeamMember("team-member2.jpeg", "Daniel Melguizo Roldan", "Developer")}
                {renderTeamMember("team-member3.jpeg", "Diego Alexander Munera Tobon", "Developer")}
                {renderTeamMember("icono.png", "Holmer Ortega Gomez", "Tester")}
                {renderTeamMember("icono.png", "Samuel Salazar Salazar", "Tester/Arquitecto")}
                {renderTeamMember("team-member6.jpeg", "Valentina Ochoa Arboleda", "Arquitecto")}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function renderTeamMember(imageSrc, name, role) {
  return (
    <div className="col-md-4">
      <div className="team-member text-center">
        <img
          className="img-fluid rounded-circle"
          src={`/img/${imageSrc}`}
          alt={name}
          style={{ width: '150px', height: '150px' }}
        />
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}
