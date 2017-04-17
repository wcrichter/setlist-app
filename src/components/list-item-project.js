import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {filter, map, compose, join} from 'ramda'


const ListItemProject = (props) => {
  console.log('gigs', props.gigs)
  console.log('project id', props._id)
  return (
    <Link to="/project" >
      <div className="pv4 pb3 cf bb b--black-30 black" onClick={e => props.setProject(props)}>
        <div className="dib fl w-20">
          <img src={props.imageURL} className="ba br-100 w-100" alt="" />
        </div>
        <div className="dib fl w-80 pl4">
          <h1 className="f3 fw1 mt2 mb2">{props.projectName}</h1>
          <h2 className="f6 f5-ns fw1 mt0 mb3">{join(', ', props.genres)}</h2>
          <div className="f5 fw1 mv0">
            <div className="mb2">
              <label className="f6 fw6">Next Gig:</label><br />
            </div>
            <div>
              {compose(
                map(gig => <div key={gig._id} className="cf"><span className="fl w-20">{gig.date}</span><span className="fl w-40">{gig.name}</span><span className="fl w-40">{gig.venue}</span></div>),
                filter(gig => gig.projectId === props._id ? gig : null)
              )(props.gigs)}
            </div>
          </div>
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
