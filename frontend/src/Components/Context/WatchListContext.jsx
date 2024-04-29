import React, { createContext, useState, useContext} from 'react'

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
  
    const addToWatchlist = (movie) => {
      setWatchlist([...watchlist, movie]);
    };
  
    const removeFromWatchlist = (movieId) => {
      setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
    };
  
    return (
      <WatchListContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
        {children}
      </WatchListContext.Provider>
    );
  };
  

  export const useWatchlist = () => useContext(WatchListContext);