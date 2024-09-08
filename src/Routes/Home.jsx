import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map(dentist => (
          <div key={dentist.id} className="card">
            <h3>{dentist.name}</h3>
            <p>{dentist.email}</p> {/* Puedes ajustar esto según la información que desees mostrar */}
            <Link to={`/dentista/${dentist.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home