import React from 'react';
import Footer from '../components/Footer';
import NavBarHome from '../components/NavBarHome';
import TarjetasHome from '../components/TarjetasHome';
import picture from "../assets/img/imagen1.jpg";
import picture1 from "../assets/img/imagen2.jpg";
import picture2 from "../assets/img/imagen3.jpeg";
import picture3 from "../assets/img/imagen4.jpg";
import picture4 from "../assets/img/imagen5.jpg";
import picture5 from "../assets/img/imagen6.jpg";

export default function Home() {
  return (
    <>
      <NavBarHome />
      <main
        className="page service-page"
        style={{ background: 'var(--bs-body-bg)' }}
      >
        <section
          className="clean-block clean-services dark"
          style={{ background: '#f9f9f9', padding: '0 0 100px' }}
        >
          <div className="container">
            <div className="block-heading" style={{ paddingTop: '35px' }}>
              <h2 className="text-info">Movilidad sostenible</h2>
            </div>
            <div className="row">
              <TarjetasHome
                imageSrc= {picture}
                title="Beneficios de contar con un vehículo eléctrico"
                description="Descubre las ventajas de poseer un vehículo eléctrico en Colombia y comprende la relevancia de su adopción. Exploraremos los beneficios que brinda esta tecnología innovadora"
                link= "https://incp.org.co/conozca-los-beneficios-contar-carro-electrico-colombia/"
              />
              <TarjetasHome
                imageSrc={picture1}
                title="La vida de las baterías de los vehículos eléctricos"
                description="¡Descubre la clave para potenciar el rendimiento de tu vehículo eléctrico! Aprender acerca del cuidado adecuado de las baterías es esencial para optimizar su durabilidad y eficiencia."
                link= "https://www.race.es/como-son-baterias-coches-electricos"
              />
              <TarjetasHome
                imageSrc= {picture2}
                title="Vehículos eléctricos chinos"
                description="El secreto del éxito del fabricante de autos eléctricos chino que produce más que Tesla"
                link="https://www.eltiempo.com/economia/empresas/el-secreto-del-exito-del-fabricante-de-autos-electricos-chino-que-produce-mas-que-tesla-817924"
              />
               <TarjetasHome
                imageSrc= {picture3}
                title="Preguntas frecuentas sobre los vehículos eléctricos"
                description=" Explora respuestas a preguntas comunes acerca de los vehículos eléctricos, el consumo de bateria y otras dudas de las personas "
                link= "https://somoselectricos.com/preguntas-coches-electricos/"
              />
              <TarjetasHome
                imageSrc={picture4}
                title="Explora la Ley 1964 de 2014 sobre los vehículos eléctricos en nuestro país."
                description="Descubre cómo esta legislación fomenta el uso de tecnologías sostenibles en el sector automotriz y contribuye al desarrollo de una movilidad más amigable con el medio ambiente."
                link= "https://www.suin-juriscol.gov.co/viewDocument.asp?id=30036636"
              />
              <TarjetasHome
                imageSrc= {picture5}
                title="Telsa es uno de los mayores productores de vehículos eléctricos"
                description="Conoce sobre el hito en la movilidad sustentable: Tesla"
                link="https://economiasustentable.com/noticias/hito-en-la-movilidad-sustentable-tesla-alcanza-el-millon-de-coches-electricos-a-nivel-mundial"
              />
              {}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
