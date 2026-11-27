import { NavLink, Outlet } from 'react-router-dom'
import './AppLayout.css'

const links = [
  ['/', 'Tableau de bord'],
  ['/qr', 'Mes QR codes'],
  ['/qr/nouveau', 'Créer un QR code'],
  ['/historique', 'Historique'],
  ['/statistiques', 'Statistiques'],
  ['/profil', 'Profil'],
]

export default function AppLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">
          <strong>ScanTrack</strong>
          <small>Générez · Gérez · Analysez</small>
        </div>

        <nav>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end className="nav-link">
              {label}
            </NavLink>
          ))}
        </nav>

        <footer>
          ScanTrack © 2026
          <br />
          Groupe 12 - Projet 6
        </footer>
      </aside>

      <div className="content">
        <header className="topbar">
          <input type="search" placeholder="Rechercher un QR code..." />
          <div className="user">
            <span className="avatar">JD</span>
            <span>Bonjour, Jean Dupont</span>
          </div>
        </header>

        <main className="page">
          <Outlet />
        </main>
      </div>
    </div>
  )
}