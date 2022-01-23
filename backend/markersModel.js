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

const Marker = mongoose.model("markers", markerSchema)

exports.addMarker = (lat,lng) => {
    let marker = new Marker({
        lat: lat,
        lng: lng,
    })
    marker.save()
    return Marker.find()
}

exports.returnAll = () => {
    return Marker.find()
}

exports.setMarkerText = async (id, body) => {
    let marker = await Marker.findOne({_id: id})
    marker.body = body
    marker.save().then(response => console.log(response))
    
}