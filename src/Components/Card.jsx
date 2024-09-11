import React from "react";
import { Link } from 'react-router-dom';
import doctor from './utils/doctor.jpg';
import { useContextGlobal } from "./utils/Context";

const Card = ({ dentist }) => {
  //const [toggle, setToggle] = useState(true);
  const {state, dispatch} = useContextGlobal();
  
  const addFav = ()=>{ // Logica para agregar la Card en el localStorage
    const isAlreadyFavorite = state.favs.some(fav => fav.id === dentist.id);
    if (!isAlreadyFavorite) {
      const updatedFavs = [...state.favs, dentist];
      dispatch({type: 'ADD_FAVORITES', payload: updatedFavs})
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
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
