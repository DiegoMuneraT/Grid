// @react
import { Routes, Route } from 'react-router-dom'

// Components
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import MapView from './pages/MapView'
import OwnVehicles from './pages/Own-vehicles'
import Comments from './pages/Comments'
import Statistics from './pages/Statistics'
import AdminMap from './pages/AdminMap'
import AdminStatistics from './pages/AdminStatistics'
import AdminVehicles from './pages/AdminVehicles'
import AdminData from './pages/AdminData'
import Error404 from './errors/Error404'
import AddVehicle from './pages/Add-vehicle'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/authListener/ProtectedRoute'

// Styled components
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/baguetteBox.min.css';
import './assets/css/Footer-Dark-icons.css';
import './assets/css/vanilla-zoom.min.css';


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
              <MapView/>
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

        <Route
          path="admin/inicio/"
          element={
            <ProtectedRoute>
              <AdminMap />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin/estadisticas/"
          element={
            <ProtectedRoute>
              <AdminStatistics/>
            </ProtectedRoute>
          }
        />

        <Route
          path="admin/vehiculos/"
          element={
            <ProtectedRoute>
              <AdminVehicles/>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="admin/cargar-datos/"
          element={
            <ProtectedRoute>
              <AdminData/>
            </ProtectedRoute>
          }
        />

      </Routes>
    </AuthContextProvider>
  );
}

export default App