import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/details/${props.id}/${props.category}`}>
        <img src={props.image}/>

        <p className='titref'>{props.title}</p></Link>
        
    </div>
  )
}
