const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://127.0.0.1:5984/"
const couch_dbname = "setlist"
const db = new PouchDB(couch_base_uri + couch_dbname)

const docs = [{
    "_id": "project_fowlers_mustache_charleston",
    "type": "project",
    "projectName": "Fowler's Mustache",
    "genres": ["Rock", "Alternative", "Jam-Band"],
    "city": "Charleston",
    "state": "SC",
    "members": [
      "Chris Richter",
      "Matt Stanley",
      "Thomas McElwee",
      "John Tankersley",
      "Nick Collins"
  ]}, {
    "_id": "song_weezer_say_it_aint_so",
    "type": "song",
    "title": "Say It Ain't So",
    "artist": "Weezer",
    "album": "The Blue Album",
    "year": "1994",
    "songKey": "C#",
    "genres": ["Alternative", "Rock"],
    "tags": ["ballad", "90's", "solo"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Lorem Ipsum"
  }, {
    "_id": "song_lit_my_own_worst_enemy",
    "type": "song",
    "title": "My Own Worst Enemy",
    "artist": "Lit",
    "album": "Closer To The Sun",
    "year": "1999",
    "songKey": "E",
    "genres": ["Alternative", "Rock"],
    "tags": ["rowdy", "90's", "sing-along"],
    "explicit": true,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Lorem Ipsum"
  }, {
    "_id": "song_grateful_dead_shakedown_street",
    "type": "song",
    "title": "Shakedown Street",
    "artist": "Grateful Dead",
    "album": "Shakedown Street",
    "year": "1978",
    "songKey": "E",
    "genres": ["Rock", "Funk Rock", "Disco", "Pop Rock", "Jam Rock"],
    "tags": ["classic", "70's", "jam", "jam-band"],
    "explicit": true,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Lorem Ipsum"
  }, {
    "_id": "song_beatles_come_together",
    "type": "song",
    "title": "Come Together",
    "artist": "Grateful Dead",
    "album": "Shakedown Street",
    "year": "1969",
    "songKey": "E",
    "genres": ["Rock", "Pop Rock", "Jam Rock"],
    "tags": ["classic", "70's", "jam", "jam-band"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "`Here come old flat top/He come groovin' up slowly/He got joo joo eyeballs/He one holy rollers/He got hair down to his knee/Got to be a joker/He just do what he please//He wear no shoeshine/He got toe jam football/He got monkey finger/He shoot Coca Cola/He say I know you, you know me/One thing I can tell you is/You got to be free/Come together, right now/Over me//He bad production/He got walrus gumboot/He got Ono sideboard/He one spinal cracker/He got feet down below his knees/Hold you in his armchair/You can feel his disease/Come together, right now/Over me//He roller coaster/He got early warning/He got muddy water/He one Mojo filter/He say one and one and one is three/Got to be good looking/Cause he's so hard to see/Come together right now/Over me//Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah`"
  }, {
    "_id": "song_van_morrison_into_the_mystic",
    "type": "song",
    "title": "Into The Mystic",
    "artist": "Van Morrison",
    "album": "Moondance",
    "year": "1970",
    "songKey": "Bb",
    "genres": ["Classic Rock"],
    "tags": ["classic", "70's", "slow", "slow dance"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": `We were born before the wind/Also younger than the sun/Ere the bonnie boat was won as we sailed into the mystic/Hark, now hear the sailors cry/Smell the sea and feel the sky/Let your soul and spirit fly into the mystic//And when that foghorn blows I will be coming home/And when that foghorn blows I want to hear it/I don't have to fear it/I want to rock your gypsy soul/Just like way back in the days of old/Then magnificently we will float into the mystic//And when that foghorn blows you know I will be coming home/And when that foghorn whistle blows I got to hear it/I don't have to fear it/I want to rock your gypsy soul/Just like way back in the days of old/And together we will float into the mystic//Come on girl//Too late to stop now`
  }, {
    "_id": "gig_fowlers_mustache_arts_bar_and_grill",
    "type": "gig",
    "projectId": "project_fowlers_mustache_charleston",
    "name": "Have-A-Heart Fundraiser",
    "venue": "Arts Bar and Grill",
    "date": "20170412",
    "eventType": "Fundraiser",
    "tags": ["classic", "70's", "slow", "slow dance"],
    "songs": [
      {
        "_id": "song_van_morrison_into_the_mystic",
        "title": "Into The Mystic",
        "artist": "Van Morrison",
        "tags": ["classic", "70's", "slow", "slow dance"],
        "feedback": {
          "rating": 4,
          "comments": "Lot's of dancing during this one!"
        }
      },
    ],
  },


]

db.bulkDocs(docs, function(err, res) {
  if (err) return console.log(err)
  console.log(res)
})
