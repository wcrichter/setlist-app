import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { equals, identity, map, filter, path, pathOr, length, set, lensProp, intersection, contains, assoc } from 'ramda'
import fetch from 'isomorphic-fetch'
import ButtonBasic from './button-basic'
import ButtonCTA from './button-cta'
import Panel from './panel'
import SelectorItemSong from './selector-item-song'
import DropdownList from 'react-widgets/lib/DropdownList'
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
      .then(songs => this.props.getSongsForForm(songs))
  }

  render() {
    const props = this.props
    const selectLens = lensProp('selected')
    const filteredSelectedSongs = filter(song => song.selected, props.gigSelectSongs)
    const eventTypes = ['Rehearsal', 'Bar', 'Private', 'Concert', 'Festival', 'Fundraiser', 'Other']

    if(!path(['gig'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
    return (
      <div className="mw9 center pv4 ph4-ns">
        {equals(props.panel, 'step1') &&
        <Panel
          instructions="Fill out some basic info about the gig."
          onNext={e => {
            console.log('Gig input so far', props.gigSelectSongs)
            props.next('step2')


            const checkInput = (song) => intersection(song.tags, props.gig.tags)

            console.log('Song Tags -', map(song => song.tags, props.gigSelectSongs))
            console.log('Gig Tags -', props.gig.tags)

            const setTrue = (song) => assoc('selected', true, song)
            const setFalse = (song) => assoc('selected', false, song)

            const toggledSongs = map(song => length(checkInput(song)) > 0 ? setTrue(song) : setFalse(song), props.gigSelectSongs)
            props.preToggleSongs(toggledSongs)
            }
          }>
          <div className="cf ph3">
            <div className="fl w-100 ph2 pb4">
              <form className="black">
                <div className="mb3">
                  <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
                  <input
                    value={props.gig.name}
                    onChange={e => props.setGigName(e.target.value)}
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    type="text"
                    aria-describedby="name-desc" />
                  <small id="name-desc" className="f6 black-60 db mb2">Name of the event. (ie. "Kenny's 30'th Birthday Throwdown!")</small>
                </div>
                <div className="mb4">
                  <label htmlFor="name" className="f6 b db mb2">Venue </label>
                  <input
                    value={props.gig.venue}
                    onChange={e => props.setGigVenue(e.target.value)}
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    type="text"
                    aria-describedby="name-desc" />
                </div>
                <div className="cf mb3">
                  <div className="fl mr3">
                    <label htmlFor="name" className="f6 b db mb2">Date </label>
                    <input
                      value={props.gig.date}
                      onChange={e => props.setGigDate(e.target.value)}
                      type="date"
                      className="input-reset ba b--black-20 pa2 mb2"/>
                  </div>
                  <div className="fl mr3">
                    <label htmlFor="name" className="f6 b db mb2">Start Time <span className="normal black-60">(optional)</span></label>
                    <input
                      type="time"
                      value={props.gig.startTime}
                      className="input-reset ba b--black-20 pa2 mb2"/>
                  </div>
                </div>
                <div className="mb4">
                  <label htmlFor="name" className="f6 b db mb2">Event Type </label>
                  <select onChange={e => props.setGigEventType(e.target.value)}>
                    <option value="bar">Bar</option>
                    <option value="festival">Festival</option>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="private">Private</option>
                    <option value="wedding">Wedding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb4">
                  <label htmlFor="name" className="f6 b db mb2">Admission <span className="normal black-60">(optional)</span></label>
                  <div className="cf mb2">
                    <div className="fl mr2 pa2 ba tc br1 pointer" value="american">
                      <span className="dn db-ns">All Ages</span>
                    </div>
                    <div className="fl mr2 pa2 ba tc br1 pointer" value="american">
                      <span className="dn db-ns">18+</span>
                    </div>
                    <div className="fl mr2 pa2 ba tc br1 pointer" value="american">
                      <span className="dn db-ns">21+</span>
                    </div>
                  </div>
                  <small id="name-desc" className="f6 black-60 db mb2">What kind of crowd to expect.</small>
                </div>
                <div className="mb3">
                  <label htmlFor="comment" className="f6 b db mb2">Description <span className="normal black-60">(optional)</span></label>
                  <textarea
                    id="comment"
                    onChange={e => props.setGigDescription(e.target.value)}
                    value={props.gig.description}
                    name="comment"
                    className="db border-box hover-black w-100 h3 ba b--black-20 pa2 br2 mb2"
                    aria-describedby="comment-desc"></textarea>
                  <small id="comment-desc" className="f6 black-60">Helpful information to know about this event. <a href="#" className="link underline black-80 hover-blue">Link to more info.</a></small>
                </div>
                <div className="mb3">
                  <label htmlFor="comment" className="f6 b db mb2">Tags <span className="normal black-60">(optional)</span></label>
                  <textarea
                    id="comment"
                    onChange={e => props.setGigTags(e.target.value)}
                    value={props.gig.tags}
                    name="comment"
                    className="db border-box hover-black w-100 h2 ba b--black-20 pa2 br2 mb2"
                    aria-describedby="comment-desc"></textarea>
                  <small id="comment-desc" className="f6 black-60">Keywords to help us pick the best songs for your setlist.</small>
                </div>
              </form>
            </div>
          </div>
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
          <div className="mw9 center bb">
            <div className="cf ph2-ns">
              <div className="fl w-75 ph3 pb4">
                <span className="f4 fw1 mr3">Selected Songs: {filter(song => song.selected, props.gigSelectSongs).length} of {props.gigSelectSongs.length}</span>
                <button className="f6 bg-white ba b--black dim pointer pv1 black" type="submit">View Selected</button>
              </div>
            </div>
          </div>
          <div className="mw9 center pt2 ph3-ns bt bw2 b--black-10">
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
          <div className="cf ph3 bt">
            <div className="fl w-40 ph2 pv4">
              <div className="f4 fw1">
                Gig Information
                <ul className="list pl0">
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Event</label><br />
                    <span className="f5">{props.gig.name}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">When</label><br />
                    <span className="f5">{props.gig.date}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Event Type</label><br />
                    <span className="f5">{props.gig.eventType}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Venue</label><br />
                    <span className="f5">{props.gig.venue}</span><br />
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Addmision</label><br />
                    <span className="f5">All Ages</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Description</label><br />
                    <span className="f6">{props.gig.description}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Tags</label><br />
                    <span className="f6">family, outdoor, fun, dance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fl w-60 ph4 pv4">
              <div className="f4 fw1">
                Setlist
                <ul className="list pl0">
                  <ConfirmSetlist />
                </ul>
              </div>
            </div>
          </div>
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
