import React from 'react'
import { connect } from 'react-redux'
import { map, length, sortBy, prop } from 'ramda'
import ListItemSong from '../components/list-item-song'
import fetch from 'isomorphic-fetch'

class SongsPage extends React.Component{

  componentDidMount() {
    fetch('http://localhost:8080/songs')
      .then(res => res.json())
      .then(songs => this.props.dispatch({
        type: 'LOAD_GIGS',
        payload: songs
      }))
  }

  render() {
    const props = this.props
    const artistSort = sortBy(prop('artist'))
    return (
        <div>
          <section className="mw9 center ph3-ns bb b--black-30">
            <div className="cf ph2-ns">
              <div className="fl w-50 ph2 pv4">
                <span className="f4 fw1">All Songs ({[props.songs.length]})</span>
              </div>
              <div className="fl w-50 ph2 pv4">
                <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Setlist</button>
              </div>
            </div>
          </section>
          <section className="mw9 center pt2 ph3-ns bt bw2 b--black-05">
            <ul className="list pl0 center ph3-ns">
              {map(li => <ListItemSong key={li._id} {...li} />, artistSort(props.songs))}

            </ul>
          </section>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs
})

const connector = connect(mapStateToProps)

export default connector(SongsPage)
