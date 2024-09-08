import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DentistDetail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentistDetail = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`); // URL correcta de la API
        setDentist(response.data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentistDetail();
  }, [id]);

  return (
    <div>
      <h2>Dentist Detail</h2>
      {dentist ? (
        <div>
          <h3>{dentist.name}</h3>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
          {/* Añade más detalles según sea necesario */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DentistDetail;
