import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import DentistDetail from './Components/DentistDetail.jsx';
import Favorites from './Components/Favorites.jsx';
import { routes } from "./Components/utils/routes.js";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.dentist} element={<DentistDetail />} />
          <Route path={routes.favorites} element={<Favorites />} />
          <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
