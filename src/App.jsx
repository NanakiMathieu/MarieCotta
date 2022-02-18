import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Page404 from './pages/404/Page404';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
