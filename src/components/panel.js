import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ButtonBasic from '../components/button-basic'

const Panel = (props) => {
  return (
    <div className="br2 b--black-20 ba bg-white card-shadow">
      <header className="cf ph3 bb b--black-20">
        <div className="fl w-75 ph2 pv4">
          <span className="f3">New Event</span>
        </div>
        <div className="fl w-25 ph2 pv4">
          <Link to="/project/gigs" className="fr">
            <ButtonBasic bgColor={'white-10'} fgColor={'purple'} text="Cancel" onClick={e => props.dispatch({type:'RESET'})}/>
            {/*<button onClick={e => props.dispatch({type:'RESET'})} className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Cancel</button>
            */}
          </Link>
        </div>
      </header>
      <div className="cf ph3">
        <div className="fl w-100 ph2 pv4">
          <div className="f4">
            {props.instructions}
          </div>
        </div>
      </div>
      {props.children}
      <footer className="center tc pv3 bt b--black-20">
        {props.onPrevious &&
        <div className="ph1 dib">
          <ButtonBasic fgColor={'purple'} bgColor={'white-10'} text={'Back'} onClick={props.onPrevious} />
        </div>
        }
        {props.onNext &&
        <div className="ph1 dib">
          <ButtonBasic fgColor={'purple'} bgColor={'white-10'} text={'Next'} onClick={props.onNext} />
        </div>
        }
        {props.onFinish &&
        <div className="ph1 dib">
          <ButtonBasic fgColor={'white'} bgColor={'purple'} text={'Save'} onClick={props.onFinish} />
        </div>
        }
      </footer>
    </div>
  )
}

Panel.propTypes = {
  onPrevious: React.PropTypes.func,
  onNext: React.PropTypes.func,
  onFinish: React.PropTypes.func,
  instructions: React.PropTypes.string
}

const connector = connect(state => state)

export default connector(Panel)
