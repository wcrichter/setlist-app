import React from 'react'
import {Link} from 'react-router-dom'
import ButtonBasic from './button-basic'

const PromptGigForm = () => {
  return (
    <div className="cf ph3">
      <div className="fl w-100 ph2 mv4">
        <div className="center tc f3 fw1 mt4 mb5">
          How would you like to build your setlist?
        </div>
        <a href="">
          <div className="pa4 mv3 center cf ba br3 w-80">
            <div className="dib fl w-10">
              <i className="fa fa-magic fa-3x" aria-hidden="true" />
            </div>
            <div className="dib fl w-90 pl4">
              <h1 className="f3 fw1 mt0 mb3">Smart Build</h1>
              <span className="f6 fw1">{`Automatically initialize a setlist based on information you've provided about your gig. Don't worry, you can still edit this selection.`}</span>
            </div>
          </div>
        </a>
        <a href="">
          <div className="pa4 mv3 center cf ba br3 w-80">
            <div className="dib fl w-10">
              <i className="fa fa-list-alt fa-3x" aria-hidden="true" />
            </div>
            <div className="dib fl w-90 pl4">
              <h1 className="f3 fw1 mt0 mb3">Manual Build</h1>
              <span className="f6 fw1">{`Select songs from your project's available song selection.`}</span>
            </div>
          </div>
        </a>
        <div className="tc mt5">
          <Link to="/project/gigs">
            <ButtonBasic text="Nevermind, I'll build one later." />
          </Link>
        </div>
      </div>
    </div>

  )
}

export default PromptGigForm
