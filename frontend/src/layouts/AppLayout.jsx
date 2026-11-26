import { NavLink, Outlet } from 'react-router-dom'

const links = [
  ['/', 'Tableau de bord'], ['/qr', 'Mes QR codes'], ['/qr/nouveau', 'Créer un QR code'],
  ['/historique', 'Historique'], ['/statistiques', 'Statistiques'], ['/profil', 'Profil'],
]

export default function AppLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav style={{ width: 220, background: '#151B3A', padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h2 style={{ color: '#fff' }}>ScanTrack</h2>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end style={{ color: '#fff' }}>{label}</NavLink>
        ))}
      </nav>
      <main style={{ flex: 1, padding: 24 }}><Outlet /></main>
    </div>
  )
}
