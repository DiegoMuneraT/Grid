//@react
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
//@components
import * as vehicleServer from "api/vehicleServer";
import NavBarApp from "../components/NavBarApp";
//@mui
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//@context
import { UserAuth } from "context/AuthContext";
import { UserVehicle } from "context/CarContext";

const getUsuario = () => {
  //Obtener el usuario autenticado
  const { user } = UserAuth();

  //Obtener el id del usuario
  const userid = user.uid;

  return userid;
};

// Actualizar el vehiculo actual segun el id
const updateCurrentVehicle = (vehicleId) => {
  const { setCurrentVehicleState } = UserVehicle();
  try {
    setCurrentVehicleState(vehicleId);
  } catch (error) {
    console.log(error);
  }
};


const Table = ({ modelo, marca, placa, id}) => {

  const [show, setShow] = useState(false);

  //Obtener el id del usuario 
  const userid = getUsuario();

  const update = async (id) => {
    const data = {placa: placa, modelo: modelo, marca: marca, usuario: userid, activo: false}

    try{
      await vehicleServer.modifyVehicle(id, data);
      window.location.reload();
  
    }catch(error){
      console.log(error);
    }
    
  }
  return (
    <>
      <tr
        onClick={() => {
          setShow(!show);
        }}
      >
        <th className="column">{marca}</th>
        <th className="column">{modelo}</th>
        <th className="column">{placa}</th>
        {show ? (
          <th>
            <IconButton aria-label="check" color="success">
              <CheckCircleIcon onClick={updateCurrentVehicle(id)} />
            </IconButton>
            <IconButton
              aria-label="cancel"
              onClick={() => {
                update(id);
              }}
              color="error"
            >
              <CancelIcon />
            </IconButton>
          </th>
        ) : (
          <th></th>
        )}
      </tr>
    </>
  );
}

const OwnVehiclesUser = () => {

  const [vehicles, setVehicles] = useState({});

  //Obtener el id del usuario 
  const userid = getUsuario();

  const listVehicles = async () => {
    try {
      const ans = await vehicleServer.listVehicles(userid);
      const data = ans.data

      setVehicles(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listVehicles();
  }, []);

  const carConstructor = () => {
    
    const keys = Object.keys(vehicles)
  
    if (keys.length === 0) {
      return <><br/><p style={{ justifyContent: 'left'}}>Aun no hay vehiculos agregados.</p></>

    }

    const carElements = [];

    keys.forEach((key) => {
      carElements.push(
        <Table
          modelo={vehicles[key].modelo}
          marca={vehicles[key].marca}
          placa={vehicles[key].placa}
          id = {vehicles[key].id}
        />
      );
    });

    return carElements

  };


  return (
    <>
      <NavBarApp />
      <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
        <div className="container">
          <div className="block-content table100" style={{ margin: '80px 0 0 80px', }}>
            <h1 style={{ textAlign: "center" }}>Mis Vehiculos</h1>
            <table>
              <thead>
                <tr>
                  <th className="column">Marca</th>
                  <th className="column">Modelo</th>
                  <th className="column">Placa</th>
                  <th style={{width: "85px"}}></th>
                </tr>
              </thead>
              <tbody>
                {carConstructor()}
              </tbody>
              
            </table>

            <div style={{margin: "40px 0 20px 0"}}>
              <NavLink className="nav-link rounded-0" to='/app/mis-vehiculos/agregar-vehiculo/' style={{display: "contents"}}>
                <button
                  className="btn btn-primary"
                  style={{
                    background: "var(--bs-emphasis-color)",
                    borderColor: "var(--bs-emphasis-color)",
                    borderTopColor: "var(--bs-body-color)",
                  }}>
                  Agregar un vehiculo
                </button>
              </NavLink>
            </div>

            <hr/>

          </div>
        </div>
      </section>

    </>
  )
}

export default OwnVehiclesUser;