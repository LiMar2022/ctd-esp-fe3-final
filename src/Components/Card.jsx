import React from "react";
import { Link } from 'react-router-dom';
import doctor from '../utils/doctor.jpg';
import { useContextGlobal } from "../utils/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'; 
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
const Card = ({ dentist }) => {
  const {state, dispatch} = useContextGlobal();
  const isAlreadyFavorite = state.favs.some(fav => fav.id === dentist.id);
  
  const addFav = ()=>{
    dispatch({ type: isAlreadyFavorite ? "REMOVE_FAVORITES" : "ADD_FAVORITES", payload: dentist });
  }

  return (
    <div className="card">
      <Link to={'/dentista/' + dentist.id}>
        <h4>{dentist.id}</h4>
        <img src={doctor} alt='doctor-image' />  
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
      </Link>

      <button onClick={addFav} className="favButton">
        {isAlreadyFavorite ? (
          <FontAwesomeIcon icon={faStarSolid} style={{ color: "#ffc800" }} />
        ) : (
          <FontAwesomeIcon icon={faStarRegular} style={{ color: "#FFD43B" }} /> 
        )} 
      </button>
    </div>
  );
};

export default Card;
