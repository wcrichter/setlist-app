import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { equals, identity, map, filter, path, pathOr, length, set, lensProp, intersection, contains, assoc } from 'ramda'
import fetch from 'isomorphic-fetch'
import ButtonBasic from './button-basic'
import ButtonCTA from './button-cta'
import Panel from './panel'
import SelectorItemSong from './selector-item-song'
import GigInputDetails from './form-gig-input-details'
import ConfirmSetlist from './form-gig-confirm-setlist'


//const mapGigSongs = map(song => <li key={song.title} className="pb1 mb2 bb b--black-10"><span className="f5">{song.title}</span><br /><span className="f6">{song.artist}</span></li> , props.gig.songs )

const postGig = (gig) => {
    console.log("Here's the gig", gig)
    fetch('http://localhost:8080/gigs', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(gig)
  })
}

const getGig = (id) => fetch('http://localhost:8080/gigs/' + id)

const putGig = (gig) => fetch('http://localhost:8080/gigs/' + gig._id, {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT',
  body: JSON.stringify(gig)
})


class FormGigSmart extends React.Component {

  componentDidMount() {

    const selectLens = lensProp('selected')
    const prefilteredSong = (song) => song.artist==="Beatles" ? set(selectLens, true, song) : song
    const mappedFilteredSongs = (songs) => map(song => prefilteredSong(song), songs)
    const addSelectedProp = (song) => map()

    fetch('http://localhost:8080/songs')
      .then(res => res.json())
      .then(songs => this.props.getSongsForForm(filter(song => song.projectId === this.props.project._id, songs)))
  }

  render() {
    const props = this.props
    const selectLens = lensProp('selected')
    const filteredSelectedSongs = filter(song => song.selected, props.gigSelectSongs)

    if(!path(['gig'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
    return (
      <div className="mw8 center pv4 ph4-ns">
        {equals(props.panel, 'step1') &&
        <Panel
          instructions="Fill out some basic info about the gig."
          onNext={e => {
            props.next('step2')

            console.log('Gig input so far', props.gigSelectSongs)
            console.log('Song Tags -', map(song => song.tags, props.gigSelectSongs))
            console.log('Gig Tags -', props.gig.tags)

            const checkInput = (song) => intersection(song.tags, props.gig.tags)
            const setTrue = (song) => assoc('selected', true, song)
            const setFalse = (song) => assoc('selected', false, song)
            const toggledSongs = map(song => length(checkInput(song)) > 0 ? setTrue(song) : setFalse(song), props.gigSelectSongs)

            props.preToggleSongs(toggledSongs)
            }
          }>

          <GigInputDetails
            name={props.gig.name}
            onNameChange={e => props.setGigName(e.target.value)}
            venue={props.gig.venue}
            onVenueChange={e => props.setGigVenue(e.target.value)}
            date={props.gig.date}
            onDateChange={e => props.setGigDate(e.target.value)}
            startTime={props.gig.startTime}
            onStartTimeChange={e => props.setGigStartTime(e.target.value)}
            onEventTypeChange={e => props.setGigEventType(e.target.value)}
            admission={props.gig.admission}
            onAdmissionChangeAll={e => props.setGigAdmission('All Ages')}
            onAdmissionChange21={e => props.setGigAdmission('21+')}
            description={props.gig.description}
            onDescriptionChange={e => props.setGigDescription(e.target.value)}
            gigTags={props.gig.tags}
            onGigTagsChange={e => props.setGigTags(e.target.value)}
          />

        </Panel>
        }
        {equals(props.panel, 'step2') &&
        <Panel
          instructions="Select song(s) to build your setlist."
          onPrevious={e => props.previous('step1')}
          onNext={e => {
            props.next('step3')
            console.log('songs in gig', props.gig.songs)
            props.setGigSongs(filter(song => song.selected, props.gigSelectSongs))
            }
          }>
          <div className="mw9 center bb b--black-20 header-shadow">
            <div className="cf ph2-ns">
              <div className="fl w-75 ph3 pb4">
                <span className="f4 mr3">Selected Songs: {filter(song => song.selected, props.gigSelectSongs).length} of {props.gigSelectSongs.length}</span>
              </div>
            </div>
          </div>
          <div className="mw9 center pt2 ph3-ns">
            <ul className="list pl0 center ph2-ns">
              {map(song => <SelectorItemSong key={song._id} selected={song.selected} {...song}
                onSelected={props.toggleSong(song._id)}
                 />, props.gigSelectSongs)}
            </ul>
          </div>
        </Panel>
        }
        {equals(props.panel, 'step3') &&
        <Panel
          instructions="Review and save your gig!"
          onPrevious={e => props.previous('step2')}
          onFinish={
            props.submit(props.history, props.gig)
          }>
          <ConfirmSetlist />
        </Panel>
        }
      </div>
    )
  }
  }
}


const mapActionsToProps = dispatch => {
  return {
    previous: (panel) => dispatch({type: 'PREVIOUS', payload: panel}),
    next: (panel) => dispatch({type: 'NEXT', payload: panel}),
    reset: (panel) => dispatch({type:'RESET'}),
    setGigName: (name) => dispatch({type:'SET_GIG_NAME', payload: name}),
    setGigVenue: (venue) => dispatch({type: 'SET_GIG_VENUE', payload: venue}),
    setGigDate: (date) => dispatch({type: 'SET_GIG_DATE', payload: date}),
    setGigEventType: (type) => dispatch({type: 'SET_GIG_EVENT_TYPE', payload: type}),
    setGigDescription: (text) => dispatch({type: 'SET_GIG_DESCRIPTION', payload: text}),
    setGigAdmission: (admission) => dispatch({type: 'SET_GIG_ADMISSION', payload: admission}),
    setGigTags: (text) => dispatch({type: 'SET_GIG_TAGS', payload: text}),
    setGigSongs: (text) => dispatch({type: 'SET_GIG_SONGS', payload: text}),

    add: (gig) => dispatch({type: 'ADD_GIG', payload: gig}),
    clearGigState: () => dispatch({type:'CLEAR_GIG_STATE'}),
    getSongsForForm: (songs) => dispatch({type: 'GET_SONGS_FOR_FORM', payload: songs}),

    preToggleSongs: (songs) => dispatch({type: 'PRE_TOGGLE_SONGS', payload: songs}),

    toggleSong: (id) => e => dispatch({type: 'TOGGLE_SONG', payload: id }),
    submit: (history, gig) => (e) => {
      e.preventDefault()
      if(gig._id) {
        putGig(gig)
          .then(res => res.json())
          .then(res => {
            dispatch({type: 'CLEAR_GIG_STATE'})
            history.push('/gigs')
          })
      } else {
        postGig(gig)
          .then(res => res.json())
          .then(res => {
            dispatch({type: 'CLEAR_GIG_STATE'})
            history.push('/gigs')
          }).catch(err => console.log(err.message))
      }
      
    }
  }
}

const connector = connect(identity, mapActionsToProps)

export default connector(FormGigSmart)
