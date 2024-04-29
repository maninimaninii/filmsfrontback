import React from 'react';
import './Populaire.css';
import all_films from '../Assets/all_films';
import all_series from '../Assets/all_series';
import { Item } from '../Item/Item';

export const Populaire = () => {

  const shuffled_films = all_films.sort(() => Math.random() - 0.5);
  const selected_films = shuffled_films.slice(0, 9);

  
  const shuffled_shows = all_series.sort(() => Math.random() - 0.5);
  const selected_shows = shuffled_shows.slice(0, 9);

  return (
    <div className='populaire'>
      <h1 className='titre'>Films populaires en ce moment</h1>
      <div className="listeitems">
        {selected_films.map((film) => (
          <Item key={film.id} id={film.id} title={film.title} category={film.category} image={film.image} />
        ))}
      </div><br/><br/>



      <h1 className='titre'>Séries populaires en ce moment</h1>
      <div className="listeitems">
        {selected_shows.map((film) => (
          <Item key={film.id} id={film.id} title={film.title} synopsis={film.synopsis} category={film.category} image={film.image} />
        ))}
      </div>
    </div>
  )
}