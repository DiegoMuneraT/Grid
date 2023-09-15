// @react
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Map from './pages/Map'
import OwnVehicles from './pages/Own-vehicles'
import Comments from './pages/Comments'
import Statistics from './pages/Statistics'
import Error404 from './errors/Error404'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/authListener/ProtectedRoute'

// Styled components
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/baguetteBox.min.css';
import './assets/css/Footer-Dark-icons.css';
import './assets/css/vanilla-zoom.min.css';
import AddVehicle from 'pages/Add-vehicle'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="" element={<Home />} />
        <Route path="acerca-de-nosotros/" element={<AboutUs />} />
        <Route path="contacto/" element={<Contact />} />
        <Route path="iniciar-sesion/" element={<Login />} />
        <Route path="registro/" element={<Register />} />

        <Route
          path="app/inicio/"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="app/mis-vehiculos/"
          element={
            <ProtectedRoute>
              <OwnVehicles />
            </ProtectedRoute>
          }
        />

        <Route
          path="app/mis-vehiculos/agregar-vehiculo/"
          element={
            <ProtectedRoute>
              <AddVehicle />
            </ProtectedRoute>
          }
        />

        <Route
          path="app/sugerencias/"
          element={
            <ProtectedRoute>
              <Comments />
            </ProtectedRoute>
          }
        />
        <Route
          path="app/estadisticas/"
          element={
            <ProtectedRoute>
              <Statistics />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App