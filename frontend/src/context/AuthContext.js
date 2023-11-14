// @react
import { 
    useContext, 
    createContext, 
    useEffect, 
    useState 
} from "react";
// @firebase
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  OAuthProvider,
} from "firebase/auth";
// Services
import { auth } from "../services/firebase/firebase_config";
import { firestore } from "../services/firebase/firebase_config";
import { 
    doc,
    setDoc 
} from "firebase/firestore";

// Contexto de autenticación
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Iniciar sesión con Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  // Iniciar sesión con Microsoft
  const microsoftSignIn = () => {
    const provider = new OAuthProvider("microsoft.com");
    signInWithPopup(auth, provider);
  };
  // Cerrar sesión
  const logOut = () => {
    signOut(auth);
  };
  // Obtener el usuario actual
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, microsoftSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const UserAuth = () => {
  return useContext(AuthContext);
};
