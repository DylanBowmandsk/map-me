import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'

function MyComponent() {
    const map = useMap()
    navigator.geolocation.getCurrentPosition(position => {
        map.flyTo([position.coords.latitude, position.coords.longitude])
    })
    
    return null
  }
const Map = () => {

    var markers = [[51.509865,-0.118092],[51.559865,-0.11892]]

    return (
        <div id="map">
            
            <MapContainer center={[	51.509865, 	-0.118092]} zoom={14} scrollWheelZoom={false}>
                <MyComponent/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((x, key) => {
                    return (
                        <div key={key}>
                            <Marker position={x}>

                            </Marker>
                        </div>
                    )
            })}
            </MapContainer>

        </div>
    )
}



export default Map