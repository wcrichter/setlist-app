import React from 'react'
import ButtonBasic from '../components/button-basic'
import {Link} from 'react-router-dom'

const Splash = (props) => {
  return(
    <div id="splash" className="dt w-100 tc">
      <div className="dtc v-mid">
        <div id="splash-logo" className="mb5">
          <span className="logo-text-light">Intelli</span>
          <span className="logo-text-heavy">gig</span>
        </div>
        <div>
          <Link to="/projects">
            <ButtonBasic bgColor={'black-30'} fgColor={'white'} text="View Projects"/>
          </Link>
        </div>
      </div>
    </div>
  )
}



export default Splash
