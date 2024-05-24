import React, { useEffect } from 'react'
import './ListeItems.css';

export const ListeItems = () => {

    const [list, setList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchList = async () => {
          try {
            const response = await fetch(`http://localhost:3000/api/lists/${id}`);
            if (response.ok) {
              const list = await response.json();
              setList(list); 
            } else {
              console.error('Erreur lors de la récupération de la list:', response.statusText);
            }
          } catch (error) {
            console.error('Erreur lors de la récupération de la list:', error);
          }
        };
      
        fetchList();
      }, []);

      const [films, setFilms] = useState([]);

      useEffect(() => {
        const fetchFilmsDetails = async () => {
          try {
            const filmsData = await Promise.all(
              list.map(async (filmId) => {
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
      }, [list]); 
    
    
      return (
        <div className='list'>
        
          <h2 className='titrewl'>Cette liste contient {list.length} films</h2>
          <div className='listeitemswl'>
            {films.map((film) => (
              <Item key={film.id} id={film.id} title={film.title} category={film.category} image={film.image_url} />
            ))}
          </div>
        </div>
      );
    };
