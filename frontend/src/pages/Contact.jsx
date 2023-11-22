import React from 'react';
import NavBarHome from '../components/NavBarHome';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <NavBarHome />
      <main className="page service-page" style={{ background: 'var(--bs-body-bg)' }}>
        <section className="clean-block clean-services dark" style={{ background: '#f9f9f9', padding: '0 0 100px' }}>
          <div className="container">
            <div className="block-heading" style={{ paddingTop: '35px' }}>
              <h2 className="text-info" style={{ textAlign: 'center' }}>Contacto</h2>
            </div>
            <p>
              {/* Contenido general de la página */}
            </p>

            {/* Sección del Equipo de Desarrollo */}
            <div className="block-heading" style={{ paddingTop: '35px' }}>
              <h2 className="text-info" style={{ textAlign: 'center' }}>Equipo de Desarrollo</h2>
            </div>
            <div className="row">
              {renderDeveloper('Brigith Lorena Giraldo Vargas', 'blgiraldov@eafit.edu.co ')}
              {renderDeveloper('Daniel Melguizo Roldan', 'dmelguizor@eafit.edu.co ')}
              {renderDeveloper('Diego Alexander Munera Tobon', 'damunerat@eafit.edu.co')}
              {renderDeveloper('Holmer Ortega Gomez', 'hortegag@eafit.edu.co ')}
              {renderDeveloper('Samuel Salazar Salazar', 'ssalazar1@eafir.edu.co')}
              {renderDeveloper('Valentina Ochoa Arboleda', 'vochoaa@eafit.edu.co')}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function renderDeveloper(name, email) {
  return (
    <div className="col-md-4">
      <div className="developer-card text-center">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}
