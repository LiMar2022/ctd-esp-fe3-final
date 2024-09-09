import React from "react";
import { Link } from 'react-router-dom';
import doctor from './utils/doctor.jpg';

const Card = ({ dentist }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
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
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
