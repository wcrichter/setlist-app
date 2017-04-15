import React from 'react'
import {equals} from 'ramda'

const GigInputDetails = (props) => {
  return(
    <div className="cf ph3">
      <div className="fl w-100 ph2 pb4">
        <form className="black">
          <div className="mb3">
            <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
            <input
              value={props.name}
              onChange={props.onNameChange}
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc" />
            <small id="name-desc" className="f6 black-60 db mb2">Name of the event</small>
          </div>
          <div className="mb4">
            <label htmlFor="name" className="f6 b db mb2">Venue </label>
            <input
              value={props.venue}
              onChange={props.onVenueChange}
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc" />
          </div>
          <div className="cf mb3">
            <div className="fl mr3">
              <label htmlFor="name" className="f6 b db mb2">Date </label>
              <input
                value={props.date}
                onChange={props.onDateChange}
                type="date"
                className="input-reset ba b--black-20 pa2 mb2"/>
            </div>
            <div className="fl mr3">
              <label htmlFor="name" className="f6 b db mb2">Start Time <span className="normal black-60">(optional)</span></label>
              <input
                type="time"
                value={props.startTime}
                className="input-reset ba b--black-20 pa2 mb2"/>
            </div>
          </div>
          <div className="mb4">
            <label htmlFor="name" className="f6 b db mb2">Event Type </label>
            <select onChange={props.onEventTypeChange}>
              <option value="bar">Bar</option>
              <option value="festival">Festival</option>
              <option value="fundraiser">Fundraiser</option>
              <option value="private">Private</option>
              <option value="wedding">Wedding</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb4">
            <label htmlFor="name" className="f6 b db mb2">Admission <span className="normal black-60">(optional)</span></label>
            <div className="cf mb2">
              <div className={`fl mr1 pa2 ba tc br2 w-20 pointer ${equals(props.admission, "All Ages") && 'bg-black white b--black'}`} onClick={props.onAdmissionChangeAll}>
                <span className="dn db-ns">All Ages</span>
              </div>
              <div className={`fl mr1 pa2 ba tc br2 w-20 pointer ${equals(props.admission, "21+") && 'bg-black white b--black'}`} onClick={props.onAdmissionChange21}>
                <span className="dn db-ns">21+</span>
              </div>
            </div>
            <small id="name-desc" className="f6 black-60 db mb2">What kind of crowd to expect.</small>
          </div>
          <div className="mb3">
            <label htmlFor="comment" className="f6 b db mb2">Description <span className="normal black-60">(optional)</span></label>
            <textarea
              id="comment"
              onChange={props.onDescriptionChange}
              value={props.description}
              name="comment"
              className="db border-box hover-black w-100 h3 ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"></textarea>
            <small id="comment-desc" className="f6 black-60">Helpful information to know about this event. <a href="#" className="link underline black-80 hover-blue">Link to more info.</a></small>
          </div>
          <div className="mb3">
            <label htmlFor="comment" className="f6 b db mb2">Tags <span className="normal black-60">(optional)</span></label>
            <textarea
              id="comment"
              onChange={props.onGigTagsChange}
              value={props.gigTags}
              name="comment"
              className="db border-box hover-black w-100 h2 ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"></textarea>
            <small id="comment-desc" className="f6 black-60">Keywords to help us pick the best songs for your setlist.</small>
          </div>
        </form>
      </div>
    </div>
  )
}

GigInputDetails.propTypes = {
  name: React.PropTypes.string,
  onNameChange: React.PropTypes.func,
  venue: React.PropTypes.string,
  onVenueChange: React.PropTypes.func,
  date: React.PropTypes.string,
  onDateChange: React.PropTypes.func,
  startTime: React.PropTypes.string,
  onStartTimeChange: React.PropTypes.func,
  onEventTypeChange: React.PropTypes.func,
  admission: React.PropTypes.string,
  onAdmissionChangeAll: React.PropTypes.func,
  onAdmissionChange21: React.PropTypes.func,
  description: React.PropTypes.string,
  onDescriptionChange: React.PropTypes.func,
  gigTags: React.PropTypes.array,
  onGigTagsChange: React.PropTypes.func,
}

export default GigInputDetails
