import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import Login from './assets/pages/Login'
import SignUp from './assets/pages/SignUp'
import Contact from './assets/pages/Contact'
import Bookings from './assets/pages/Bookings'
import Restaurant from './assets/pages/Restaurant'
import Conference from './assets/pages/Conference'
import Rooms from './assets/pages/Rooms'
import RoomDetailsPage from './assets/pages/RoomDetailsPage'



function App() {

  return (

  <Routes>
    <Route element={<CenterLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="contact" element={<Contact />} />
    </Route>

    <Route element={<PortalLayout />}>
      <Route index element={<Rooms />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="rooms/:id" element={<RoomDetailsPage />} />
      <Route path="rooms/booking/:id" element={<Bookings />} />
      <Route path="restaurant" element={<Restaurant />} />
      <Route path="conference" element={<Conference />} />
    </Route>
  </Routes>
  )
}

export default App
