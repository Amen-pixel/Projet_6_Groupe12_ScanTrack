import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

export default function TopQrList({ qrs }) {
  const sorted = [...qrs].sort((a, b) => b.scans - a.scans)
  const max = sorted[0]?.scans || 1

  return (
    <section className="card">
      <div className="card-head">
        <h2>QR les plus scannés</h2>
        <Link to="/statistiques" className="card-link">Voir plus</Link>
      </div>

      <ol className="top-list">
        {sorted.map((qr, i) => (
          <li key={qr.name}>
            <div className="top-row">
              <span>{i + 1}. {qr.name}</span>
              <span>{qr.scans} scans</span>
            </div>
            <ProgressBar value={qr.scans} max={max} />
          </li>
        ))}
      </ol>
    </section>
  )
}