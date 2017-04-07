import React from 'react'

const BasicButton = (props) => {
  return (
    <div>
      <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
      <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
      <small id="name-desc" className="f6 black-60 db mb2">Name of the event. (ie. "Kenny's 30'th Birthday Throwdown!")</small>
    </div>
  )
}

export default BasicButton
