import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { reducer } from "../reducers/reducer";

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];

const initialState = {
  theme: false, 
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




