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
    this.props.dispatch({type: 'SET_CURRENT_COMPONENT', payload:'/project/gigs'}) 
  }
  render() {
    const props = this.props
    const gigSort = sort(descend(prop('date')))
    return (
      <div>
        <section className="mw9 center ph3-ns bb b--black-30 header-shadow">
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
        <section className="mw9 center pt2 ph3-ns">
          <ul className="list pl0 center ph3-ns">
            {map(li => <ListItemGig key={li.name}{...li} />, gigSort(props.gigs))}
          </ul>
        </section>
      </div>
    )
  }
}

const connector = connect(state => state)

export default connector(ListGigs)
