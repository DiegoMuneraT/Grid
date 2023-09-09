import Footer from "../components/Footer";
import NavBarLogin from "../components/NavBarLogin";

export default function Login() {
  return (
    <body>
        <NavBarLogin/>
        <main className="page login-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading" style={{paddingTop: '20px'}}>
                        <h2 className="text-info">Log In</h2>
                    </div>
                    <form style={{borderTopColor: 'var(--bs-emphasis-color)'}}>
                        <div className="mb-3"><label className="form-label" for="email">Email</label><input className="form-control item" type="email" id="email" data-bs-theme="light" /></div>
                        <div className="mb-3"><label className="form-label" for="password">Password</label><input className="form-control" type="password" id="password" data-bs-theme="light" /></div>
                        <div className="mb-3">
                            <div className="form-check"><input className="form-check-input" type="checkbox" id="checkbox" data-bs-theme="light" /><label className="form-check-label" for="checkbox">Remember me</label></div>
                        </div>
                        <div className="justify-content-center align-items-center" style={{display: 'flex', marginBottom: '15px',marginTop: '15px'}}><button className="btn btn-primary" type="submit" style={{background: 'var(--bs-emphasis-color)', borderColor: 'var(--bs-emphasis-color)', borderTopColor: 'var(--bs-body-color)', }}>Iniciar Sesion</button></div>
                        <div className="txt1 text-center p-t-54 p-b-20"><span>O Inicia Sesion con</span></div>
                        <div className="justify-content-center align-items-center" style={{display: 'flex',}}><a className="login100-social-item" href="#" style={{boxShadow: '0px 2px 6px 0px var(--bs-emphasis-color)', }}><img src="https://colorlib.com/etc/lf/Login_v9/images/icons/icon-google.png" alt="Google" /></a><a className="login100-social-item" href="#" style={{boxShadow: '0px 2px 6px 0px var(--bs-emphasis-color)',}}><img src="https://learn.microsoft.com/en-us/azure/active-directory/develop/media/howto-add-branding-in-apps/ms-symbollockup_mssymbol_19.svg" alt="Microsoft" width="29" height="32" /></a></div>
                        <div className="justify-content-center align-items-center" style={{display: 'flex', margin: '15px 0', }}><a className="txt2" href="../register/">No tienes una cuenta? Crea una.</a></div>
                        <div className="justify-content-center align-items-center" style={{display: 'flex', }}><span style={{fontSize: '13px', backdropFilter: 'opacity(1)', }}>GRID @ 2023</span></div>
                    </form>
                </div>
            </section>
        </main>
        <Footer/>
    </body>
  )
}
