import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ReactStars from 'react-stars'
import {path} from 'ramda'



class ListItemGigSetlistReview extends React.Component{
  render() {
    const props = this.props
    if(!path(['gig','songs'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
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
            onChange={e => props.dispatch({type: 'SET_SONG_RATING', payload: {id: props.key, rating: e.target.value}})}
            size={24}
            color2={'#ffd700'}
            edit={true}
          />
        </div>
      </li>
    )
  }
}
}


const connector = connect(state => state)

export default connector(ListItemGigSetlistReview)
