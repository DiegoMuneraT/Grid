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
                        <Comentarios />
                        <Comentarios />
                        <Comentarios />
                    </div>
                </div>
            </section>

        </>
    )
}

export default CommentsView;