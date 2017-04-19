const express = require('express')
const app = express()


const {split} = require('ramda')
const bodyParser = require('body-parser')

const HTTPError = require('node-http-error')
const port = process.env.PORT || 8082
const cors = require('cors')

const {
  getProject,
  listProjects,
  getSong,
  listSongs,
  getGig,
  listGigs,
  addGig,
  updateGig,
  deleteGig
} = require('./dal.js')

app.use(cors({credentials: true}))

app.use(bodyParser.json())

//////////////
//// SONGS
//////////////

app.get('/projects/:id', function(req, res, next) {
  getProject(req.params.id, function(err, dalResponse) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(dalResponse)
  })
})

app.get('/projects', function(req, res, next) {
  listProjects(function(err, projects) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(projects)
  })
})

//////////////
//// SONGS
//////////////

app.get('/songs/:id', function(req, res, next) {
  getSong(req.params.id, function(err, dalResponse) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(dalResponse)
  })
})

app.get('/songs', function(req, res, next) {
  listSongs(function(err, songs) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(songs)
  })
})

//////////////
//// GIGS
//////////////

app.get('/gigs/:id', function(req, res, next) {
  getGig(req.params.id, function(err, gig) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(gig)
  })
})

app.get('/gigs', function(req, res, next) {
  listGigs(function(err, gigs) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(gigs)
  })
})

app.post('/gigs', function(req, res, next) {
  addGig(req.body, function(err, addedGig) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(201).send(addedGig)
  })
})

app.put('/gigs/:id', function(req, res, next) {
  updateGig(req.body, function(err, updatedGig) {
    console.log('Put request', req.body)
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(updatedGig)
  })
})

app.delete('/gigs/:id', function(req, res, next) {
  deleteGig(req.params.id, function(err, deletedGig) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(deletedGig)
  })
})



app.use(function(err, req, res, next) {
  console.log(req.method, " ", req.path, "error: ", err)
  res.status(err.status || 500)
  res.send(err)
})

app.listen(port, function() {
  console.log("API is up and running on port ", port)
})
