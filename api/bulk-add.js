const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://127.0.0.1:5984/"
const couch_dbname = "setlist"
const db = new PouchDB(couch_base_uri + couch_dbname)

const docs = [
  {
    "_id": "project_fowlers_mustache_charleston",
    "type": "project",
    "projectName": "Fowler's Mustache",
    "imageURL": "https://www.musicindustryhowto.com/wp-content/uploads/2012/07/How-To-Form-A-Band.jpg",
    "genres": ["Rock", "Alternative", "Jam-Band"],
    "location": {
      "city": "Charleston",
      "state": "SC",
    },
    "dateFormed": "2009-08-01",
    "members": [
      {'firstName': 'Chris', 'lastName': 'Richter', 'skills': ['Bass Guitar']},
      {'firstName': 'John', 'lastName': 'Tankersley', 'skills': ['Drums']},
      {'firstName': 'Matt', 'lastName': 'Stanley', 'skills': ['Vocals', 'Acoustic Guitar', 'Keys']},
      {'firstName': 'Thomas', 'lastName': 'McElwee', 'skills': ['Vocals', 'Electric Guitar']},
      {'firstName': 'Nick', 'lastName': 'Collins', 'skills': ['Vocals', 'Electric Guitar']},
    ]
  },{
    "_id": "project_yellow_submarine_charleston",
    "type": "project",
    "projectName": "Yellow Submarine",
    "imageURL": "https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg",
    "genres": ["Classic", "Tribute"],
    "location": {
      "city": "Charleston",
      "state": "SC",
    },
    "dateFormed": "2006-09-15",
    "members": [
      {'firstName': 'Teddy', 'lastName': 'Winslow', 'skills': ['Vocals', 'Electric Guitar']},
      {'firstName': 'Jeff', 'lastName': 'Cruz', 'skills': ['Vocals', 'Electric Guitar']},
      {'firstName': 'Andy', 'lastName': 'Timmons', 'skills': ['Vocals', 'Bass Guitar']},
      {'firstName': 'Craig', 'lastName': 'Samsonite', 'skills': ['Vocals', 'Drums']},
    ]
  },{
    "_id": "song_beatles_come_together",
    "type": "song",
    "title": "Come Together",
    "artist": "Beatles",
    "album": "Abbey Road",
    "year": "1969",
    "songKey": "D",
    "genres": ["Rock", "Pop Rock", "British"],
    "tags": ["classic", "60s", "jam", "jam-band"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Here come old flat top/He come groovin' up slowly/He got joo joo eyeballs/He one holy rollers/He got hair down to his knee/Got to be a joker/He just do what he please//He wear no shoeshine/He got toe jam football/He got monkey finger/He shoot Coca Cola/He say I know you, you know me/One thing I can tell you is/You got to be free/Come together, right now/Over me//He bad production/He got walrus gumboot/He got Ono sideboard/He one spinal cracker/He got feet down below his knees/Hold you in his armchair/You can feel his disease/Come together, right now/Over me//He roller coaster/He got early warning/He got muddy water/He one Mojo filter/He say one and one and one is three/Got to be good looking/Cause he's so hard to see/Come together right now/Over me//Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah/Come together, yeah"
  }, {
    "_id": "song_weezer_say_it_aint_so",
    "type": "song",
    "title": "Say It Ain't So",
    "artist": "Weezer",
    "album": "The Blue Album",
    "year": "1994",
    "songKey": "C#",
    "genres": ["Alternative", "Rock"],
    "tags": ["ballad", "90s", "solo", "emo", "nerd"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Somebody's Heine is crowding my icebox..."
  },{
    "_id": "song_warren_zevon_werewolves_of_london",
    "type": "song",
    "title": "Werewolves Of London",
    "artist": "Warren Zevon",
    "album": "Excitable Boy",
    "year": "1979",
    "songKey": "E",
    "genres": ["Rock", "Classic Rock"],
    "tags": ["piano", "70s", "werewolves"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Aaoooooo! Werewolves of London! ..."
  },{
    "_id": "song_warren_zevon_lawyers_guns_and_money",
    "type": "song",
    "title": "Lawyers, Guns and Money",
    "artist": "Warren Zevon",
    "album": "Excitable Boy",
    "year": "1979",
    "songKey": "D",
    "genres": ["Rock", "Classic Rock"],
    "tags": ["piano", "70s", "lawyers"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "I went home with a waitress the way I always do..."
  },{
    "_id": "song_talking_heads_psycho_killer",
    "type": "song",
    "title": "Psycho Killer",
    "artist": "Talking Heads",
    "album": "Talking Heads: 77",
    "year": "1977",
    "songKey": "A",
    "genres": ["Alternative", "Indie", "Nu-Wave"],
    "tags": ["70s", "killer", "byrne", "nu-wave"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "I can't seem to face up to the facts..."
  },{
    "_id": "song_rage_against_the_machine_killing_in_the_name",
    "type": "song",
    "title": "Killing In The Name",
    "artist": "Rage Against The Machine",
    "album": "Rage Against The Machine",
    "year": "1991",
    "songKey": "A",
    "genres": ["Rock", "Rap", "Metal"],
    "tags": ["rage", "90s", "loud", "anarchy", "aggresive"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Some of those that work forces, are the same that burn crosses..."
  },{
    "_id": "song_lit_my_own_worst_enemy",
    "type": "song",
    "title": "My Own Worst Enemy",
    "artist": "Lit",
    "album": "Closer To The Sun",
    "year": "1999",
    "songKey": "E",
    "genres": ["Alternative", "Rock"],
    "tags": ["rowdy", "90s", "sing-along"],
    "explicit": true,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "It's no surprise to me I am my own worst enemy..."
  }, {
    "_id": "song_grateful_dead_shakedown_street",
    "type": "song",
    "title": "Shakedown Street",
    "artist": "Grateful Dead",
    "album": "Shakedown Street",
    "year": "1978",
    "songKey": "E",
    "genres": ["Rock", "Funk Rock", "Disco", "Pop Rock", "Jam Rock"],
    "tags": ["classic", "70s", "jam", "jam-band"],
    "explicit": true,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "You tell me this town ain't got no heart..."
  },{
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
    "lyrics": `We were born before the wind \ Also younger than the sun/Ere the bonnie boat was won as we sailed into the mystic/Hark, now hear the sailors cry/Smell the sea and feel the sky/Let your soul and spirit fly into the mystic//And when that foghorn blows I will be coming home/And when that foghorn blows I want to hear it/I don't have to fear it/I want to rock your gypsy soul/Just like way back in the days of old/Then magnificently we will float into the mystic//And when that foghorn blows you know I will be coming home/And when that foghorn whistle blows I got to hear it/I don't have to fear it/I want to rock your gypsy soul/Just like way back in the days of old/And together we will float into the mystic//Come on girl//Too late to stop now`
  },{
    "_id": "song_rolling_stones_dead_flowers",
    "type": "song",
    "title": "Dead Flowers",
    "artist": "Rolling Stones",
    "album": "Sticky Fingers",
    "year": "1971",
    "songKey": "D",
    "genres": ["Classic Rock"],
    "tags": ["classic", "70's"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Take me down little Susie, take me down..."
  },{
    "_id": "song_fowlers_mustache_american_son",
    "type": "song",
    "title": "American Son",
    "artist": "Fowler's Mustache",
    "album": "Goodnight, Mother Earth",
    "year": "2013",
    "songKey": "D",
    "genres": ["Classic Rock", "Rock"],
    "tags": ["classic", "2000s", "driving"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Well Bradley's got a rope for the neck of a CEO..."
  },{
    "_id": "song_fowlers_mustache_swamp_boogie",
    "type": "song",
    "title": "Swamp Boogie",
    "artist": "Fowler's Mustache",
    "album": "Goodnight, Mother Earth",
    "year": "2013",
    "songKey": "B",
    "genres": ["Rock", "Funk"],
    "tags": ["swamp", "2000s", "dancing", "groove"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "Down in the swamp is where I go to have myself some fun..."
  },{
    "_id": "song_fowlers_mustache_aint_life_hard",
    "type": "song",
    "title": "Ain't Life Hard",
    "artist": "Fowler's Mustache",
    "album": "Goodnight, Mother Earth",
    "year": "2013",
    "songKey": "A",
    "genres": ["Folk", "Country"],
    "tags": ["easy", "slow", "twangy", "slow-dance"],
    "explicit": false,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": "An old man up in Ocracoke was dippin' his toes in his favorite book..."
  },{
    "_id": "song_weezer_undone",
    "type": "song",
    "title": "Undone",
    "artist": "Weezer",
    "album": "The Blue Albume",
    "year": "1994",
    "songKey": "G",
    "genres": ["Alternative", "Rock"],
    "tags": ["ballad", "90s", "solo", "emo", "nerd"],
    "explicit": true,
    "projectId": "project_fowlers_mustache_charleston",
    "lyrics": `Hey bra, how we doin' man? / All right. /It's been a while man, life's so rad! /This band's my favorite man, don't ya love 'em? /Yeah. /Aw man, you want a beer? /All right. /Aw man, this is the best. I'm so glad we're all back together and stuff. /This is great, man. /Yeah. /Hey, did you know about the party after the show? /Yeah. /Aw man, it's gonna be the best, I'm so stoked! Take it easy bra'. //I'm me /Me be /Goddamn /I am /I can /Sing and /Hear me /Know me /If you want to destroy my sweater /Hold this thread as I walk away /Hey, what's up? /Not much. /Did you hear about the party? /Yeah. /Um, I think I'm gonna go but, um, my friends don't really wanna go. Could I get a ride? /Oh no /It go /It gone /Bye-bye /Who I /I think /I sink /And I die /If you want to destroy my sweater /Hold this thread as I walk away / Watch me unravel, I'll soon be naked /Lying on the floor (lying on the floor) /I've come undone / If you want to destroy my sweater /Hold this thread as I walk away (as I walk away) /Watch me unravel, I'll soon be naked /Lying on the floor (lying on the floor) /I've come undone / I don't want to destroy your tank-top /Let's be friends and just walk away /It's good to see you lying there in your Superman skivvies /Lying on the floor (lying on the floor) /I've come undone`
  },{
    "_id": "song_beatles_eleanor_rigby",
    "type": "song",
    "title": "Eleanor Rigby",
    "artist": "Beatles",
    "album": "Yellow Submarine",
    "year": "1966",
    "songKey": "G",
    "genres": ["Rock", "Pop Rock", "British"],
    "tags": ["classic", "60s", "Yellow Submarine"],
    "explicit": false,
    "projectId": "project_yellow_submarine_charleston",
    "lyrics": `Ah look at all the lonely people/Ah look at all the lonely people/Eleanor Rigby, picks up the rice/In the church where a wedding has been/Lives in a dream/Waits at the window, wearing the face/That she keeps in a jar by the door/Who is it for//All the lonely people/Where do they all come from?/All the lonely people/Where do they all belong?//Father McKenzie, writing the words/Of a sermon that no one will hear/No one comes near/Look at him working, darning his socks/In the night when there's nobody there/What does he care//All the lonely people/Where do they all come from?/All the lonely people/Where do they all belong?`
  },{
    "_id": "song_beatles_because",
    "type": "song",
    "title": "Because",
    "artist": "Beatles",
    "album": "Abbey Road",
    "year": "1969",
    "songKey": "D",
    "genres": ["Rock", "Pop Rock", "British"],
    "tags": ["slow", "60s", "sad", "acapella"],
    "explicit": false,
    "projectId": "project_yellow_submarine_charleston",
    "lyrics": `Because the world is round it turns me on/Because the world is round, ah//Because the wind is high it blows my mind/Because the wind is high, ah//Love is old, love is new/Love is all, love is you//Because the sky is blue, it makes me cry/Because the sky is blue, ah/Ah`
  },{
    "_id": "song_beatles_yellow_submarine",
    "type": "song",
    "title": "Yellow Submarine",
    "artist": "Beatles",
    "album": "Yellow Submarine",
    "year": "1966",
    "songKey": "E",
    "genres": ["Rock", "Pop Rock", "British"],
    "tags": ["slow", "happy", "sing-along", "Ringo"],
    "explicit": false,
    "projectId": "project_yellow_submarine_charleston",
    "lyrics": `In the town where I was born/Lived a man who sailed to sea/And he told us of his life/In the land of submarines/So we sailed up to the sun/Till we found a sea of green/And we lived beneath the waves/In our yellow submarine//We all live in a yellow submarine/Yellow submarine, yellow submarine/We all live in a yellow submarine/Yellow submarine, yellow submarine//And our friends are all aboard/Many more of them live next door/And the band begins to play//We all live in a yellow submarine/Yellow submarine, yellow submarine/We all live in a yellow submarine/Yellow submarine, yellow submarine`
  },{
    "_id": "song_beatles_dont_let_me_down",
    "type": "song",
    "title": "Don't Let Me Down",
    "artist": "Beatles",
    "album": "Imagine: John Lennon",
    "year": "1988",
    "songKey": "F#",
    "genres": ["Rock", "Pop Rock", "British"],
    "tags": ["slow", "rooftop"],
    "explicit": false,
    "projectId": "project_yellow_submarine_charleston",
    "lyrics": `Don't let me down, don't let me down/Don't let me down, don't let me down//Nobody ever loved me like she does/Oh, she does, yeah, she does/And if somebody loved me like she do me/Oh, she do me, yes, she does//Don't let me down, don't let me down/Don't let me down, don't let me down//I'm in love for the first time/Don't you know it's gonna last/It's a love that lasts forever/It's a love that had no past/Don't let me down, don't let me down/Don't let me down, don't let me down`
  },{
    "_id": "song_george_harrison_all_things_must_pass",
    "type": "song",
    "title": "All Things Must Pass",
    "artist": "George Harrison",
    "album": "All Things Must Pass",
    "year": "1970",
    "songKey": "E",
    "genres": ["Folk", "British"],
    "tags": ["slow", "sad", "sing-along", "George", "Harrison"],
    "explicit": false,
    "projectId": "project_yellow_submarine_charleston",
    "lyrics": `Sunrise doesn't last all morning/A cloudburst doesn't last all day /Seems my love is up /And has left you with no warning /But it's not always going /To be this grey/All things must pass/All things must pass away/Sunset doesn't last all evening/A mind can blow those clouds away /After all this my love is up /And must be leaving /But it's not always going /To be this grey/All things must pass/All things must pass away`
  },{
    "_id": "gig_fowlers_mustache_2017-04-12_arts_bar_and_grill",
    "type": "gig",
    "projectId": "project_fowlers_mustache_charleston",
    "name": "Have-A-Heart Fundraiser",
    "venue": "Arts Bar and Grill",
    "date": "2017-05-12",
    "eventType": "Fundraiser",
    "tags": ["classic", "70's", "slow", "slow dance"],
    "songs": [
      {
        "_id": "song_van_morrison_into_the_mystic",
        "title": "Into The Mystic",
        "artist": "Van Morrison",
        "tags": ["classic", "70s", "slow", "slow dance"],
        "rating": "3"
      }, {
        "_id": "song_beatles_come_together",
        "title": "Come Together",
        "artist": "Beatles",
        "tags": ["classic", "bass", "60s"],
        "rating": "4"
      },{
        "_id": "song_weezer_undone",
        "title": "Undone",
        "artist": "Weezer",
        "tags": ["ballad", "90s", "solo", "emo", "nerd"],
        "rating": "2"
      },{
        "_id": "song_weezer_say_it_aint_so",
        "title": "Say It Ain't So",
        "artist": "Weezer",
        "tags": ["ballad", "90s", "solo", "emo", "nerd"],
        "rating": "1"
      },{
        "_id": "song_fowlers_mustache_aint_life_hard",
        "title": "Ain't Life Hard",
        "artist": "Fowler's Mustache",
        "tags": ["easy", "slow", "twangy", "slow-dance"],
        "rating": "4"
      },
    ],
  },{
    "_id": "gig_fowlers_mustache_2017-05-17_wild_wing_cafe",
    "type": "gig",
    "projectId": "project_fowlers_mustache_charleston",
    "name": "Wing Fest",
    "venue": "Wild Wing Cafe",
    "date": "2017-05-17",
    "eventType": "Bar",
    "tags": ["wild", "crazy", "rowdy", "loud", "drunk"],
    "songs": [
      {
        "_id": "song_van_morrison_into_the_mystic",
        "title": "Into The Mystic",
        "artist": "Van Morrison",
        "tags": ["classic", "70s", "slow", "slow dance"],
        "rating": "3"
      }, {
        "_id": "song_rolling_stones_dead_flowers",
        "title": "Dead Flowers",
        "artist": "Rolling Stones",
        "tags": ["classic", "70's"],
        "rating": "4"
      },{
        "_id": "song_weezer_undone",
        "title": "Undone",
        "artist": "Weezer",
        "tags": ["ballad", "90s", "solo", "emo", "nerd"],
        "rating": "5"
      },{
        "_id": "song_weezer_say_it_aint_so",
        "title": "Say It Ain't So",
        "artist": "Weezer",
        "tags": ["ballad", "90s", "solo", "emo", "nerd"],
        "rating": "5"
      },{
        "_id": "song_lit_my_own_worst_enemy",
        "title": "My Own Worst Enemy",
        "artist": "Lit",
        "tags": ["rowdy", "90s", "sing-along"],
        "rating": "5"
      },
    ],
  },{
    "_id": "gig_fowlers_mustache_2017-06-17_the_windjammer",
    "type": "gig",
    "projectId": "project_fowlers_mustache_charleston",
    "name": "Sol Fest",
    "venue": "The Windjammer",
    "date": "2017-06-17",
    "eventType": "Festival",
    "tags": ["wild", "crazy", "rowdy", "loud", "beach"],
    "songs": [
      {
        "_id": "song_grateful_dead_shakedown_street",
        "title": "Shakedown Street",
        "artist": "Grateful Dead",
        "tags": ["classic", "70s", "groove", "jam"],
        "rating": "5"
      }, {
        "_id": "song_rolling_stones_dead_flowers",
        "title": "Dead Flowers",
        "artist": "Rolling Stones",
        "tags": ["classic", "70's"],
        "rating": "4"
      },{
        "_id": "song_weezer_undone",
        "title": "Undone",
        "artist": "Weezer",
        "tags": ["ballad", "90s", "solo", "emo", "nerd"],
        "rating": "5"
      },{
        "_id": "song_weezer_say_it_aint_so",
        "title": "Say It Ain't So",
        "artist": "Weezer",
        "tags": ["ballad", "90s", "solo", "emo", "nerd"],
        "rating": "5"
      },{
        "_id": "song_lit_my_own_worst_enemy",
        "title": "My Own Worst Enemy",
        "artist": "Lit",
        "tags": ["rowdy", "90s", "sing-along"],
        "rating": "5"
      },
    ],
  },{
    "_id": "gig_yellow_submarine_wild_wing_cafe",
    "type": "gig",
    "projectId": "project_yellow_submarine_charleston",
    "name": "Battle of the Bands",
    "venue": "Wild Wing Cafe",
    "date": "2017-07-03",
    "eventType": "Bar",
    "tags": ["competition", "classic", "rock"],
    "songs": [
      {
        "_id": "song_george_harrison_all_things_must_pass_come_together",
        "title": "All Things Must Pass",
        "artist": "George Harrison",
        "tags": ["slow", "sad", "sing-along", "George", "Harrison"],
        "rating": "2"
      },
      {
        "_id": "song_beatles_yellow_submarine",
        "title": "Yellow Submarine",
        "artist": "Beatles",
        "tags": ["slow", "happy", "sing-along", "Ringo"],
        "rating": "1"
      },
      {
        "_id": "song_beatles_eleanor_rigby",
        "title": "Eleanor Rigby",
        "artist": "Beatles",
        "tags": ["classic", "60s", "Yellow Submarine"],
        "rating": "5"
      },
      {
        "_id": "song_beatles_because",
        "title": "Because",
        "artist": "Beatles",
        "tags": ["slow", "60s", "sad", "acapella"],
        "rating": "5"
      },
    ],
  },


]

db.bulkDocs(docs, function(err, res) {
  if (err) return console.log(err)
  console.log(res)
})
