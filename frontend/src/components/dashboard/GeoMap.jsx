import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function GeoMap({ countries }) {
  return (
    <section className="card">
      <div className="card-head">
        <h2>Répartition géographique</h2>
      </div>

      <div className="geo">
        <div className="map-box">
          <MapContainer
            center={[15, 0]}
            zoom={2}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countries
              .filter((c) => c.position)
              .map((c) => (
                <CircleMarker
                  key={c.name}
                  center={c.position}
                  radius={6 + c.percent / 6}
                  pathOptions={{ color: '#4f46e5', fillColor: '#4f46e5', fillOpacity: 0.7 }}
                >
                  <Tooltip>{c.name} : {c.percent} %</Tooltip>
                </CircleMarker>
              ))}
          </MapContainer>
        </div>

        <ul className="geo-list">
          {countries.map((c) => (
            <li key={c.name}>
              <span>{c.name}</span>
              <strong>{c.percent} %</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}