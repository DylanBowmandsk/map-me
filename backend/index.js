const express = require('express')
const app = express()
const db = require("./markersModel")
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})