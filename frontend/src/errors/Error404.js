import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";


export default function Error404() {
  return (
    <body style={{background: 'transparent',}}>
        <NavBarHome/>
        <main className="page service-page" style={{background: 'var(--bs-body-bg)', }}>
            <section className="clean-block clean-services dark" style={{background: '#f9f9f9', padding: '0 0 100px'}}>
                <div className="container" style={{height: '100vh', width: '100vw'}}>
                  <div className="block-heading" style={{paddingTop: '35px',}}>
                    <h2 className="text-info">Error404</h2>
                    <p>La pagina no fue encontrada.</p>
                  </div>
                </div>
            </section>
        </main>
        <Footer/>
    </body>
  )
}
