import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { map, length, sort, sortBy, prop, lensPath, path, descend } from 'ramda'
import ListItemGig from '../components/list-item-gig'

class ListGigs extends React.Component{
  componentDidMount() {
    fetch('http://localhost:8080/gigs')
      .then(res => res.json())
      .then(gigs => this.props.dispatch({
        type: 'SET_GIGS',
        payload: gigs
      }))
  }
  render() {
    const props = this.props
    const gigSort = sort(descend(prop('date')))
    return (
      <div>
        <section className="mw9 center ph3-ns bb">
          <div className="cf ph2-ns bg">
            <div className="fl w-50 ph2 pv4">
              <span className="f4 fw1">All Gigs ({[props.gigs.length]})</span>
            </div>
            <div className="fl w-50 ph2 pv4">
              <Link to="/project/gigs/add">
                <button
                  className="f6 fr bg-white ba b--black dim pointer pv1 black"
                  type="submit"
                  onClick={(e) => props.dispatch({type: 'CLEAR_GIG_STATE'})}>Add Gig</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="mw9 center pt2 ph3-ns bt bw2 b--black-10">
          <ul className="list pl0 center ph3-ns">
            {map(li => <ListItemGig key={li.name}{...li} />, gigSort(props.gigs))}
            <li className="ba br3 pa3 mb2 cf bg-black-10">
              <div className="fl w-25-ns">Date</div>
              <div className="fl w-50-ns">
                <p className="ma0">Event Name</p>
                <p className="ma0 pt2 f6">Location</p>
              </div>
              <div className="fl w-25-ns tr">19 Songs</div>
              <div className="fl w-100 bt pt2 mt3"><i className="fa fa-thumbs-up mr2" aria-hidden="true"/>How was the show? Provide some feedback to help plan your next gig!</div>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

const connector = connect(state => state)

export default connector(ListGigs)
