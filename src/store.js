import {createStore, combineReducers} from 'redux'
import {append,merge} from 'ramda'

const projects = function (projects=[
  {
    _id: "project_fowlers_mustache_charleston",
    _type: "project",
    name: "Fowler's Mustache",
    city: "Charleston",
    state: "SC",
    genres: ["Rock", "Alternative", "Jam-Band"],
    formed: "2009",
    imageURL: "https://d31fr2pwly4c4s.cloudfront.net/f/7/5/908005_0_cabbage-the-shimmer-band-april_400.jpg",
    songs: [{
      _songId: "song_weezer_say_it_aint_so",
      title: "Say It Aint So",
      artist: "Weezer",
    }],
    gigs: []
  },{
    _id: "project_old_town_pickers_steamboat_springs",
    _type: "project",
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

const gig = function (gig={
  _id: "gig_20170410_town_square",
  _type: "gig",
  _projectId: "project_fowlers_mustache_charleston",
  date: "04/10/2017",
  name: "Flowertown Festival",
  type: "Fundraiser",
  venue: "Town Square",
  admission: "All Ages",
  notes: "Lorem Ipsum",
  setlist: [
    {
      id: "song_weezer_say_it_aint_so",
      type: "song",
      projectId: "project_fowlers_mustache",
      title: "Say It Aint So",
      artist: "Weezer",
      album: "Blue Album",
      genres: ["Alternative", "Surf Rock"],
      songKey: "C#",
      explicit: false,
      status: "active",
      tags: ["90s", "Sing-along", "solo"],
      lyrics: "Somebody's Heine is crowding my ice box..."},
    {
      id: "song_weezer_say_it_aint_so",
      type: "song",
      projectId: "project_fowlers_mustache",
      title: "Say It Aint So",
      artist: "Weezer",
      album: "Blue Album",
      genres: ["Alternative", "Surf Rock"],
      songKey: "C#",
      explicit: false,
      status: "active",
      tags: ["90s", "Sing-along", "solo"],
      lyrics: "Somebody's Heine is crowding my ice box..."},
  ]
}, action) {
  return gig
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
  songKey: "C#",
  explicit: false,
  status: "active",
  tags: ["90s", "Sing-along", "solo"],
  lyrics: "Somebody's Heine is crowding my ice box..."
}, action ) {
  return song
}

const SET_PROJECT = 'SET_PROJECT'

const ADD_GIG = 'ADD_GIG'
const PREVIOUS = 'PREVIOUS'
const NEXT = 'NEXT'

const SET_GIG_NAME = 'SET_GIG_NAME'
const SET_GIG_VENUE = 'SET_GIG_VENUE'
const SET_GIG_DATE = 'SET_GIG_DATE'
const CLEAR_GIG_STATE = 'CLEAR_GIG_STATE'
const RESET = 'RESET'

const store = createStore(
  combineReducers({
    panel: (state = 'step1', action) => {
      switch(action.type) {
        case PREVIOUS:
          return action.payload
        case NEXT:
          return action.payload
        case RESET:
          return 'step1'
        default:
          return state
      }
    },
    projects: projects,
    project: (state = {
      id: "",
      name: "",
      city: "Charleston",
      state: "SC",
      genres: ["Rock", "Alternative", "Jam-Band"],
      formed: "2009",
      imageURL: "https://d31fr2pwly4c4s.cloudfront.net/f/7/5/908005_0_cabbage-the-shimmer-band-april_400.jpg"
      }, action) => {
        switch (action.type) {
          case SET_PROJECT:
            return merge(state, action.payload)
          default:
            return state
        }
      },
    gigs: (state = [{
      date: "04/10/2017",
      name: "Test Gig 1",
      type: "Fundraiser",
      venue: "Town Square",
      admission: "All Ages",
      notes: "Lorem Ipsum",
      setlist: []
      }
    ], action) => {
      switch (action.type) {
        case ADD_GIG:
          return append(action.payload, state)
        default:
          return state
      }
    },
    gig: (state = {
      name: "",
      venue: "",
      date: ""
    }, action) => {
      switch (action.type) {
        case CLEAR_GIG_STATE:
          return { name: "",
          venue: "",
          date: ""}
        case SET_GIG_NAME:
          return merge(state, {name: action.payload})
        case SET_GIG_VENUE:
          return merge(state, {venue: action.payload})
        case SET_GIG_DATE:
          return merge(state, {date: action.payload})
        default:
          return state
      }
    },
    songs: songs,
    song: song
  })
)

export default store
