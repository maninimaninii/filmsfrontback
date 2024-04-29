import React from 'react'
import './CSS/details.css'
import all_films from '../Components/Assets/all_films';
import all_series from '../Components/Assets/all_series';
import { useParams } from 'react-router-dom'
import { Entite } from '../Components/Entite/Entite';
import { Suggestions } from '../Components/Suggestions/Suggestions';
import { Interractions } from '../Components/Interactions/Interractions';

export const Details = () => {
    const {entiteId, category} = useParams();
    let entite;

    if (category === 'film') {
        entite = all_films.find((film) => film.id === parseInt(entiteId));
    } else {
        entite = all_series.find((serie) => serie.id === parseInt(entiteId));
    }


  return (
    <div> 
      <div className="haut">
        <Entite entite={entite} />
        <div className="interractions">
          <Interractions entite={entite}/>
          </div>
      </div>
          
          <Suggestions/>
    </div>
  )
}
