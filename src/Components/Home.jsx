import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // URL correcta de la API
        setDentists(response.data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <div className="card-container">
        {dentists.map(dentist => (
          <div key={dentist.id} className="card">
            <h3>{dentist.name}</h3>
            <p>{dentist.email}</p> {/* Puedes ajustar esto según la información que desees mostrar */}
            <Link to={`/dentista/${dentist.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
