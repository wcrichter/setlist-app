import React from 'react'

const ButtonBasic = (props) => {
  return (
      <button className="f6 pa2 br2 ba bg-white b--black dim pointer black" type="submit">{props.text}</button>
  )
}

ButtonBasic.propTypes = {
  text: React.PropTypes.string.isRequired,
}

export default ButtonBasic
