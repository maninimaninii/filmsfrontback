// Dans votre composant React ListeCat
import React, { useState, useEffect } from 'react';
import './CSS/cat.css';
import { Item } from '../Components/Item/Item';

export const ListeCat = (props) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/films')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Erreur lors de la récupération des films:', error));
  }, []);

  return (
    <div>
      <div className='listeitems'>
        {films.map((film) => (
          <Item key={film.id} title={film.title} category={film.category} image={film.image_url} />
        ))}
      </div>
    </div>
  );
};
