import React from 'react'
import './CSS/cat.css';
import all_films from '../Components/Assets/all_films'
import all_series from '../Components/Assets/all_series'
import { Item } from '../Components/Item/Item'


export const ListeCat = (props) => {
    let all;

    if(props.category === 'films'){
         all = all_films;
    }else{
         all = all_series;

    }
  return (
    <div>
        <div className='listeitems'>
            {all.map((film) => (
                <Item key={film.id} title={film.title} category={film.category} image={film.image} />
            ))}            
        </div>
    </div>
  )
}
