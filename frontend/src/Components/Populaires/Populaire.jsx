import React, { useEffect, useState } from 'react';
import './Populaire.css';
import { Item } from '../Item/Item';

export const Populaire = () => {

  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/films')
      .then(response => response.json())
      .then(data => {
        const shuffledFilms = shuffleAndSelectItems(data);
        setFilms(shuffledFilms);
      })
      .catch(error => console.error('Erreur lors de la récupération des films:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/series')
      .then(response => response.json())
      .then(data => {
        const shuffledShows = shuffleAndSelectItems(data);
        setSeries(shuffledShows);
      })
      .catch(error => console.error('Erreur lors de la récupération des séries:', error));
  }, []);

  const shuffleAndSelectItems = (items) => {
    const shuffledItems = items.sort(() => Math.random() - 0.5);
    return shuffledItems.slice(0, 9);
  };

  return (
    <div className='populaire'>
      <h1 className='titre'>Films populaires en ce moment</h1>
      <div className="listeitems">
        {films.map((film) => (
          <Item key={film.id} id={film.id} title={film.title} category={film.category} image={film.image_url} />
        ))}
      </div><br/><br/>

      <h1 className='titre'>Séries populaires en ce moment</h1>
      <div className="listeitems">
        {series.map((film) => (
          <Item key={film.id} id={film.id} title={film.title} synopsis={film.synopsis} category={film.category} image={film.image_url} />
        ))}
      </div>
    </div>
  )
}
