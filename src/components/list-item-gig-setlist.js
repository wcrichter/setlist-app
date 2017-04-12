import React from 'react'
import {Link} from 'react-router-dom'

const ListItemGigSetlist = (props) => {
  return (
    <li className="cf pb1 mb2 bb b--black-10">
      <div className="fl w-75">
        <span className="f5">{props.title}</span><br />
        <span className="f6">{props.artist}</span>
      </div>
      <div className="fr tr mt2 w-25">
        <Link to={`/project/songs/${props._id}`}>
          <i className="fa fa-file-text-o" aria-hidden="true" />
        </Link>
      </div>
    </li>
  )
}

export default ListItemGigSetlist
