import Footer from "../components/Footer"
import NavBarHome from "../components/NavBarHome"
import TarjetasHome from "../components/TarjetasHome"


export default function Home() {
  return (
    <>
        <NavBarHome/>
        <main className="page service-page" style={{background: 'var(--bs-body-bg)', }}>
            <section className="clean-block clean-services dark" style={{background: '#f9f9f9', padding: '0 0 100px'}}>
                <div className="container">
                  <div className="block-heading" style={{paddingTop: '35px'}}>
                    <h2 className="text-info">Home</h2>
                  </div>
                  <div className="row">
                      <TarjetasHome/>
                      <TarjetasHome/>
                      <TarjetasHome/>
                      <TarjetasHome/>
                      <TarjetasHome/>
                  </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}
