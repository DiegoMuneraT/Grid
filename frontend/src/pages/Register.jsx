// @react
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Components
import Footer from "../components/Footer";
import NavBarLogin from "../components/NavBarLogin";
import { UserAuth } from "../context/AuthContext";
import AuthSignin from "../components/signForm/AuthSignin";
import { Toast } from "toaster-js";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {firestore} from "../services/firebase/firebase_config";

const Register = () => {
  // Contexto de autenticación
  const { googleSignIn, microsoftSignIn, user } = UserAuth();
  // Navegación
  const navigate = useNavigate();
  // Registrar con Google
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(`Error: ${error.code}, ${error.message}`);
      new Toast(`${error.message}, ${error.code}`, Toast.TYPE_ERROR, Toast.TIME_NORMAL);
    }
  };
 // Registrar con Microsoft
  const handleMicrosoftSignIn = async () => {
    try {
      await microsoftSignIn();
    } catch (error) {
      console.log(`Error: ${error.code}, ${error.message}`);
      new Toast(`${error.message}, ${error.code}`, Toast.TYPE_ERROR, Toast.TIME_NORMAL);
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
              <h2 className="text-info">Crear Cuenta</h2>
            </div>
            <form onSubmit={AuthSignin} style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
              <div className="mb-3">
                <label className="form-label" for="email">
                  Correo
                </label>
                <input
                  className="form-control item"
                  type="email"
                  id="email"
                  data-bs-theme="light"
                  name="email"
                  required
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
                  data-bs-theme="light"
                  name="password"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="password">
                  Confirmar Contraseña
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="password-1"
                  data-bs-theme="light"
                  required
                />
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
                  Crear Cuenta
                </button>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>O regístrate con</span>
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
                <Link className="txt2" to="/iniciar-sesion/">
                  Ya tienes una cuenta? Inicia Sesion.
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

export default Register;