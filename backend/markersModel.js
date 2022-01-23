const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbString = require(__dirname +'/dbconnectstring').uri
mongoose.connect(dbString)

//data schema
const markerSchema = new Schema({
  lat: Number,
  lng: Number,
  body: String,
});

const Markers = mongoose.model("markers", markerSchema)
exports.addMarker = (lat,lng) => {
    marker = new Marker({
        lat: lat,
        lng: lng,
    })
    marker.save()
}

exports.returnAll = () => {
    return Markers.find()
}