import React from 'react'

const ListItemGigSetlist = (props) => {
  return (
    <li className="pb1 mb2 bb b--black-10">
      <span className="f5">{props.title}</span><br />
      <span className="f6">{props.artist}</span>
    </li>
  )
}

export default ListItemGigSetlist
