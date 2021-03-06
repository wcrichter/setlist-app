import React from 'react'
import {Link} from 'react-router-dom'

const ListItemGig = (props) => {
  return (
      <Link to={`/project/gigs/${props._id}`}>
        <li className="pv3 mb2 cf b--black-20 purple bb">
          <div className="fl w-25-ns">{props.date}</div>
          <div className="fl w-50-ns">
            <p className="ma0">{props.name}</p>
            <p className="ma0 pt2 f6">{props.venue}</p>
          </div>
          <div className="fl w-25-ns tr">{props.songs.length} Song(s)</div>
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
