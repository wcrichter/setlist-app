import React from 'react'

const SelectorItemSong = (props) => {

  return (
    <li
      className={`ba b--black-30 br3 pa3 mb2 cf pointer bg-${!props.selected ? "black-05" : "yellow"}`}
      onClick={props.onSelected}
      >
      <div className="fl w-25-ns">{props.artist}</div>
      <div className="fl w-50-ns">
        <p className="ma0">{props.title}</p>
      </div>
      <div className="fl w-25-ns tr">
        {!props.selected ? <i className="fa fa-plus" aria-hidden="true"/> : <i className="fa fa-minus" aria-hidden="true"/> }
      </div>
    </li>
  )
}

SelectorItemSong.propTypes = {
  artist: React.PropTypes.string,
  title: React.PropTypes.string
}

export default SelectorItemSong
