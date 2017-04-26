import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { map, path, pathOr, join } from 'ramda'
import fetch from 'isomorphic-fetch'
import ListItemGigSetlist from '../components/list-item-gig-setlist'
import ButtonBasic from '../components/button-basic'

const deleteGig = (gig) => {
  console.log('gig to delete', gig)
  return fetch(`http://localhost:8080/gigs/${gig._id}`, {
    headers: {
      'Content-Type:': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(gig)
  }).then(res => res.json())
}

class DetailsGig extends React.Component{
  componentDidMount() {
    fetch(`http://localhost:8080/gigs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(gig => this.props.dispatch({type: 'SET_GIG', payload: gig}))
      .then(gig => console.log(gig))
  }
  render() {
    const props = this.props
    if(!path(['gig','songs'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
    return(
      <div>
        <section className="mw8 center pt4 ph3">
          <div className="br2 b--black-20 ba bg-white card-shadow">
            <div className="cf ph3 bb b--black-20">
              <div className="fl w-75 ph2 pv4">
                <span className="f3">{props.gig.name}</span>
              </div>
              <div className="fr tr w-25 ph2 pv4">
                <Link to={`/project/gigs/${this.props.match.params.id}/review-form`}>
                  <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                </Link>
                <a href="#" onClick={e => deleteGig(props.gig)}>
                  <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </a>
                {/*
                <Link to="/project/gigs/add-form">
                  <i className="fa fa-pencil fa-2x ml4" aria-hidden="true"/>
                </Link>
                */}
                <Link to="/project/gigs">
                  <i className="fa fa-close fa-2x ml4" aria-hidden="true"/>
                </Link>
              </div>
            </div>
            <div className="cf ph3">
              <div className="fl w-30 pl2 pr4 pv3">
                <div className="f4">
                  <ul className="mt0 list pl0">
                    <li className="pb1 mb2">
                      <label className="f6 fw5">When</label><br />
                      <span className="f5">{props.gig.date}</span>
                    </li>
                    <li className="pb1 mb2">
                      <label className="f6 fw5">Event Type</label><br />
                      <span className="f5">{props.gig.eventType}</span>
                    </li>
                    <li className="pb1 mb2">
                      <label className="f6 fw5">Venue</label><br />
                      <span className="f5">{props.gig.venue}</span><br />
                    </li>
                    <li className="pb1 mb2">
                      <label className="f6 fw5">Addmision</label><br />
                      <span className="f5">{props.gig.admission}</span>
                    </li>
                    <li className="pb1 mb2">
                      <label className="f6 fw5">Description</label><br />
                      <span className="f6">{props.gig.description}</span>
                    </li>
                    <li className="pb1 mb2">
                      <label className="f6 fw5">Tags</label><br />
                      <span className="f6">{join(', ', props.gig.tags)}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl w-70 pl4 pv3 pr3 bl b--black-20">
                <div className="f4">
                  <label className="f6 fw5">Setlist</label><br />
                  <ul className="list pl0">
                    {map(song => <ListItemGigSetlist key={song._id + song.rating} rating={song.rating} {...song} />, path(['gig', 'songs'], props))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  }
}

const connector = connect(state => state)

export default connector(DetailsGig)
