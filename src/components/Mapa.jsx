import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'
import L from 'leaflet'

// Criar um ícone customizado usando a imagem pin.png
const customIcon = L.icon({
  iconUrl: '/pin.png',
  iconSize: [45, 45],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
})

const Mapa = () => {
  const localizacoes = [
    {
      id: 1,
      position: [-1.2949, -47.9182], 
    },
    {
      id: 2,
      position: [-0.71315, -47.69749],
    },
    {
      id: 3,
      position: [-0.7010, -47.6971],
    },
    {
      id: 4,
      position: [-0.7079, -47.8832],
    },
    {
      id: 5,
      position: [-1.6144, -47.4740],
    },
    {
        id: 6,
        position: [-1.7081, -47.7431],
    },
    {
        id: 7,
        position: [-1.7781, -47.4410],
    },
    {
        id: 8,
        position:[-1.1404, -47.6154],

    }
  ]

  const centroMapa = [
    -1.2949, -47.9182
  ]

  return (
    <section className="mapa-section">
      <div className="mapa-container">
        <div className="mapa-header">
        </div>
        
        <div className="mapa-content">
          <MapContainer 
            center={centroMapa} 
            zoom={9} 
            scrollWheelZoom={true}
            className="mapa-leaflet"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {localizacoes.map((local) => (
              <Marker key={local.id} position={local.position} icon={customIcon}>
              </Marker>
            ))}
          </MapContainer>
        </div>
    
    
    </div>
     
    </section>
  )
}

export default Mapa
