import { useMapEvent } from "react-leaflet"
import { addMarker } from "./apiController"
const SetMarker = ({markers, setMarkers}) => {
    //Takes click event and assigns marker with location
    useMapEvent('click', (e) => {   
    addMarker(e.latlng.lat, e.latlng.lng,setMarkers)
    })
    return null
}

export default SetMarker