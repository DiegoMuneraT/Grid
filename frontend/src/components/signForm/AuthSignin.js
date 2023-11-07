import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../services/firebase/firebase_config";
import { doc, setDoc } from "firebase/firestore";

const AuthSignin = async (event) => {
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
    const infoUser = await createUserWithEmailAndPassword(auth, formUser.email, formUser.password)
        .then((usuarioFirebase) => {
            // Limpiar el formulario
            event.target.reset();
            return usuarioFirebase;
    })
    .catch((error) => {
        console.log(`Error: ${error.code}, ${error.message}`);
    })

    const docuRef = doc(firestore, `usuarios/${infoUser.user.uid}`);

    setDoc(docuRef, {rol: "user"})

}
export default AuthSignin;