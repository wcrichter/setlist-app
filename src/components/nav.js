import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="mw9 center ph3-ns bb">
      <div className="cf ph2-ns">
        <div className="fl w-third pa2">
          <Link to="/">
          <p className="dib v-mid link"><i className="fa fa-chevron-left mr1" />Projects</p>
          </Link>  
        </div>
        <div className="fl w-third pa2 center tc">
          <p className="dib v-mid">Band Name</p>
        </div>
        <div className="fl w-third pa2 tr">
          <a href="link">
            <p className="dib v-mid">Profile</p>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Nav
