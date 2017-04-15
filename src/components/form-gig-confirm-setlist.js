import React from 'react'
import {connect} from 'react-redux'
import {path, map} from 'ramda'
import ListItemGigSetlist from './list-item-gig-setlist'



class ConfirmSetlist extends React.Component {
  render() {
    const props = this.props
    if(!path(['gig','songs'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
      return(
        <div className="cf ph3 bt">
          <div className="fl w-40 ph2 pv4 br">
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
                  <label className="f6 fw6">{props.gig.admission}</label><br />
                  <span className="f5">All Ages</span>
                </li>
                <li className="pb1 mb2">
                  <label className="f6 fw6">Description</label><br />
                  <span className="f6">{props.gig.description}</span>
                </li>
                <li className="pb1 mb2">
                  <label className="f6 fw6">{props.gig.tags}</label><br />
                  <span className="f6">family, outdoor, fun, dance</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="fl w-60 ph4 pv4 f4 fw1">
            Setlist
            <ul className="list pl0">
              {map(song => <ListItemGigSetlist key={song._id} {...song} />, props.gig.songs)}
            </ul>
          </div>
        </div>

      )
    }
  }
}

const connector = connect(state => state)

export default connector(ConfirmSetlist)
