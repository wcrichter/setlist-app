import React from 'react'
import { connect } from 'react-redux'
import { map, length, sortBy, prop, filter } from 'ramda'
import ListItemSong from '../components/list-item-song'
import fetch from 'isomorphic-fetch'


class SongsPage extends React.Component{

  componentDidMount() {
    fetch('http://localhost:8080/songs')
      .then(res => res.json())
      .then(songs => this.props.dispatch({
        type: 'LOAD_SONGS',
        payload: filter(song => song.projectId === this.props.project._id, songs)
      }))
    this.props.dispatch({type: 'SET_CURRENT_COMPONENT', payload:'/project/songs'})
  }

  render() {
    const props = this.props
    const artistSort = sortBy(prop('artist'))
    return (
        <div>
          <section className="mw10 center ph3 bb b--black-30 header-shadow">
            <div className="mw8 center ph3-ns cf">
              <div className="fl w-50 pv4">
                <span className="f4">All Songs ({[props.songs.length]})</span>
              </div>
              <div className="fl w-50 pv4">
              </div>
            </div>
          </section>
          <section className="mw8 center pt2 ph3">
            <ul className="list pl0 center">
              {map(li => <ListItemSong key={li._id} {...li} />, artistSort(props.songs))}
            </ul>
          </section>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs,
  project: state.project
})

const connector = connect(mapStateToProps)

export default connector(SongsPage)
