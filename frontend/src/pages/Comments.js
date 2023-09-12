import Comentarios from "../components/Comentarios";
import NavBarApp from "../components/NavBarApp";

export default function Comments() {
    return (
        <body>
            <main className="page service-page" style={{background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden',}}>
                <NavBarApp/>
                
                <section className="clean-block clean-blog-list dark">
                    <div className="container">
                    <div className="block-content" style={{margin: '80px 0 0 80px',}}>
                        <Comentarios/>
                        <Comentarios/>
                        <Comentarios/>
                    </div>
                    </div>
                </section>

            </main>
    
        </body>
      )
}