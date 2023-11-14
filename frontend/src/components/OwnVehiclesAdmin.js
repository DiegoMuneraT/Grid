//@react
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
//@mui
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//@components
import NavBarAdmin from "components/NavBarAdmin";
import * as vehicleServer from "api/vehicleServer";
//@context
import { UserAuth } from "context/AuthContext";


const getUsuario = () => {

  //Obtener el usuario autenticado
  const { user } = UserAuth();

  //Obtener el id del usuario 
  const userid = user.uid;

  return (userid)

}


const Table = ({ modelo, marca, placa, activo, id}) => {
  
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
  <tr onClick={() => {setShow(!show)}}>
    <th className="column">{marca}</th> 
    <th className="column">{modelo}</th>
    <th className="column">{placa}</th>
    <th className="column">{activo ? <span style={{color: 'green'}}>Activo</span> : <span style={{color: 'red'}}>Inactivo</span>}</th>
    {show ? (
      <th>
        <IconButton aria-label="check" color="success">
          <CheckCircleIcon/>
        </IconButton>
        <IconButton aria-label="cancel" onClick={() => {update(id)}} color="error">
          <CancelIcon/>
        </IconButton>
      </th>
    ): (
      <th></th>
    )}
  </tr>
  </>
  )
} 

const OwnVehiclesAdmin = () => {

  const [vehicles, setVehicles] = useState({});
  const [filtro, setFiltro] = useState('');

  //Obtener el id del usuario
  const userid = getUsuario()

  const listVehicles = async () => {
    try {
      if(filtro === ''){
        const ans = await vehicleServer.adminListVehicles(userid);
        const data = await ans.data
        setVehicles(data)

      } else if(filtro === "activo"){
        const ans = await vehicleServer.adminListVehiclesFiltro(userid, true);
        const data = await ans.data
        setVehicles(data)

      } else if(filtro === "inactivo"){
        const ans = await vehicleServer.adminListVehiclesFiltro(userid, false);
        const data = await ans.data
        setVehicles(data)
        
      }

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
      return <><span style={{ justifyContent: 'left'}}>Aun no hay vehiculos agregados.</span></>

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

  const handleChange = (event) => {
    setFiltro(event.target.value);
    listVehicles()
  };

  return (
    <>
      <NavBarAdmin />

      <section className="clean-block clean-blog-list dark" style={{ height: "100vh", overflowY: "hidden" }}>
        <div className="container">
          <div className="block-content table100" style={{ margin: '80px 0 0 80px', }}>
            <h1 style={{ textAlign: "center" }}>Vehiculos</h1>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={filtro}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=''>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value="activo">Activos</MenuItem>
                  <MenuItem value="inactivo">Inactivos</MenuItem>
                </Select>
              </FormControl>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="column">Marca</th>
                  <th className="column">Modelo</th>
                  <th className="column">Placa</th>
                  <th className="column">Activo</th>
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

export default OwnVehiclesAdmin;