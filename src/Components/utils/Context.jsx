import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTS':
      return {...state, dentists: action.payload}
    case 'CHANGE_THEME':
      return {}
    case 'ADD_FAVORITES':
      return {...state, favs: action.payload}
    default:
      throw new Error('Acción no existe')
  }
}

const initialState = {
  theme: "", 
  dentists: [],
  favs: lsFavs
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({type: 'GET_DENTISTS', payload: response.data})
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };
    fetchDentists();
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  },[state.favs])
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>

  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);




