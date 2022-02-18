import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Page404 from './pages/404/Page404';
import Concept from './pages/Concept/Concept';
import Menu from './pages/Menu/Menu';
import Event from './pages/Event/Event';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/concept" element={<Concept />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
