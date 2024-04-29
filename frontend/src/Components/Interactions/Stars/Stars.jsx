import './Stars.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


const Stars = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    if (rating === index){
      setRating(0);
    }else{
      setRating(index);
    }
   
  };

  const stars = [];
 
  for (let i = 1; i <= 5; i++) {
    const starClassName =
      i <= (hoveredRating || rating)
        ? "star filled"
        : "star";
    stars.push(
      <span
        key={i}
        className={starClassName}
        onMouseOver={() => handleMouseOver(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i)}
      >
        <FontAwesomeIcon icon={i <= (hoveredRating || rating) ? solidStar : regularStar} />
      </span>
    );
  }

  return (
    <div className='stars'>
      {stars}
    </div>
  );
};

export default Stars;