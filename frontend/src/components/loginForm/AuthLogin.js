import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase_config";

const AuthLogin = (event) => {
    // Previene que el formulario se envíe
    event.preventDefault();
    // Obtener los datos del formulario
    const data = new FormData(event.currentTarget);
    // Crear el objeto de usuario
    const formUser = {
        email: data.get("email"),
        password: data.get("password"),
    }
    // Crear el usuario
    signInWithEmailAndPassword(auth, formUser.email, formUser.password)
        .then(() => {
            // Limpiar el formulario
            event.target.reset();
    })
    .catch((error) => {
        console.log(`Error: ${error.code}, ${error.message}`);
    })

}
export default AuthLogin;