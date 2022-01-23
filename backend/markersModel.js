const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbString = require(__dirname +'/dbconnectstring').uri
mongoose.connect(dbString)

//data schema
const markerSchema = new Schema({
  lat: Number,
  lng: Number,
  body: String,
  date: Date
});

const marker = mongoose.model("markers", markerSchema)

