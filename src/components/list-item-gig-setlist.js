import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-stars'
import {connect} from 'react-redux'


const ListItemGigSetlist = (props) => {
  return (
    <li className="cf pb1 mb2 bb b--black-10">
      <div className="fl w-70">
        <span className="f5">{props.title}</span><br />
        <span className="f6">{props.artist}</span>
      </div>
      <div className="dib tr mt2 w-30">
        <div className="fl">
          <ReactStars
            value={props.rating}
            count={5}
            onChange={null}
            size={16}
            color2={'#ffd700'}
            edit={false}
          />
        </div>
        <div className="dib tr">
        <Link to={`/project/songs/${props._id}`}>
          <i className="fa fa-file-text-o" aria-hidden="true" />
        </Link>
        </div>
      </div>
    </li>
  )
}

const connector = connect(state => state)

export default connector(ListItemGigSetlist)
