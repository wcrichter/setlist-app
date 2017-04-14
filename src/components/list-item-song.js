import React from 'react'
import {Link} from 'react-router-dom'

const ListItemSong = (props) => {
  return (
    <Link to={`/project/songs/${props._id}`}>
      <li className="mb2 pv3 cf b--black-20 bb">
        <div className="fl w-40-ns">{props.artist}</div>
        <div className="fl w-50-ns">
          <p className="ma0">{props.title}</p>
        </div>
        <div className="fl w-10-ns tr"><i className="fa fa-file-text-o" aria-hidden="true"/></div>
      </li>
    </Link>
  )
}

ListItemSong.propTypes = {
  artist: React.PropTypes.string,
  title: React.PropTypes.string
}

export default ListItemSong
