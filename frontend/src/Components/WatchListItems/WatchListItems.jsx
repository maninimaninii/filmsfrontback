import React from 'react'
import {useWatchlist} from '../Context/WatchListContext';
import { Item } from '../Item/Item';
import './WatchListItems.css'

export const WatchListItems = () => {

    const {watchlist} = useWatchlist()
    
  return (
    <div className='watchlist'>
      <h2 className='titrewl'>Vous voulez voir {watchlist.length} films</h2>
    <div className='listeitemswl'>
        {watchlist.map((film) => (
            <Item key={film.id} title={film.title} category={film.category} image={film.image} />
        ))}            
    </div>
</div>
  )
}
