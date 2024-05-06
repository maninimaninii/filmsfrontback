import './Interractions.css'
import React, { useEffect, useState } from 'react'
import Stars from './Stars/Stars'
import { Ajouts } from './Ajouts/Ajouts'
import { Link } from 'react-router-dom'

export const Interractions = ({entite}) => {
    const [isConnected, setIsConnected] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsConnected(!!token);
    }, []);

  return (
    <div className='Interractions'>
      <Stars/>
      <hr/>
      {!isConnected && <p className="messg">Vous devez vous connecter  <Link to='/login'>ici</Link> pour accéder au reste des fonctionnalités. </p>}
      <Ajouts entite={entite} isConnected={isConnected} />
      <hr/>
      <div className='enbas'>Partager</div>

      <div className='enbas'>Ajouter à la liste</div>

    </div>
  )
}
