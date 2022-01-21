import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from 'react-leaflet'
import FindMe from "./FindMe"
import SetMarker from "./SetMarker"

const Map = () => {

    const [markers, setMarkers] = useState([])
    
    return (
        <div id="map">

            <MapContainer  center={[51.509865, -0.118092]} zoom={14} scrollWheelZoom={false}>
                <FindMe />
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
            </MapContainer>

        </div>
    )
}

export default Map