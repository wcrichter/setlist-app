import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NavProject = (props) => {
  return (
    <section className="mw9 center">
      <div className="cf">
        <div className="fl w-third tc f4 bg-black-05">
          <Link to="/project" className="link no-underline">
            <p className="dib v-mid">Overview</p>
          </Link>
        </div>
        <div className="fl w-third tc f4">
          <Link to="/project/gigs" className="link no-underline">
            <p className="dib v-mid">Gigs</p>
          </Link>
        </div>
        <div className="fl w-third tc f4">
          <Link to="/project/songs" className="link no-underline">
            <p className="dib v-mid">Songs</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

const connector = connect(state => state)

export default connector(NavProject)
