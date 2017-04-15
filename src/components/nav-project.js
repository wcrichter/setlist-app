import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {equal} from 'ramda'

const NavProject = (props) => {
  const routeClass = (route) => props.path === route ? `fl w-third tc f4 bg-back-05` : `fl w-third tc f4 bg-black-10`
  return (
    <section className="mw10 center">
      <div className="cf">
        <Link to="/project" className="link no-underline">
          <div className={routeClass('/project')}>
            <p className="dib v-mid">Overview</p>
          </div>
        </Link>

        <Link to="/project/gigs" className="link no-underline">
          <div className={routeClass('/project/gigs')}>
            <p className="dib v-mid">Gigs</p>
          </div>
        </Link>

        <Link to="/project/songs" className="link no-underline">
          <div className={routeClass('/project/songs')}>
            <p className="dib v-mid">Songs</p>
          </div>
        </Link>
      </div>
    </section>
  )
}

const connector = connect(state => state)

export default connector(NavProject)
