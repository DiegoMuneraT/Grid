// @react
import { Routes, Route } from 'react-router-dom'
//@components
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import MapView from './pages/MapView'
import OwnVehiclesView from './pages/OwnVehiclesView'
import CommentsView from './pages/CommentsView'
import StatisticsView from './pages/StatisticsView'
import UploadData from './pages/UploadData'
import Error404 from './errors/Error404'
import AddVehicleView from './pages/AddVehicleView'
import ProtectedRoute from './components/authListener/ProtectedRoute'
//@context
import { VehicleContextProvider } from 'context/CarContext'
import { AuthContextProvider } from './context/AuthContext'
//@style components
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/baguetteBox.min.css';
import './assets/css/Footer-Dark-icons.css';
import './assets/css/vanilla-zoom.min.css';


function App() {
  return (
    <AuthContextProvider>
      <VehicleContextProvider>
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
                <MapView />
              </ProtectedRoute>
            }
          />
          <Route
            path="app/mis-vehiculos/"
            element={
              <ProtectedRoute>
                <OwnVehiclesView />
              </ProtectedRoute>
            }
          />

          <Route
            path="app/mis-vehiculos/agregar-vehiculo/"
            element={
              <ProtectedRoute>
                <AddVehicleView />
              </ProtectedRoute>
            }
          />

          <Route
            path="app/sugerencias/"
            element={
              <ProtectedRoute>
                <CommentsView />
              </ProtectedRoute>
            }
          />
          <Route
            path="app/estadisticas/"
            element={
              <ProtectedRoute>
                <StatisticsView />
              </ProtectedRoute>
            }
          />

          <Route
            path="app/cargar-datos/"
            element={
              <ProtectedRoute>
                <UploadData />
              </ProtectedRoute>
            }
          />
        </Routes>
      </VehicleContextProvider>
    </AuthContextProvider>
  );
}

export default App