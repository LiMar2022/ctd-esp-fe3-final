import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from "./Components/utils/routes.js";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx';
import Contact from './Routes/Contact.jsx';
import Home from './Routes/Home.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.dentist} element={<Detail />} />
          <Route path={routes.favorites} element={<Favs />} />
          <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
