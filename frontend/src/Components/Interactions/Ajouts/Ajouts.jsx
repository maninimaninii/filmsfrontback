import './Ajouts.css'
import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as regularEye, faEye as solidEye } from '@fortawesome/free-regular-svg-icons';
import { faHeart as regularHeart, faHeart as solidHeart } from '@fortawesome/free-regular-svg-icons';
import { faClock as regularClock, faClock as solidClock } from '@fortawesome/free-regular-svg-icons';


export const Ajouts = ({ entite, isConnected }) => {
    const [eyeClicked, setEyeClicked] = useState(false);
    const [heartClicked, setHeartClicked] = useState(false);
    const [clockClicked, setClockClicked] = useState(false);

    const checkIfFilmInWatchlist = async (filmId) => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/watchlist', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const watchlist = await response.json();
          return watchlist.includes(filmId);
        } else {
          console.error('Erreur lors de la récupération de la watchlist:', response.statusText);
          return false;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la watchlist:', error);
        return false;
      }
    };
    

    useEffect(() => {
      const fetchData = async () => {
        const isFilmInWatchlist = await checkIfFilmInWatchlist(entite.id);
        setClockClicked(isFilmInWatchlist);
      };
    
      fetchData();
    }, []);

      const toggleWatchlist = async () => {
        try {
          const token = localStorage.getItem('token'); 
          const method = clockClicked ? 'DELETE' : 'POST'; 
          const response = await fetch('http://localhost:3000/api/watchlist', {
            method,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ filmId: entite.id })
          }); 
          if (response.ok) {
            setClockClicked(!clockClicked); 
          } else {
            console.error('Erreur lors de l\'ajout/suppression de la watchlist:', response.statusText);
          }
        } catch (error) {
          console.error('Erreur lors de l\'ajout/suppression de la watchlist:', error);
        }
      };

    const handleEyeClick = () =>{ setEyeClicked(!eyeClicked);}
    const handleHeartClick = () =>{ setHeartClicked(!heartClicked);}
    const handleClockClick = () =>{ toggleWatchlist();;}


    return (
      <>
        {isConnected && (
          <div className='ajouts'>
            <div className="ajout" >
              <span onClick={handleEyeClick} className={eyeClicked ? 'imag filled' : 'imag'}>
                <FontAwesomeIcon icon={regularEye} />
              </span>
              <p>Vu</p>
            </div>
            <div className="ajout">
              <span onClick={handleHeartClick} className={heartClicked ? 'imag filled' : 'imag'}>
                <FontAwesomeIcon icon={regularHeart} />
              </span>
              <p>Aimer</p>
            </div>
            <div className="ajout">
              <span onClick={handleClockClick} className={clockClicked ? 'imag filled' : 'imag'}>
                <FontAwesomeIcon icon={regularClock} />
              </span>
              <p>Watchlist</p>
            </div>
          </div>
        )}
      </>
    );
  }    