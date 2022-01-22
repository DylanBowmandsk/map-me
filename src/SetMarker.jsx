import { useMapEvent } from "react-leaflet"

const SetMarker = ({markers, setMarkers}) => {
    //Takes click event and assigns marker with location
    useMapEvent('click', (e) => {   
    let temp = markers.slice()
    temp.push({lat: e.latlng.lat,
                lng:e.latlng.lng,
                body: "test}"})
    setMarkers(temp)
    })
    return null
}

export default SetMarker