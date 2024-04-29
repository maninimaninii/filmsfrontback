import React, { useState, useEffect } from 'react';
import './CSS/details.css';
import { useParams } from 'react-router-dom';
import { Entite } from '../Components/Entite/Entite';
import { Suggestions } from '../Components/Suggestions/Suggestions';
import { Interractions } from '../Components/Interactions/Interractions';

export const Details = () => {
    const { entiteId, category } = useParams();
    const [entite, setEntite] = useState(null); 

    useEffect(() => {

        const fetchEntiteDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/films/${entiteId}`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des détails de l\'entité');
                }
                const data = await response.json();
                setEntite(data);
            } catch (error) {
                console.error(error);
                
            }
        };

        fetchEntiteDetails(); 
    }, [entiteId, category]);

    return (
        <div> 
            {entite ? ( 
                <div className="haut">
                    <Entite entite={entite} />
                    <div className="interractions">
                        <Interractions entite={entite}/>
                    </div>
                </div>
            ) : (
                <p>Chargement en cours...</p> 
            )}
            <Suggestions/>
        </div>
    );
};
