import './Entite.css'
import React from 'react'

export const Entite = (props) => {
    const {entite} = props;
  return (
    <div className='entite'>
        <div className="imggauche">
        <img src={entite.image}/>
        </div>
        <div className="droite">
        <h1> {entite.title}</h1>
        <hr/>
        <p>{entite.synopsis}</p>
        
        </div>
      
    </div>
  )
}
