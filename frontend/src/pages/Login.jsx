// @react
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Context
import { UserAuth } from "../context/AuthContext";
// Components
import NavBarLogin from "../components/NavBarLogin";
import Footer from "../components/Footer";
import AuthLogin from "../components/loginForm/AuthLogin";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {firestore} from "../services/firebase/firebase_config";

const Login = () => {
  // Contexto de autenticación
  const { googleSignIn, microsoftSignIn, user } = UserAuth();
  // Navegación
  const navigate = useNavigate();
  // Iniciar sesión con Google
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  // Iniciar sesión con Microsoft
  const handleMicrosoftSignIn = async () => {
    try {
      await microsoftSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const getRol = async (uid)  => {
    const docRef = doc(firestore, `usuarios/${uid}`);
    const datosCifrados = await getDoc(docRef);
    try {
      const datos = datosCifrados.data().rol;
      return datos;
    } catch (e) {
      return null
    }
  }

  // Redireccionar al inicio si el usuario ya está autenticado
  useEffect(() => {
    if (user != null) {
      getRol(user.uid).then((rol) => {
        if (rol === null ){
          const docuRef = doc(firestore, `usuarios/${user.uid}`);
          setDoc(docuRef, {rol: "user"})
        }
      });
      navigate("/app/inicio/", { replace: true });
    }
  }, [user]);

  return (
    <>
      <NavBarLogin />
      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading" style={{ paddingTop: "20px" }}>
              <h2 className="text-info">Iniciar Sesión</h2>
            </div>
            <form onSubmit={AuthLogin} style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
              <div className="mb-3">
                <label className="form-label" for="email">
                  Correo
                </label>
                <input
                  className="form-control item"
                  type="email"
                  id="email"
                  name="email"
                  data-bs-theme="light"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="password">
                  Contraseña
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  data-bs-theme="light"
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                    data-bs-theme="light"
                  />
                  <label className="form-check-label" for="checkbox">
                    Recuerdame
                  </label>
                </div>
              </div>
              <div
                className="justify-content-center align-items-center"
                style={{
                  display: "flex",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{
                    background: "var(--bs-emphasis-color)",
                    borderColor: "var(--bs-emphasis-color)",
                    borderTopColor: "var(--bs-body-color)",
                  }}
                >
                  Iniciar Sesión
                </button>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>O Inicia Sesión con</span>
              </div>
              <div
                className="justify-content-center align-items-center"
                style={{ display: "flex" }}
              >
                <a
                  className="login100-social-item"
                  onClick={handleGoogleSignIn}
                  style={{
                    boxShadow: "0px 2px 6px 0px var(--bs-emphasis-color)",
                  }}
                >
                  <img
                    src="https://colorlib.com/etc/lf/Login_v9/images/icons/icon-google.png"
                    alt="Google"
                  />
                </a>
                <a
                  className="login100-social-item"
                  onClick={handleMicrosoftSignIn}
                  style={{
                    boxShadow: "0px 2px 6px 0px var(--bs-emphasis-color)",
                  }}
                >
                  <img
                    src="https://learn.microsoft.com/en-us/azure/active-directory/develop/media/howto-add-branding-in-apps/ms-symbollockup_mssymbol_19.svg"
                    alt="Microsoft"
                    width="29"
                    height="32"
                  />
                </a>
              </div>
              <div
                className="justify-content-center align-items-center"
                style={{ display: "flex", margin: "15px 0" }}
              >
                <Link className="txt2" to="/registro/">
                  No tienes una cuenta? Crea una.
                </Link>
              </div>
              <div
                className="justify-content-center align-items-center"
                style={{ display: "flex" }}
              >
                <span
                  style={{ fontSize: "13px", backdropFilter: "opacity(1)" }}
                >
                  GRID @ 2023
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
