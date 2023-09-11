import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Map from './pages/Map'
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/baguetteBox.min.css';
import './assets/css/Footer-Dark-icons.css';
import './assets/css/vanilla-zoom.min.css';
import OwnVehicles from './pages/Own-vehicles'
import Comments from './pages/Comments'
import Statistics from './pages/Statistics'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='acerca-de-nosotros/' element={<AboutUs/>} />
        <Route path='contacto/' element={<Contact/>} />
        <Route path='iniciar-sesion/' element={<Login/>} />
        <Route path='registro/' element={<Register/>} />
        <Route path='app/inicio/' element={<Map/>} />
        <Route path='app/mis-vehiculos/' element={<OwnVehicles/>} />
        <Route path='app/sugerencias/' element={<Comments/>} />
        <Route path='app/estadisticas/' element={<Statistics/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App