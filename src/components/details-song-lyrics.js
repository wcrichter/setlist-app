import React from 'react'
import {map, split, path} from 'ramda'
import {connect} from 'react-redux'

class SongLyrics extends React.Component {
  render() {
    const props = this.props
    if(!path(['song', 'lyrics'], props)) {
      return(
        <div><h1>Loading Lyrics</h1></div>
      )
    } else {
    return(
      <div>
        {map(line => <p>{line}</p>, split('/', props.song.lyrics))}
      </div>
    )
    }
  }
}

const connector = connect(state => state)
export default connector(SongLyrics)
