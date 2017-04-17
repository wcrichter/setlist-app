import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { map, path, pathOr } from 'ramda'
import fetch from 'isomorphic-fetch'
import ListItemGigSetlistReview from '../components/list-item-gig-setlist-review'

const putGig = (gig) => fetch('http://localhost:8080/gigs/' + gig._id, {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT',
  body: JSON.stringify(gig)
})

class FormGigRating extends React.Component{
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
                    {console.log('gig songs -', props.gig.songs)}
                    {map(song => <ListItemGigSetlistReview key={song._id} rating={song.rating} {...song} />, path(['gig', 'songs'], props))}
                  </ul>
                </div>
              </div>
              <div>

              </div>
            </div>
          </section>
        </div>
      )
    }
  }
}


const connector = connect(state => state)

export default connector(FormGigRating)