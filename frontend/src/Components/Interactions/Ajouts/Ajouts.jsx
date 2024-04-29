import './Ajouts.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as regularEye, faEye as solidEye } from '@fortawesome/free-regular-svg-icons';
import { faHeart as regularHeart, faHeart as solidHeart } from '@fortawesome/free-regular-svg-icons';
import { faClock as regularClock, faClock as solidClock } from '@fortawesome/free-regular-svg-icons';
import { useWatchlist } from '../../Context/WatchListContext';


export const Ajouts = ({ entite }) => {
    const [eyeClicked, setEyeClicked] = useState(false);
    const [heartClicked, setHeartClicked] = useState(false);
    const [clockClicked, setClockClicked] = useState(false);
    const { addToWatchlist, removeFromWatchlist } = useWatchlist();


    const handleEyeClick = () =>{ setEyeClicked(!eyeClicked);}
    const handleHeartClick = () =>{ setHeartClicked(!heartClicked);}
    const handleClockClick = () =>{ setClockClicked(!clockClicked); 
                                    addToWatchlist(entite);
                                   
                                }


  return (
    <div className='ajouts'>


        <div className="ajout">
        <span onClick={handleEyeClick} className={eyeClicked ? 'imag filled' : 'imag'}>
            <FontAwesomeIcon icon={eyeClicked ? solidEye : regularEye} />
        </span>
        <p>Vu</p>
        </div>


        <div className="ajout">
        <span onClick={handleHeartClick} className={heartClicked ? 'imag filled' : 'imag'}>
            <FontAwesomeIcon icon={heartClicked ? solidHeart : regularHeart} />
        </span>
        <p>Aimer</p>
        </div>


        <div className="ajout">
        <span onClick={handleClockClick} className={clockClicked ? 'imag filled' : 'imag'}>
            <FontAwesomeIcon icon={clockClicked ? solidClock : regularClock} />
        </span>  
        <p>Watchlist</p> 
        </div>

    </div>
  )
}
