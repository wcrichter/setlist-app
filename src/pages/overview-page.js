import React from 'react'
import { connect } from 'react-redux'
import { compose, map, filter, path, join, length, uniq } from 'ramda'


class OverviewPage extends React.Component {
  componentDidMount() {
    fetch('http://localhost:8080/gigs')
      .then(res => res.json())
      .then(gigs => this.props.dispatch({type: 'SET_GIGS', payload: filter(gig => gig.projectId === this.props.project._id, gigs)}))
    fetch('http://localhost:8080/songs')
      .then(res => res.json())
      .then(songs => this.props.dispatch({type: 'GET_SONGS_FOR_FORM', payload: filter(song => song.projectId === this.props.project._id, songs)}))
    this.props.dispatch({type: 'SET_CURRENT_COMPONENT', payload:'/project'})
  }
  render() {
    const props = this.props
    const bgImage = {
      background: `-moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url('http://www.skrenta.com/images/stackoverflow.jpg') no-repeat`,
      background: `-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url('http://www.skrenta.com/images/stackoverflow.jpg') no-repeat`,
      background: `-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url('http://www.skrenta.com/images/stackoverflow.jpg') no-repeat`,
      background: `-o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url('http://www.skrenta.com/images/stackoverflow.jpg') no-repeat`,
      background: `-ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url('http://www.skrenta.com/images/stackoverflow.jpg') no-repeat`,
      background: `linear-gradient(to bottom, rgb(248, 248, 248) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(0, 0, 0, 0.50) 100%), url('${props.project.imageURL}') no-repeat`,
      backgroundSize: 'cover',
    }

    if(!path(['project'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
      return (
        <div id="overview" style={bgImage}>
          <div className="mw8 center">
            <section>
              <article className="pa4 mt2 cf">
                <div className="dib v-mid fl w-25">
                  <img src={props.project.imageURL} className="ba b--black-50 br-100 w-100" alt=""/>
                </div>
                <div className="dib v-mid fl w-75 w-50-ns pl4">
                  <h1 className="f3 f2-ns fw3 mb0">{props.project.projectName}</h1>
                  <h2 className="f4 f3-ns fw3 mb0 mt2">{props.project.location.city}, {props.project.location.state}</h2>
                  <h2 className="f6 f5-ns fw3 mb0">{join(', ', props.project.genres)}</h2>
                </div>
                <div className="dib v-mid fl w-100 w-25-ns">
                  <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Edit Project</button>
                </div>
              </article>
            </section>
            <section>
              <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                  <div className="fl w-100 pa2">
                    <div className="bg-white card-shadow br2 pa3">
                      <div className="mb2 pb2 bb b--black-10">
                        <label className="f6 fw5">Upcoming Gigs</label><br />
                      </div>
                      <div className="pt2">
                        {compose(
                          map(gig => <div key={gig._id} className="cf pb2"><span className="fl w-20">{gig.date}</span><span className="fl w-40">{gig.name}</span><span className="fl w-40">{gig.venue}</span></div>),
                          filter(gig => gig.projectId === props.project._id ? gig : null)
                        )(props.gigs)}
                      </div>
                    </div>
                  </div>
                  <div className="fl w-100 w-third pa2">
                    <div className="bg-white card-shadow br2 pa3">
                      <div className="mb3 pb2 bb b--black-10">
                        <label className="f6 fw5">Total Songs</label>
                      </div>
                      <div className="f1">{[props.gigSelectSongs.length]}</div>
                    </div>
                  </div>
                  <div className="fl w-100 w-third pa2">
                    <div className="bg-white card-shadow br2 pa3">
                      <div className="mb3 pb2 bb b--black-10">
                        <label className="f6 fw5">Total Gigs</label>
                      </div>
                      <div className="f1">{[props.gigs.length]}</div>
                    </div>
                  </div>
                  <div className="fl w-100 w-third pa2">
                    <div className="bg-white card-shadow br2 pa3">
                      <div className="mb3 pb2 bb b--black-10">
                        <label className="f6 fw5">Total Artists</label>
                      </div>
                      <div className="f1">{length(uniq(map(song => song.artist, props.gigSelectSongs)))}</div>
                    </div>
                  </div>
                  <div className="fl w-100-s w-50 pa2">
                    <div className="bg-white card-shadow br2 pa3">
                      <div className="mb3 pb2 bb b--black-10">
                        <label className="f6 fw5">Highest Rated Songs</label>
                      </div>
                      <ul className="list pl0">
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="fl w-100-s w-50 pa2">
                  <div className="bg-white card-shadow br2 pa3">
                      <div className="mb3 pb2 bb b--black-10">
                        <label className="f6 fw5">Most Played Songs</label>
                      </div>
                      <ul className="list pl0">
                        {map(song => <li><span className="f5">{song.title}</span></li>, props.gigSelectSongs)}
                      </ul>
                    </div>
                  </div>
                  <div className="fl w-100 pa2">
                    <div className="bg-white card-shadow br2 pa3">
                      <div className="mb3 pb2 bb b--black-10">
                        <label className="f6 fw5">Gig Frequency</label>
                      </div>
                    </div>
                  </div>
                  <div className="fl w-100 pa2">
                    <div className="bg-white card-shadow br2 pa3">
                      <div className="mb3 pb2 bb b--black-10">
                        <label className="f6 fw5">Project Members</label>
                      </div>
                      <ul className="list pl0 mv0">
                        {map(member => <li className="pb2"><div className="dib">{member.firstName + " " + member.lastName}</div><span className="ph2">-</span><div className="dib black-70 i">{join(', ', member.skills)}</div></li>, props.project.members)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    }
  }
}

const connector = connect(state => state)

export default connector(OverviewPage)
