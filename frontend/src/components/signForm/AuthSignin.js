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
        password1: data.get("password1"),
    }

    // Validar que las contraseñas sean iguales
    if(formUser.password !== formUser.password1){
        alert('Las contraseñas deben ser iguales')
        return
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
        if (error.code === 'auth/weak-password'){
            alert('La contraseña debe de tener al menos 6 caracteres.')
        } else if (error.code === 'auth/email-already-in-use'){
            alert('El correo ya se encuentra registrado.')
        }
        
    })

    try{
        //Se asigna rol al usuario
        const docuRef = doc(firestore, `usuarios/${infoUser.user.uid}`);

        setDoc(docuRef, {rol: "user"})
    } catch (error) {
    }


}
export default AuthSignin;