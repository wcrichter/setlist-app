import {createStore, combineReducers} from 'redux'

const projects = function (projects=[
  {
    id: "",
    name: "Fowler's Mustache",
    city: "Charleston",
    state: "SC",
    genres: ["Rock", "Alternative", "Jam-Band"],
    formed: "2009",
    imageURL: "https://d31fr2pwly4c4s.cloudfront.net/f/7/5/908005_0_cabbage-the-shimmer-band-april_400.jpg"
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

const store = createStore(
  combineReducers({
    projects: projects
  })
)

export default store
