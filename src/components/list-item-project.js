import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {filter} from 'ramda'

const ListItemProject = (props) => {
  const nextGig = (gigs, projectId) => filter(gig => gig.projectId === projectId ? gig : null, gigs)
  return (
      <Link to="/project" >
        <div className="pv4 mv3 cf bb b--black-30 black" onClick={e => props.setProject(props)}>
          <div className="dib fl w-20">
            <img src={props.imageURL} className="ba br-100 w-100" alt="" />
          </div>
          <div className="dib fl w-80 pl4">
            <h1 className="f3 fw1 mt2 mb4">{props.projectName}</h1>
            <p className="f5 fw1 mv0">Next Gig:</p>
          </div>
        </div>
      </Link>
  )
}

const mapActionsToProps = dispatch => {
  return {
    setProject: (project) => dispatch({type: 'SET_PROJECT', payload: project}),
  }
}

const connector = connect(state => state, mapActionsToProps)

export default connector(ListItemProject)
