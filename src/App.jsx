import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from "./utils/routes.js";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx';
import Contact from './Routes/Contact.jsx';
import Home from './Routes/Home.jsx';
import { useContextGlobal } from './utils/Context';
import './index.css';
import Layout from './Layout/Layout.jsx';

function App() {
  const { state } = useContextGlobal();

  useEffect(() => {
    document.body.className = state.theme ? 'dark' : 'light';
  }, [state.theme]); 

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="/dentista/:id" element={<Detail />} />
        <Route path={routes.favorites} element={<Favs />} />
        <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>}/>
      </Route>
    </Routes>
    </div>
    
  );
}

export default App;
