import { Link } from 'react-router-dom'
import Badge from './Badge'
import ProgressBar from './ProgressBar'

const typeTone = { URL: 'blue', 'Wi-Fi': 'purple', vCard: 'green' }

export default function RecentQrTable({ qrs }) {
  return (
    <section className="card">
      <div className="card-head">
        <h2>Mes QR codes récents</h2>
        <Link to="/qr" className="card-link">Voir tous</Link>
      </div>

      <div className="table-wrap">
        <table className="qr-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Scans</th>
              <th>Limite</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {qrs.map((qr) => (
              <tr key={qr.name}>
                <td>
                  <strong>{qr.name}</strong>
                  <div className="muted small">{qr.sub}</div>
                </td>
                <td><Badge tone={typeTone[qr.type] ?? 'blue'}>{qr.type}</Badge></td>
                <td>
                  <Badge tone={qr.status === 'Actif' ? 'green' : 'gray'}>{qr.status}</Badge>
                </td>
                <td>{qr.scans}</td>
                <td>
                  {qr.limit ? (
                    <>
                      <span>{qr.limit.toLocaleString('fr-FR')}</span>
                      <ProgressBar value={qr.scans} max={qr.limit} />
                    </>
                  ) : (
                    'Illimité'
                  )}
                </td>
                <td><button className="btn-outline">Modifier</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}