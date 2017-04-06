import React from 'react'
import {connect} from 'react-redux'
import {map} from 'ramda'
import {Link} from 'react-router-dom'
import ListItemProject from '../components/list-item-project'

const ProjectsPage = (props) => {
  return (
    <div>
      <section className="mw9 center ph4 pt5 pb1">
        <h1 className="fw1 dib ma0">My Projects</h1>
        <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Project</button>
      </section>
      <div className="mw9 center ph4 pt4">
      {map(project => <ListItemProject key={project.name} {...project} />, props.projects)}
      <ListItemProject imageURL="https://d31fr2pwly4c4s.cloudfront.net/f/7/5/908005_0_cabbage-the-shimmer-band-april_400.jpg" />


      <Link to="/project">
        <div className="pa4 mv3 cf ba br3 black">
          <div className="dib fl w-20">
            <img src={props.imageURL} className="ba br-100 w-100" alt="" />
          </div>
          <div className="dib fl w-80 pl4">
            <h1 className="f3 fw1 mt2 mb4">Project Name</h1>
            <p className="f5 fw1 mv0">Next Gig:</p>
            <p className="f4 fw1 mt2">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</p>
          </div>
        </div>
      </Link>
      </div>
    </div>
  )
}

const connector = connect(state => state)

export default connector(ProjectsPage)
