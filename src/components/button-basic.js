import React from 'react'

const ButtonBasic = (props) => {
  return (
      <button onClick={props.onClick} className={`f6 pa2 br2 ba bg-${props.bgColor} b--${props.fgColor} dim pointer ${props.fgColor}`} type="submit">{props.text}</button>
  )
}

ButtonBasic.propTypes = {
  text: React.PropTypes.string.isRequired,
}

export default ButtonBasic
