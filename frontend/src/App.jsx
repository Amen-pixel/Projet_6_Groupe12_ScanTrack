import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import MyQr from './pages/MyQr'
import CreateQr from './pages/CreateQr'
import History from './pages/History'
import Stats from './pages/Stats'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/qr" element={<MyQr />} />
        <Route path="/qr/nouveau" element={<CreateQr />} />
        <Route path="/historique" element={<History />} />
        <Route path="/statistiques" element={<Stats />} />
        <Route path="/profil" element={<Profile />} />
      </Route>
    </Routes>
  )
}
