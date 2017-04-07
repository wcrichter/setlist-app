import React from 'react'
import {Route, Link} from 'react-router-dom'
import GigsPage from '../pages/gigs-page'

const NavProject = () => {
  return (
    <section className="mw9 center bb">
      <div className="cf">
        <div className="fl w-third tc f4">
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

export default NavProject
