export const addMarker = (lat,lng) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({lat: lat,lng: lng})
    }
    fetch(`http://localhost:3100/addmarker`,requestOptions).
    then(response => response.json().then((response) => {return response}))
}