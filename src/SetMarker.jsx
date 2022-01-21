import { useMapEvent } from "react-leaflet"

const SetMarker = ({markers, setMarkers}) => {

    const map = useMapEvent('click', (e) => {   
        let temp = markers.slice()
        temp.push([e.latlng.lat,e.latlng.lng])
        setMarkers(temp)
    })
    return null
}

export default SetMarker