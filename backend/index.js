const express = require('express')
const app = express()
const db = require("./markersModel")
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/find", (req, res) => {
  markers = [] 
  db.returnAll().then((data) => res.send(data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})