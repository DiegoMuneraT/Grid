import { NavLink } from "react-router-dom";
import NavBarAdmin from "components/NavBarAdmin";
import { useEffect, useState } from "react";
import * as vehicleServer from "api/vehicleServer";
import { UserAuth } from "context/AuthContext";

//Estilos
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const getUsuario = () => {

  //Obtener el usuario autenticado
  const { user } = UserAuth();

  //Obtener el id del usuario 
  const userid = user.uid;

  return (userid)

}


const Table = ({ modelo, marca, placa, activo, id}) => {

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
  <tr>
    <th className="column">{marca}</th> 
    <th className="column">{modelo}</th>
    <th className="column">{placa}</th>
    <th className="column">{activo ? <span style={{color: 'green'}}>Activo</span> : <span style={{color: 'red'}}>Inactivo</span>}</th>
    <th><IconButton aria-label="check"><CheckCircleIcon/></IconButton><IconButton aria-label="cancel" onClick={() => {update(id)}}><CancelIcon/></IconButton></th>
    
  </tr>
  </>
  )
} 

export default function OwnVehicles() {

  const [vehicles, setVehicles] = useState({});

  //Obtener el id del usuario
  const userid = getUsuario()

  const listVehicles = async () => {
    try {
      const ans = await vehicleServer.adminListVehicles(userid);
      const data = await ans.data

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
          activo={vehicles[key].activo}
          id = {vehicles[key].id}
        />
      );
    });

    return carElements

  };


  return (
    <main className="page service-page" style={{ background: '#f9f9f9', width: '100%', height: '100%', overflowX: 'hidden', }}>
      <NavBarAdmin />

      <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
        <div className="container">
          <div className="block-content table100" style={{ margin: '80px 0 0 80px', }}>
            <h1 style={{ textAlign: "center" }}>Vehiculos</h1>
            <table>
              <thead>
                <tr>
                  <th className="column">Marca</th>
                  <th className="column">Modelo</th>
                  <th className="column">Placa</th>
                  <th className="column">Activo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carConstructor()}
              </tbody>
              
            </table>
            <br />

            <NavLink className="nav-link py-3 border-bottom rounded-0" to='/admin/vehiculos/agregar-vehiculo/'>
              <button
                className="btn btn-primary"
                style={{
                  background: "var(--bs-emphasis-color)",
                  borderColor: "var(--bs-emphasis-color)",
                  borderTopColor: "var(--bs-body-color)",
                  marginTop: "20px",
                }}>
                Agregar un vehiculo
              </button>
            </NavLink>


          </div>
        </div>
      </section>

    </main>
  )
}

