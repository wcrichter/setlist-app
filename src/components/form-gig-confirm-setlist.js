import React from 'react'
import {connect} from 'react-redux'
import {path, map} from 'ramda'
import ListItemGigSetlist from './list-item-gig-setlist'



class ConfirmSetlist extends React.Component {
  render() {
    const props = this.props
    if(!path(['gig','songs'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
      return(
        <ul className="list pl0">
          {map(song => <ListItemGigSetlist key={song._id} {...song} />, props.gig.songs)}
        </ul>
      )
    }
  }
}

const connector = connect(state => state)

export default connector(ConfirmSetlist)
