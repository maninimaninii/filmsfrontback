import React, { useEffect, useState } from 'react'
import { ListItem } from '../Components/ListItem/ListItem';

export const Listes = () => {

    const[listes, setListes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let url;
              url = 'http://localhost:3000/api/lists';
            const response = await fetch(url);
            const data = await response.json();
            setListes(data);
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          }
        };
    
        fetchData();
      });




  return (
    <div className="listelistes">
        <div className="liste">
        {listes.map((liste) => (
          <ListItem key={liste.id} title={liste.title} />
        ))}
        </div>
    </div>
  )
}
