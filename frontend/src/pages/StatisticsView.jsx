//@components
import NavBarAdmin from 'components/NavBarAdmin';
import NavBarApp from 'components/NavBarApp';
import Statistics from 'components/Statistics';
//@context
import { UserAuth } from "../context/AuthContext";
//@react
import { useState } from "react";
//@services
import {doc, getDoc} from "firebase/firestore";
import {firestore} from "../services/firebase/firebase_config";


const StatisticsView = () => {
  const { user } = UserAuth();
  const [rol, setRol] = useState(null);

  const getRol = async (uid)  => {
    const docRef = doc(firestore, `usuarios/${uid}`);
    const datosCifrados = await getDoc(docRef);
    const datos = datosCifrados.data().rol;
    
    return datos;
  }

  getRol(user.uid).then((rol) => {
    setRol(rol);
  });

  return (
    <>
      { rol === "user" ? <NavBarApp/> : <NavBarAdmin/>}
      <Statistics/>
    </>
  );
};

export default StatisticsView;
