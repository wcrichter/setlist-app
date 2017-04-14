import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const NavMain = (props) => {
  return (
    <header className="mw9 center ph3-ns bb b--black-90 white bg-black-90">
      <div className="cf ph2-ns">
        <div className="fl w-third pa2">
          <Link to="/">
          <p className="dib v-mid link"><i className="fa fa-chevron-left mr1" />Projects</p>
          </Link>
        </div>
        <div className="fl w-third pa2 center tc">
          <p className="dib v-mid">{props.currentProject}</p>
        </div>
        <div className="fl w-third pa2 tr">
          <a href="">
            <p className="dib v-mid">Profile</p>
          </a>
        </div>
      </div>
    </header>
  )
}

const connector = connect(state => state)

export default connector(NavMain)
