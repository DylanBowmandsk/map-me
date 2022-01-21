import { useMap } from "react-leaflet"

const FindMe = () => {
    const map = useMap()
    navigator.geolocation.getCurrentPosition(position => {
        map.panTo([position.coords.latitude, position.coords.longitude])
    })
    return null
}

export default FindMe