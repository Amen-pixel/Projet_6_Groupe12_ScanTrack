import { useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import RecentQrTable from '../components/dashboard/RecentQrTable'
import TopQrList from '../components/dashboard/TopQrList'
import './Dashboard.css'

const periods = [7, 30, 90]

const stats = [
  { label: 'QR codes créés', value: '24', change: '+12 % sur la période' },
  { label: 'Scans totaux', value: '1 284', change: '+18 % sur la période' },
  { label: 'QR actifs', value: '18', change: '+5 % sur la période' },
  { label: 'Scans ce mois', value: '356', change: '+22 % sur la période' },
]

const qrs = [
  { name: 'Site web', sub: 'scantrack.app', type: 'URL', status: 'Actif', scans: 428, limit: 1000 },
  { name: 'Wi-Fi invité', sub: 'Réseau : ScanTrack', type: 'Wi-Fi', status: 'Actif', scans: 312, limit: 500 },
  { name: 'Carte de visite', sub: 'Jean Dupont', type: 'vCard', status: 'Actif', scans: 247, limit: null },
]

export default function Dashboard() {
  const [period, setPeriod] = useState(7)

  return (
    <div className="dashboard">
      <div className="dash-header">
        <div>
          <h1>Tableau de bord</h1>
          <p className="muted">Suivez et gérez vos QR codes · Données d'exemple</p>
        </div>

        <div className="period-switch">
          {periods.map((p) => (
            <button
              key={p}
              className={p === period ? 'active' : ''}
              onClick={() => setPeriod(p)}
            >
              {p} jours
            </button>
          ))}
        </div>
      </div>

      <div className="stat-grid">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Le graphique et la carte viendront ici (morceaux 3 et 4) */}

      <div className="dash-row">
        <RecentQrTable qrs={qrs} />
        <TopQrList qrs={qrs} />
      </div>
    </div>
  )
}