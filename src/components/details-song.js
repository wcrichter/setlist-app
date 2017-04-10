import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { map } from 'ramda'
import ListItemGigSetlist from '../components/list-item-gig-setlist'
import ButtonBasic from '../components/button-basic'

class DetailsSong extends React.Component {
  componentDidMount() {
    fetch(`http://localhost:8080/songs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(song => this.props.dispatch({type: 'SET_SONG', payload: song}))
  }
  render() {
    const props = this.props
    return (
      <div>
        <section className="mw9 center pt4 ph4-ns">
          <div className="ba">
            <div className="cf ph3 bb">
              <div className="fl w-75 ph2 pv4">
                <span className="f3 fw1">{props.song.title}</span>
              </div>
              <div className="fr tr w-25 ph2 pv4">
                <Link to="/project/songs/add">
                  <i className="fa fa-pencil fa-2x" aria-hidden="true"/>
                </Link>
                <Link to="/project/songs">
                  <i className="fa fa-close fa-2x ml4" aria-hidden="true"/>
                </Link>
              </div>
            </div>
            <div className="cf ph3 bb">
              <div className="ph2 pv3">
                <div className="f4 fw1">
                  <span className="f4">Song Information</span>
                  <ul className="list pl0">
                    <li className="pb1 mb2">
                      <label className="f6 fw6">When</label><br />
                      <span className="f5">{props.gig.date}</span>
                    </li>
                    <li className="pb1 mb2">
                      <label className="f6 fw6">Artist</label><br />
                      <span className="f5">{props.song.artist}</span>
                    </li>
                    <li className="pb1 mb2">
                      <label className="f6 fw6">Artist</label><br />
                      <span className="f5">{props.song.artist}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ph3 pt2">
              <div className="ph2 pv3">
                <div className="f4 fw1">
                  Lyrics
                  <ul className="list pl0">
                    {props.song.lyrics}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

const connector = connect(state => state)

export default connector(DetailsSong)
