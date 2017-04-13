import React from 'react'
import {Link} from 'react-router-dom'

const NavProject = () => {
  return (
    <section className="mw9 center bb b--black-20 bg-black-10">
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
