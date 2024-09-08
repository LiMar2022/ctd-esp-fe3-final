import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import DentistDetail from './Components/DentistDetail.jsx';
import Favorites from './Components/Favorites.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dentista/:id" element={<DentistDetail />} />
          <Route path="/favs" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
