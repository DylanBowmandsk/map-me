import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from 'react-leaflet'
import FindMe from "./FindMe"
import SetMarker from "./SetMarker"

const Map = () => {

    const [markers, setMarkers] = useState([])
    const [lat, setLat] = useState()
    const [long, setLong] = useState()

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })

    })
    
    return (
        <div id="map">

            {long && lat && <MapContainer  center={[lat, long]} zoom={14} scrollWheelZoom={false}>
                
                <SetMarker markers={markers} setMarkers={setMarkers}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers && markers.map((x, key) => {
                    return (
                        <div key={key}>
                            <Marker position={x}>
                                
                            </Marker>
                        </div>
                    )
                })}
            </MapContainer>}

        </div>
    )
}

export default Map