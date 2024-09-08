import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    // Obtener los favoritos del localStorage como un objeto
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    
    // Convertir el objeto a un array de valores
    setFavorites(Object.values(storedFavorites));
  }, []);

  return (
    <div>
      <h2>Favorites Page</h2>
      <div className="card-container">
        {favorites.map(dentist => (
          <div key={dentist.id} className="card">
            <h3>{dentist.name}</h3>
            <p>{dentist.email}</p> {/* Cambiado de specialty a email */}
            <Link to={`/dentista/${dentist.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
