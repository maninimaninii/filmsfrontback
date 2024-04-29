import React, { useState, useEffect } from 'react';
import './CSS/cat.css';
import { Item } from '../Components/Item/Item';

export const ListeCat = (props) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (props.category === 'films') {
          url = 'http://localhost:3000/api/films';
        } else {
          url = 'http://localhost:3000/api/series';
        }
        const response = await fetch(url);
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [props.category]);

  return (
    <div className='listecat'>
      <div className='listeitems'>
        {films.map((film) => (
          <Item key={film.id} title={film.title} category={film.category} image={film.image_url} />
        ))}
      </div>
    </div>
  );
};
