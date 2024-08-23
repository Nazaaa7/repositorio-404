import 'leaflet/dist/leaflet.css';
import "./locations.css"
import Header from "../header";
import {Footer} from "../footer"
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

export const Locations = () => {

  return (
    <>
    <body className='body'>
    <Header/>
    <h1 className="title">Puntos de reciclaje</h1>
    <p>Te ofrecemos diferentes puntos para que puedas llevar a recicla el aceite usado!
    </p>
    <MapContainer center={[-26.18489, -58.17313]} zoom={15} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    
    <Marker position={[-26.18489, -58.17313]}>
      <Popup>
        <h3>Punto-Plaza San Martin</h3>
        <p>Abierto de 08hs a 16hs (corrido)</p>
      </Popup>
    </Marker>
    <Marker position={[-26.181847, -58.181825]} className="marker">
      <Popup>
      <h3>Punto-Córdoba 860</h3>
      <p>Abierto de 08hs a 16hs (corrido)</p>
      </Popup>
    </Marker>

    <Marker position={[-26.187881, -58.169558]}>
      <Popup>
      <h3>Punto-Pringles 270</h3>
      <p>Abierto de 08hs a 16hs (corrido)</p>
      </Popup>
    </Marker>
    <Marker position={[-26.180737654341698, -58.16974121761986]}>
      <Popup>
      <h3>Punto-Córdoba 860</h3>
      <p>Abierto de 08hs a 16hs (corrido)</p>
      </Popup>
    </Marker>
    <Marker position={[-26.193559, -58.187693]}>
      <Popup>
      <h3>Punto-Av Gutnisky 390</h3>
      <p>Abierto de 08hs a 16hs (corrido)</p>
      </Popup>
    </Marker>
  <br></br>
  </MapContainer>
  <Footer/>
  </body>
  </>
  )

}