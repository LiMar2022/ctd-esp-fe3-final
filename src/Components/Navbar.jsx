import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes';
import { useContextGlobal } from '../utils/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContextGlobal();

  return (
    <nav className={`navbar ${state.theme ? 'dark' : 'light'}`}>
      <button className="backButton" onClick={() => navigate(-1)}>◀</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
      <Link to={routes.favorites}>
        <h4>Favorites</h4>
      </Link>
      <button onClick={() => dispatch({ type: 'CHANGE_THEME' })}>
        {state.theme ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
      </button>
    </nav>
  )
}

export default Navbar