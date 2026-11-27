export default function StatCard({ label, value, change }) {
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
      <span className="stat-change">{change}</span>
    </div>
  )
}