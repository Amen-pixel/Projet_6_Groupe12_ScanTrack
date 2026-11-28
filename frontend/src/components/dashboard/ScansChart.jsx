import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function ScansChart({ data }) {
  return (
    <section className="card">
      <div className="card-head">
        <h2>Évolution des scans</h2>
      </div>

      <div className="chart-box">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="#eef0f7" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: '#6b7194' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6b7194' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="scans"
              stroke="#4f46e5"
              strokeWidth={2}
              fill="#4f46e5"
              fillOpacity={0.12}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}