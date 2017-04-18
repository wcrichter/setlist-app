import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-stars'
import {connect} from 'react-redux'


const ListItemGigSetlist = (props) => {
  return (
    <li className="cf pb1 mb2 bb b--black-10">
      <div className="fl w-60">
        <span className="f5">{props.title}</span><br />
        <span className="f6">{props.artist}</span>
      </div>
      <div className="fr tr mt2 w-40">


        <div className="mb4">
          <select onChange={(e) => props.dispatch({type: 'SET_SONG_RATING', payload: {songId: props._id, songRating: e.target.value} })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>


        <ReactStars
          value={props.rating}
          count={5}
          onChange={null}
          size={24}
          color2={'#ffd700'}
          edit={false}
        />
        <Link to={`/project/songs/${props._id}`}>
          <i className="fa fa-file-text-o" aria-hidden="true" />
        </Link>
      </div>
    </li>
  )
}

const connector = connect(state => state)

export default connector(ListItemGigSetlist)
