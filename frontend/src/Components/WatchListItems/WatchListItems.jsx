import React, { useState, useEffect } from 'react';
import './WatchListItems.css';
import { Item } from '../Item/Item';

export const WatchListItems = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await fetch('http://localhost:3000/api/watchlist', {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        }); 
        if (response.ok) {
          const data = await response.json(); 
          setWatchlist(data); 
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
            const response = await fetch(`http://localhost:3000//api/films/${filmId}`); 
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
      <h2 className='titrewl'>Vous voulez voir {watchlist.length} films</h2>
      <div className='listeitemswl'>
        {films.map((film) => (
          <Item key={film.id} title={film.title} category={film.category} image={film.image_url} />
        ))}
      </div>
    </div>
  );
};
