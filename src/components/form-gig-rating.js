import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { map, path, pathOr, merge, omit, set, lensProp, compose, assoc} from 'ramda'
import fetch from 'isomorphic-fetch'
import ListItemGigSetlistReview from '../components/list-item-gig-setlist-review'
import ReduxThunk from 'redux-thunk'

const putGig = (gig) => fetch('http://localhost:8080/gigs/' + gig._id, {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT',
  body: JSON.stringify(gig, null, 2)
})

const mergeAndSaveGig = (currentSongs, ratedSongs) => {
  return merge(currentSongs, ratedSongs)
}

const ratedGig = (currentGig, ratedSongs) => {
  return compose(
    set(lensProp('songs', ratedSongs)),
    omit(['songs'])
  )(currentGig)
}

class FormGigRating extends React.Component{
  componentDidMount() {
    fetch(`http://localhost:8080/gigs/${this.props.gig._id}`)
      .then(res => res.json())
      .then(gig => this.props.setGigSongs(gig))
      {/*
      .then(gig => this.props.dispatch({type: 'GET_SONGS_TO_RATE', payload: gig.songs}))
      */}
  }
  render() {
    const props = this.props
    if(!path(['gigRateSongs'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
      return(
        <div>
          <section className="mw9 center pt4 ph4-ns">
            <div className="br2 b--black-20 ba bg-white card-shadow">
              <div className="cf ph3 bb b--black-20">
                <div className="fl w-75 ph2 pv4">
                  <span className="f3 fw1">{props.gig.name}</span>
                </div>
                <div className="fr tr w-25 ph2 pv4">
                  <Link to="/project/gigs">
                    <i className="fa fa-close fa-2x ml4" aria-hidden="true"/>
                  </Link>
                </div>
              </div>
              <div className="ph3 pv4">
                <div className="f4 fw1 ph2">
                  <span className="f3 fw1">How was the gig?</span>
                  <ul className="list pl0">
                    {map(song => <ListItemGigSetlistReview key={song._id} rating={song.rating} {...song} />, path(['gigRateSongs'], props))}
                  </ul>
                </div>
              </div>
              <div>
                <button onClick={e => {
                  props.dispatch({type: 'SET_GIG_SONGS', payload: props.gigRateSongs})
                  console.log('gigRateSongs:', props.gigRateSongs)
                }}>Submit</button>
                <button onClick={e => {
                  putGig(props.gig)
                }}>Save</button>
                <button onClick={e => {
                  props.saveRatedGig(props.gig)
                }}>Thunk Save</button>
              </div>
              <button className="ba b--black pa3" onClick={e => {
                console.log('gig songs:', props.gig.songs)
                console.log('rated songs:', props.gigRateSongs)
                console.log('omit songs from gig:', omit(['songs'], props.gig.songs))

                console.log(set(lensProp('songs'), props.gigRateSongs, omit(['songs'], props.gig.songs)))
                console.log('ratedGig:', compose(assoc('songs', props.gigRateSongs), omit(['songs']))(props.gig))
                {putGig(compose(assoc('songs', props.gigRateSongs), omit(['songs']))(props.gig))}
              }}>New Save Type</button>
            </div>
          </section>
        </div>
      )
    }
  }
}

const mapActionsToProps = (dispatch, props) => {
  return {
    saveRatedGig: (dispatch) => (gig) => {
      console.log('gig', gig)
      dispatch({type: 'SET_GIG_SONGS', payload: props.gigRateSongs})
      .then((gig) => putGig(gig))
    },
    setGigSongs: (gig) => dispatch({type: 'GET_SONGS_TO_RATE', payload: gig.songs})
  }
}

const connector = connect(state => state, mapActionsToProps)

export default connector(FormGigRating)
