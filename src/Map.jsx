import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from 'react-leaflet'
import { getMarkers } from './apiController'
import SetMarker from "./SetMarker"

const Loading = () =>{
    return <h1 className='mx-auto'>Shits Loading</h1>
}

const Map = () => {

    const [markers, setMarkers] = useState([])
    const [lat, setLat] = useState()
    const [long, setLong] = useState()

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
            getMarkers(setMarkers)
        })
    },[])
    
    return (
        <div id="map">
            {long && lat && <MapContainer center={[lat, long]} zoom={14} scrollWheelZoom={false}>  
                <SetMarker markers={markers} setMarkers={setMarkers}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers && markers.map((marker, key) => {
                    return (
                        <div key={key}>
                            <Marker position={[marker.lat,marker.lng]}>
                                <Popup>
                                    <input onChange={(e) => marker.body = e.target.value  } placeholder="type your message here"></input>
                                </Popup>
                            </Marker>
                        </div>
                    )
                })}
            </MapContainer>}
            {!long && !lat && <Loading/>}
            

        </div>
    )
}

export default Map