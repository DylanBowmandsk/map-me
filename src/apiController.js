export const addMarker = (lat,lng, setMarkers) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({lat: lat,lng: lng})
    }
    fetch(`http://localhost:3100/addmarker`,requestOptions).
    then(response => response.json().
    then((response) => setMarkers(response)))
}

export const getMarkers = (setMarkers) => {
    fetch('http://localhost:3100/find')
    .then(response => response.json())
    .then(response => setMarkers(response));
}

export const setMarkerText = (id,body,setMarkers) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({_id: id, body:body})
    }
    fetch(`http://localhost:3100/setmarkertext`,requestOptions)
    .then(response => response.json()
    .then((response) => setMarkers(response)))
}