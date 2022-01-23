const express = require('express')
const app = express()
const db = require("./markersModel")

const port = 3100

const cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/find", (req, res) => {
  markers = [] 
  db.returnAll().then((data) => res.send(data))
})

app.post("/addmarker", (req, res) => {
  db.addMarker(req.body.lat,req.body.lng)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})