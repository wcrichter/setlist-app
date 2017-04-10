import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { map } from 'ramda'
import ListItemGigSetlist from '../components/list-item-gig-setlist'
import ButtonBasic from '../components/button-basic'

const DetailsGig = (props) => {
  return (
    <div>
      <section className="mw9 center pt4 ph4-ns">
        <div className="ba">
          <div className="cf ph3 bb">
            <div className="fl w-75 ph2 pv4">
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
            <div className="fl w-40 ph2 pv4 br">
              <div className="f4 fw1">
                Gig Information
                <ul className="list pl0">
                  <li className="pb1 mb2">
                    <label className="f6 fw6">When</label><br />
                    <span className="f5">{props.gig.date}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Event Type</label><br />
                    <span className="f5">{props.gig.type}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Venue</label><br />
                    <span className="f5">{props.gig.venue}</span><br />
                    <span className="f6">Street Address</span><br />
                    <span className="f6">City, ST</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Addmision</label><br />
                    <span className="f5">{props.gig.admission}</span>
                  </li>
                  <li className="pb1 mb2">
                    <label className="f6 fw6">Notes</label><br />
                    <span className="f6">Hopped up on catnip. Lay on arms while youre using the keyboard wake up wander around the house.</span>
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
                  {/*
                  {map(li => <ListItemGigSetlist {...li} />, props.gig.setlist)}
                  */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

const connector = connect(state => state)

export default connector(DetailsGig)
