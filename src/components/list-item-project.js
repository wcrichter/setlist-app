import React from 'react'
import {Link} from 'react-router-dom'

const ListItemProject = (props) => {
  return (
      <Link to="/project">
        <div className="pa4 mv3 cf ba br3 black">
          <div className="dib fl w-20">
            <img src={props.imageURL} className="ba br-100 w-100" alt="" />
          </div>
          <div className="dib fl w-80 pl4">
            <h1 className="f3 fw1 mt2 mb4">{props.name}</h1>
            <p className="f5 fw1 mv0">Next Gig:</p>
            <p className="f4 fw1 mt2">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</p>
          </div>
        </div>
      </Link>
  )
}

ListItemProject.propTypes = {
  imageURL: React.PropTypes.string
}

export default ListItemProject
