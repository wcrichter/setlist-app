import {createStore, combineReducers} from 'redux'

const projects = function (projects=[
  {
    id: "",
    name: "Fowler's Mustache",
    city: "Charleston",
    state: "SC",
    genres: ["Rock", "Alternative", "Jam-Band"],
    formed: "2009",
    imageURL: "https://d31fr2pwly4c4s.cloudfront.net/f/7/5/908005_0_cabbage-the-shimmer-band-april_400.jpg",
    songs: [],
    setlists: []
  },{
    id: "",
    name: "Old Town Pickers",
    city: "Steamboat Springs",
    state: "CO",
    genres: ["Folk", "Bluegrass"],
    formed: "2005",
    imageURL: "http://zuelrock.com/wp-content/uploads/2016/06/Zuel_199-400x400.jpg"
  }
], action) {
  return projects
}

const project = function (project={
  id: "",
  name: "Fowler's Mustache",
  city: "Charleston",
  state: "SC",
  genres: ["Rock", "Alternative", "Jam-Band"],
  formed: "2009",
  imageURL: "https://d31fr2pwly4c4s.cloudfront.net/f/7/5/908005_0_cabbage-the-shimmer-band-april_400.jpg",
  songs: [],
  setlists: []
}, action) {
  return project
}

const gigs = function (gigs=[
  {date: "04/10/2017", name: "Flowertown Festival", venue: "Town Square"},
  {date: "05/21/2017", name: "98 Rock Fest", venue: "Ladson Park Fairgrounds"},
  {date: "04/10/2017", name: "General", venue: "The Orange Peel"},

], action) {
  return gigs
}

const songs = function (songs=[
  {
    id: "song_weezer_say_it_aint_so",
    type: "song",
    projectId: "project_fowlers_mustache",
    title: "Say It Aint So",
    artist: "Weezer",
    album: "Blue Album",
    genres: ["Alternative", "Surf Rock"],
    key: "C#",
    explicit: false,
    status: "active",
    tags: ["90s", "Sing-along", "solo"],
    lyrics: "Somebody's Heine is crowding my ice box..."
  },{
    id: "song_lit_my_own_worst_enemy",
    type: "song",
    projectId: "project_fowlers_mustache",
    title: "My Own Worst Enemy",
    artist: "Lit",
    album: "Closer To The Sun",
    genres: ["Alternative", "Rock", "Punk"],
    key: "E",
    explicit: true,
    status: "active",
    tags: ["90s", "Rowdy", "Energy"],
    lyrics: "It's no surprise to me I am my own worst enemy..."
  }], action) {
  return songs
}

const song = function (song={
  id: "",
  title: "Say It Aint So",
  artist: "Weezer",
  album: "Blue Album",
  genres: ["Alternative", "Surf Rock"],
  key: "C#",
  explicit: false,
  status: "active",
  tags: ["90s", "Sing-along", "solo"],
  lyrics: "Somebody's Heine is crowding my ice box..."
}, action ) {
  return song
}

const store = createStore(
  combineReducers({
    projects: projects,
    project: project,
    gigs: gigs,
    songs: songs,
    song: song
  })
)

export default store
