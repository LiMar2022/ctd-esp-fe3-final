import React from "react";
import { Link } from 'react-router-dom';
import doctor from './utils/doctor.jpg';

const Card = ({ dentist }) => {
  const [toggle, setToggle] = useState(true);
  const addFav = ()=>{
    // Logica para agregar la Card en el localStorage
    const existingFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    let isAlreadyFavorite = false;
    //const isAlreadyFavorite = existingFavs.some(fav => fav.id === dentist.id);
    for (let i = 0; i < existingFavs.length; i++) {
      if (existingFavs[i].id === dentist.id) {
        isAlreadyFavorite = true;
        break;
      }
    }

    if (!isAlreadyFavorite) {
      existingFavs.push(dentist);
      localStorage.setItem('favorites', JSON.stringify(existingFavs));
    }else alert('This dentist is already in your favorites.');
  }

  return (
    <div className="card">
      <Link to={'/dentista/' + dentist.id}>
        <h4>{dentist.id}</h4>
        <img src={doctor} alt='doctor-image' />  
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
      </Link>

      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {toggle}<button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
