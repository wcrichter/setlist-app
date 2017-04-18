import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const NavMain = (props) => {
  return (
    <header className="mw10 center ph3-ns bb b--black-90 white bg-black-90">
      <div className="cf ph2-ns">
        <div className="fl w-third pa2">
          <Link to="/">
          <p className="dib v-mid link white dim"><i className="fa fa-home mr2" /></p>
          </Link>
          <span className="mr2">|</span>
          <Link to="/projects"><p className="dib v-mid link white dim">Projects</p></Link>
        </div>
        <div className="fl w-third pa2 center tc">
          <p className="dib v-mid">{props.project.projectName}</p>
        </div>
        <div className="fl w-third pa2 tr">
          <a href="">
            <p className="dib v-mid white dim"><i className="fa fa-user" /></p>
          </a>
        </div>
      </div>
    </header>
  )
}

const connector = connect(state => state)

export default connector(NavMain)
