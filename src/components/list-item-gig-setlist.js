import React from 'react'
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
const Rating = require('react-rating')
import Rate from 'rc-rate'
import ReactStars from 'react-stars'


const ListItemGigSetlist = (props) => {
  return (
    <li className="cf pb1 mb2 bb b--black-10">
      <div className="fl w-60">
        <span className="f5">{props.title}</span><br />
        <span className="f6">{props.artist}</span>
      </div>
      <div className="fr tr mt2 w-40">
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

export default ListItemGigSetlist
