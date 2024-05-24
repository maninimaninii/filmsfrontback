import React from 'react'
import './listitem.css';


export const ListItem = (props) => {
  return (
    <div className="listitem">
      <Link to={`/detailsliste/${props.id}`}></Link>
      <h2>{props.title}</h2>
    </div>
  )
}
