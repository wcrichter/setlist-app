import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Panel = (props) => {
  return (
    <div className="ba">
      <header className="cf ph3 bb">
        <div className="fl w-75 ph2 pv4">
          <span className="f3 fw1">New Event</span>
        </div>
        <div className="fl w-25 ph2 pv4">
          <Link to="/project/gigs">
            <button onClick={e => props.dispatch({type:'RESET'})} className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Cancel</button>
          </Link>
        </div>
      </header>
      <div className="cf ph3">
        <div className="fl w-100 ph2 pv4">
          <div className="f4 fw1">
            {props.instructions}
          </div>
        </div>
      </div>
      {props.children}
      <footer className="center tc pv3 bt">
        {props.onPrevious &&
        <button className="f6 mh1 bg-white ba b--black dim pointer black"
          type="submit"
          onClick={props.onPrevious}>
            Previous
        </button>
        }
        {props.onNext &&
        <button className="f6 mh1 bg-white ba b--black dim pointer black"
          type="submit"
          onClick={props.onNext}>
            Next
        </button>
        }
        {props.onFinish &&
        <button className="f6 mh1 bg-white ba b--black dim pointer black"
          type="submit"
          onClick={props.onFinish}>
            Finish
        </button>
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
