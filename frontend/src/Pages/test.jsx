import React, { useState, useEffect } from 'react';

const Test = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:3000/api/essai';
        const response = await fetch(url);
        const data = await response.json();
        setUserId(data.userId); // Extrayez l'ID de l'objet reçu
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>ID de l'utilisateur:</h1>
      {userId && <p>{userId}</p>} {/* Vérifiez si userId est défini avant de l'afficher */}
    </div>
  );
};

export default Test;
