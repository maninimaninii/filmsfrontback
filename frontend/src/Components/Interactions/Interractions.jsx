import './Interractions.css'
import React from 'react'
import Stars from './Stars/Stars'
import { Ajouts } from './Ajouts/Ajouts'

export const Interractions = ({entite}) => {
  return (
    <div className='Interractions'>
      <Stars/>
      <hr/>
      <Ajouts entite={entite}/>
      <hr/>
      <div className='enbas'>Partager</div>

      <div className='enbas'>Ajouter à la liste</div>

    </div>
  )
}
