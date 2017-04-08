const express = require('express')
const app = express()


const {split} = require('ramda')
const bodyParser = require('body-parser')

const HTTPError = require('node-http-error')
const port = process.env.PORT || 8082
const cors = require('cors')

app.use(cors({credentials: true}))

app.use(bodyParser.json())

//TODO: GET a single gig



app.use(function(err, req, res, next) {
  console.log(req.method, " ", req.path, "error: ", err)
  res.status(err.status || 500)
  res.send(err)
})

app.listen(port, function() {
  console.log("API is up and running on port ", port)
})
