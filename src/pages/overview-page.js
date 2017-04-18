import React from 'react'
import { connect } from 'react-redux'
import { compose, map, filter, path, join } from 'ramda'

class OverviewPage extends React.Component {
  componentDidMount() {
    fetch('http://localhost:8080/gigs')
      .then(res => res.json())
      .then(gigs => this.props.dispatch({type: 'SET_GIGS', payload: gigs}))
    fetch('http://localhost:8080/songs')
      .then(res => res.json())
      .then(songs => this.props.dispatch({type: 'GET_SONGS_FOR_FORM', payload: songs}))
    this.props.dispatch({type: 'SET_CURRENT_COMPONENT', payload:'/project'})
  }
  render() {
    const props = this.props

    if(!path(['project'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
      return (
        <div id="overview">
          <div className="mw8 center">
            <section>
              <article className="pa4 mt2 cf">
                <div className="dib v-mid fl w-25">
                  <img src={props.project.imageURL} className="ba br-100 w-100" alt=""/>
                </div>
                <div className="dib v-mid fl w-75 w-50-ns pl4">
                  <h1 className="f3 f2-ns fw1 mb0">{props.project.projectName}</h1>
                  <h2 className="f4 f3-ns fw1 mb0 mt2">{props.project.location.city}, {props.project.location.state}</h2>
                  <h2 className="f6 f5-ns fw1 mb0">{join(', ', props.project.genres)}</h2>
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
                        <label className="f6 fw6">Upcoming Gigs:</label><br />
                      </div>
                      <div className="fw1 pt2">
                        {compose(
                          map(gig => <div key={gig._id} className="cf"><span className="fl w-20">{gig.date}</span><span className="fl w-40">{gig.name}</span><span className="fl w-40">{gig.venue}</span></div>),
                          filter(gig => gig.projectId === props.project._id ? gig : null)
                        )(props.gigs)}
                      </div>
                    </div>
                  </div>
                  <div className="fl w-100 w-third-ns pa2">
                    <div className="bg-black-10 ba b--black-30 br2 pa3">
                      <div className="mb3">Total Songs:</div>
                      <div className="f1 fw1">{[props.gigSelectSongs.length]}</div>
                    </div>
                  </div>
                  <div className="fl w-100 w-third-ns pa2">
                    <div className="bg-black-10 ba b--black-30 br2 pa3">
                      <div className="mb3">Total Gigs:</div>
                      <div className="f1 fw1">{[props.gigs.length]}</div>
                    </div>
                  </div>
                  <div className="fl w-100 w-third-ns pa2">
                    <div className="bg-black-10 ba b--black-30 br2 pa3">
                      <div className="mb3">Total Artists:</div>
                      <div className="f1 fw1">12</div>
                    </div>
                  </div>
                  <div className="fl w-50 pa2">
                    <div className="bg-black-10 ba b--black-30 br2 pa3">
                      <div className="mb3">Highest Rated Songs:</div>
                      <ol>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                      </ol>
                    </div>
                  </div>
                  <div className="fl w-50 pa2">
                  <div className="bg-black-10 ba b--black-30 br2 pa3">
                    <div className="mb3">Highest Rated Songs:</div>
                      <ol>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                        <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                      </ol>
                    </div>
                  </div>
                  <div className="fl w-100 pa2">
                    <div className="bg-black-10 ba b--black-30 br2 pa3">
                      <div className="mb3">Gig Frequency:</div>
                    </div>
                  </div>
                  <div className="fl w-100 pa2">
                    <div className="bg-black-10 ba b--black-30 br2 pa3">
                      <div className="mb3">Project Contributors:</div>
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
