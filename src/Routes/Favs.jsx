import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    // Obtener los favoritos del localStorage como un objeto
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    
    // Convertir el objeto a un array de valores
    setFavorites(Object.values(storedFavorites));
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favorites.map(dentist => (
          <div key={dentist.id} className="card">
            <h3>{dentist.name}</h3>
            <p>{dentist.email}</p> {/* Cambiado de specialty a email */}
            <Link to={`/dentista/${dentist.id}`}>View Details</Link>
          </div>
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
