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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='about-us/' element={<AboutUs/>} />
        <Route path='contact/' element={<Contact/>} />
        <Route path='login/' element={<Login/>} />
        <Route path='register/' element={<Register/>} />
        <Route path='app/inicio/' element={<Map/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App