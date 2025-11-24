import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Doctors from './Components/Doctors'
import AvailableDoctors from './Components/AvailableDoctors'
import BookingForm from './Components/BookingForm'
import BookingTests from './Components/BookingTests'
import About from './Components/About'
import Auth from './Components/Auth'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/available' element={<AvailableDoctors />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/bookingtest" element={<BookingTests />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
