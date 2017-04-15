import {createStore, combineReducers} from 'redux'
import {append,merge,map,split} from 'ramda'

const SET_PROJECT = 'SET_PROJECT'
const SET_PROJECTS = 'SET_PROJECTS'

const PREVIOUS = 'PREVIOUS'
const NEXT = 'NEXT'
const RESET = 'RESET'

const ADD_GIG = 'ADD_GIG'

const SET_GIG = 'SET_GIG'
const SET_GIGS = 'SET_GIGS'
const SET_GIG_NAME = 'SET_GIG_NAME'
const SET_GIG_VENUE = 'SET_GIG_VENUE'
const SET_GIG_DATE = 'SET_GIG_DATE'
const SET_GIG_EVENT_TYPE = 'SET_GIG_EVENT_TYPE'
const SET_GIG_ADMISSION = 'SET_GIG_ADMISSION'
const SET_GIG_DESCRIPTION = 'SET_GIG_DESCRIPTION'
const SET_GIG_TAGS = 'SET_GIG_TAGS'
const SET_GIG_SONGS = 'SET_GIG_SONGS'

const CLEAR_GIG_STATE = 'CLEAR_GIG_STATE'


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
    projects: (state = [], action) => {
      switch (action.type) {
        case SET_PROJECTS:
          return action.payload
        default:
          return state
      }
    },
    project: (state = {}, action) => {
      switch (action.type) {
        case SET_PROJECT:
          return merge(state, action.payload)
        default:
          return state
      }
    },
    gigs: (state = [], action) => {
      switch (action.type) {
        case SET_GIGS:
          return action.payload
        case ADD_GIG:
          return append(action.payload, state)
        default:
          return state
      }
    },
    gig: (state = {}, action) => {
      switch (action.type) {
        case SET_GIG:
          return action.payload
        case CLEAR_GIG_STATE:
          return {
            name: "",
            venue: "",
            date: "",
            eventType: "",
            songs: [],
            admission: "",
            description: "",
            tags: []
          }
        case SET_GIG_NAME:
          return merge(state, {name: action.payload})
        case SET_GIG_VENUE:
          return merge(state, {venue: action.payload})
        case SET_GIG_DATE:
          return merge(state, {date: action.payload})
        case SET_GIG_EVENT_TYPE:
          return merge(state, {eventType: action.payload})
        case SET_GIG_ADMISSION:
          return merge(state, {admission: action.payload})
        case SET_GIG_DESCRIPTION:
          return merge(state, {description: action.payload})
        case SET_GIG_TAGS:
          return merge(state, {tags: split(',', action.payload)})

        case SET_GIG_SONGS:
          console.log('songs in gig reducer', action.payload)
          return merge(state, {songs: action.payload})


        case 'OLD_GET_SONGS_FOR_FORM':
          return merge(state, {songs: action.payload})
        case 'OLD_TOGGLE_SONG':
          console.log("newChangedSongs", newChangedSongs)
          const newChangedSongs = map(song => {
            if (song._id === action.payload) {
              song.selected = !song.selected
            }
            return song
          },  state.songs)
          return merge(state, {songs: newChangedSongs})


        default:
          return state
      }
    },
    songs: (state = [], action) => {
      switch(action.type) {
        case 'LOAD_GIGS':
          return action.payload
        default:
          return state
      }
    },
    song: (state = {}, action) => {
      switch(action.type) {
        case 'SET_SONG':
          return action.payload
        default:
          return state
      }
    },
    gigSelectSongs: (state=[], action) => {
      switch(action.type) {
        case 'GET_SONGS_FOR_FORM':
          return action.payload

        case 'PRE_TOGGLE_SONGS':
          //console.log('redux', action.payload)
          return  action.payload

        case 'TOGGLE_SONG':
          return map(song => {
            if (song._id === action.payload) {
              song.selected = !song.selected
            }
            return song
          }, state)
        default:
            return state
      }
    }
  })
)

export default store
