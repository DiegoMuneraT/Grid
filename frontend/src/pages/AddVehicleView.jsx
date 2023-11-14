//@services
import {doc, getDoc} from "firebase/firestore";
import {firestore} from "../services/firebase/firebase_config";
//@context
import { UserAuth } from "../context/AuthContext";
//@components
import AddVehiclesAdmin from "components/AddVehiclesAdmin";
import AddVehiclesUser from "components/AddVehiclesUser";
//@react
import { useState } from "react";

const AddVehicleView = () => {
  
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
      {rol === "user" ? <AddVehiclesUser/> : <AddVehiclesAdmin/>}
    </>
  );
}

export default AddVehicleView;
