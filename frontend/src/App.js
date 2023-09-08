import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='about-us/' element={<AboutUs/>} />
        <Route path='contact/' element={<Contact/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App