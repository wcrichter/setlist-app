require('dotenv').config()

const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://127.0.0.1:5984/"
const couch_dbname = "setlist"
const db = new PouchDB(couch_base_uri + couch_dbname)
//const db = new PouchDB(process.env.CLOUDANT_API_KEY)
const {map, uniq, prop, compose, omit, drop} = require('ramda')

//////////////
//// PROJECTS
//////////////

function getProject(projectId, cb) {
  db.get(projectId, function(err, doc) {
    if(err) return cb(err)
    cb(null, doc)
  })
}

function listProjects(cb) {
  db.allDocs({
      include_docs: true,
      start_key: "project_",
      end_key: "project_\uffff"
  }, function(err, res) {
    if(err) return cb(err)
    cb(null, (map(obj => omit("type", obj.doc), res.rows)))
  })
}

//////////////
//// SONGS
//////////////

function getSong(songId, cb) {
  db.get(songId, function(err, doc) {
    if(err) return cb(err)
    cb(null, doc)
  })
}

function listSongs(cb) {
  db.allDocs({
      include_docs: true,
      start_key: "song_",
      end_key: "song_\uffff"
  }, function(err, res) {
    if(err) return cb(err)
    cb(null, (map(obj => omit("type", obj.doc), res.rows)))
  })
}

//////////////
//// GIGS
//////////////

function getGig(gigID, cb) {
  db.get(gigID, function(err, doc) {
    if(err) return cb(err)
    cb(null, doc)
  })
}

function listGigs(cb) {
  db.allDocs({
    include_docs: true,
    start_key: "gig_",
    end_key: "gig_\uffff"
  }, function(err, res) {
    if (err) return cb(err)
    cb(null, (map(obj => omit("type", obj.doc), res.rows)))
  })
}

function addGig(gig, cb) {
  gig.type = "gig"
  let newId = "gig_" + gig.projectId + "_" + gig.date + "_" + gig.venue.toLowerCase()
  gig._id = prepID(newId)
  db.put(gig, function(err, addedGig) {
    if(err) return cb(err)
    cb(null, addedGig)
    console.log('gig added successfully', addedGig)
  })
}

function updateGig(gig, cb) {
  db.put(gig, function(err, updatedGig) {
    if(err) return cb(err)
    cb(null, updatedGig)
  })
}

function deleteGig(id, cb) {
  db.get(id, function(err, gig){
    if(err) return cb(err)
    db.remove(gig, function(err, deletedGig) {
      if(err) return cb(err)
      cb(null, deletedGig)
    })
  })
}

function prepID(id) {
  return id.replace(/ /g, "_")
}

const dal = {
  getProject: getProject,
  listProjects: listProjects,
  getSong: getSong,
  listSongs: listSongs,
  getGig: getGig,
  listGigs: listGigs,
  addGig: addGig,
  updateGig: updateGig,
  deleteGig: deleteGig
}

module.exports = dal
