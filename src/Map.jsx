import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap} from 'react-leaflet'

function MyComponent() {
    const map = useMap()
    navigator.geolocation.getCurrentPosition(position => {
        map.setView([position.coords.latitude, position.coords.longitude])
    })
    
    return null
  }
const Map = () => {

    return (
        <div id="map">
            
            <MapContainer center={[	51.509865, 	-0.118092]} zoom={14} scrollWheelZoom={false}>
                <MyComponent/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}



export default Map