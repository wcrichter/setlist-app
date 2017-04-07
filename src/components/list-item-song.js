import React from 'react'
import {Link} from 'react-router-dom'

const ListItemSong = (props) => {
  return (
      <Link to="/project/songs/song-details">
        <li className="ba br3 pa3 mb2 cf">
          <div className="fl w-25-ns">{props.artist}</div>
          <div className="fl w-50-ns">
            <p className="ma0">{props.title}</p>
          </div>
          <div className="fl w-25-ns tr"><i className="fa fa-plus" aria-hidden="true"/></div>
        </li>
      </Link>
  )
}

ListItemSong.propTypes = {
  artist: React.PropTypes.string,
  title: React.PropTypes.string
}

export default ListItemSong
