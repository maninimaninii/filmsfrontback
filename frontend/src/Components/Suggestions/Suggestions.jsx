import './Suggestions.css'
import React from 'react'
import all_films from '../Assets/all_films';
import all_series from '../Assets/all_series';
import { Item } from '../Item/Item';




export const Suggestions = () => {

  const shuffled_films = all_films.sort(() => Math.random() - 0.5);
  const selected_films = shuffled_films.slice(0, 4);

  
  const shuffled_shows = all_series.sort(() => Math.random() - 0.5);
  const selected_shows = shuffled_shows.slice(0, 5);

  return (
    <div className='suggestions'>
      <h1 className='titresugg'>Vous aimerez aussi</h1>
      <div className="listeitems">
        {selected_films.map((film) => (
          <Item key={film.id} id={film.id} title={film.title} category={film.category} image={film.image} />
        ))}
         {selected_shows.map((film) => (
          <Item key={film.id} id={film.id} title={film.title} synopsis={film.synopsis} category={film.category} image={film.image} />
        ))}
      </div><br/><br/>
    </div>
  )
}
