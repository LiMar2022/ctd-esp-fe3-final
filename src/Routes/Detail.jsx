import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import doctor from '../utils/doctor.jpg';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentistDetail = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`); 
        setDentist(response.data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentistDetail();
  }, [id]);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {dentist ? (
        <div>
          <img src={doctor} alt='doctor-image' />  
          <h3>{dentist.name}</h3>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Detail