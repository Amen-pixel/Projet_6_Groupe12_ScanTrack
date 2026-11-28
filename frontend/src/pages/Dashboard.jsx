import { useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import RecentQrTable from '../components/dashboard/RecentQrTable'
import TopQrList from '../components/dashboard/TopQrList'
import ScansChart from '../components/dashboard/ScansChart'
import GeoMap from '../components/dashboard/GeoMap'
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

const scansByDay = [
  { day: '5 déc', scans: 100 },
  { day: '6 déc', scans: 205 },
  { day: '7 déc', scans: 235 },
  { day: '8 déc', scans: 180 },
  { day: '9 déc', scans: 265 },
  { day: '10 déc', scans: 340 },
  { day: '11 déc', scans: 290 },
]

const countries = [
  { name: 'Bénin', percent: 45, position: [6.37, 2.39] },
  { name: 'France', percent: 30, position: [48.85, 2.35] },
  { name: "Côte d'Ivoire", percent: 15, position: [5.36, -4.01] },
  { name: 'Autres', percent: 10, position: null },
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

        <div className="dash-row dash-row-even">
          <ScansChart data={scansByDay} />
          <GeoMap countries={countries} />
         </div>

      <div className="dash-row">
        <RecentQrTable qrs={qrs} />
        <TopQrList qrs={qrs} />
      </div>
    </div>
  )
}