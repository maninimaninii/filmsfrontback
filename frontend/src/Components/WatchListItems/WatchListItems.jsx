import React, { useState, useEffect } from 'react';
import './WatchListItems.css';
import { Item } from '../Item/Item';

export const WatchListItems = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [redirectMessage, setRedirectMessage] = useState('');

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        if (!token || new Date() > new Date(tokenExpiration)) {
         
          setRedirectMessage('Vous devez vous connecter pour accéder à cette page. Vous serez redirigé dans 3 secondes...');
          setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiration');
            window.location.href = '/login';
          }, 3000);
          return;
        }
        const response = await fetch('http://localhost:3000/api/watchlist', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const watchlist = await response.json();
          setWatchlist(watchlist); 
        } else {
          console.error('Erreur lors de la récupération de la watchlist:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la watchlist:', error);
      }
    };
  
    fetchWatchlist();
  }, []);

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilmsDetails = async () => {
      try {
        const filmsData = await Promise.all(
          watchlist.map(async (filmId) => {
            const response = await fetch(`http://localhost:3000/api/films/${filmId}`); 
            return response.json();
          })
        );
        setFilms(filmsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails des films:', error);
      }
    };

    fetchFilmsDetails();
  }, [watchlist]); 

  return (
    <div className='watchlist'>
      {redirectMessage && <p className='messg'>{redirectMessage}</p>}
    
      <h2 className='titrewl'>Vous voulez voir {watchlist.length} films</h2>
      <div className='listeitemswl'>
        {films.map((film) => (
          <Item key={film.id} id={film.id} title={film.title} category={film.category} image={film.image_url} />
        ))}
      </div>
    </div>
  );
};
