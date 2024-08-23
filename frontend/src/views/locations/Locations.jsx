import 'leaflet/dist/leaflet.css';
import "./locations.css"
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

export const Locations = () => {

    
  return (
    <MapContainer center={[-26.18489, -58.17313]} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    
    <Marker position={[-26.18489, -58.17313]}>
      <Popup>
        <h1>sadsadas</h1>
      </Popup>
    </Marker>
    <Marker position={[-26.139957, -58.173976]}>
      <Popup>
        <h1>sadsadas</h1>
      </Popup>
    </Marker>
  </MapContainer>
  )
}
