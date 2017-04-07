import React from 'react'
import {Link} from 'react-router-dom'

const ListItemGig = (props) => {
  return (
      <Link to="/project">
        <li className="ba br3 pa3 mb2 cf">
          <div className="fl w-25-ns">{props.date}</div>
          <div className="fl w-50-ns">
            <p className="ma0">{props.name}</p>
            <p className="ma0 pt2 f6">{props.venue}</p>
          </div>
          <div className="fl w-25-ns tr">19 Songs</div>
        </li>
      </Link>
  )
}

ListItemGig.propTypes = {
  date: React.PropTypes.string,
  name: React.PropTypes.string,
  venue: React.PropTypes.string
}

export default ListItemGig
