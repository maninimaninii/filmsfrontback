import React, { useEffect, useState } from 'react';
import './Populaire.css';
import { Item } from '../Item/Item';

export const Populaire = () => {

  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Gérer le cas où aucun token n'est trouvé, par exemple rediriger vers la page de connexion
          return;
        }
  
        const response = await fetch('http://localhost:3000/api/films', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Inclure le token dans l'en-tête Authorization
          }
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des films');
        }
        const data = await response.json();
        const shuffledFilms = shuffleAndSelectItems(data);
        setFilms(shuffledFilms);
      } catch (error) {
        console.error('Erreur lors de la récupération des films:', error);
      }
    };
  
    const fetchSeries = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          
          return;
        }
  
        const response = await fetch('http://localhost:3000/api/series', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des séries');
        }
        const data = await response.json();
        const shuffledShows = shuffleAndSelectItems(data);
        setSeries(shuffledShows);
      } catch (error) {
        console.error('Erreur lors de la récupération des séries:', error);
      }
    };
  
    fetchFilms();
    fetchSeries();
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
