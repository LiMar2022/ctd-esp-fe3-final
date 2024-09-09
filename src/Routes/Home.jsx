import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setDentists(response.data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </main>
  )
}

export default Home