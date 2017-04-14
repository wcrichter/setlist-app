import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { map, path, pathOr } from 'ramda'
import fetch from 'isomorphic-fetch'
import ListItemGigSetlist from '../components/list-item-gig-setlist'

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
        <section className="mw9 center pt4 ph4-ns">
          <div className="br2 b--black-20 ba bg-white card-shadow">
            <div className="cf ph3 bb b--black-20">
              <div className="fl w-75 ph2 pv4">
                {console.log('gig name -', props.gig.name)}
                <span className="f3 fw1">{props.gig.name}</span>
              </div>
              <div className="fr tr w-25 ph2 pv4">
                <Link to="/project/gigs/add">
                  <i className="fa fa-pencil fa-2x" aria-hidden="true"/>
                </Link>
                <Link to="/project/gigs">
                  <i className="fa fa-close fa-2x ml4" aria-hidden="true"/>
                </Link>
              </div>
            </div>
            <div className="cf ph3">
              <div className="fl w-30 pl2 pr4 pv4 br b--black-20">
                <div className="f4 fw1">
                  Gig Information
                  <ul className="list pl0">
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
                      <span className="f5">{props.gig.admission}</span>
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
              <div className="fl w-70 pl4 pr3 pv4">
                <div className="f4 fw1">
                  Setlist
                  <ul className="list pl0">
                    {console.log('gig songs -', props.gig.songs)}
                    {map(song => <ListItemGigSetlist key={song._id} {...song} />, path(['gig', 'songs'], props))}
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
