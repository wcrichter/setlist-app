import React from 'react'

const backgroundColor = (props) => {
  'bg-' + props.backgroundColor
}

const ButtonCTA = (props) => {
  return (
      <button className="f6 pa2 br2 ba bg-blue b--black dim pointer white" type="submit">{props.text}</button>
  )
}

export default ButtonCTA
