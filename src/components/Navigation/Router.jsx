import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Counter from '../../components/Counter/Counter';
import Think from '../../screens/Think';
import Product from '../../screens/Product';
import About from '../../screens/About';
import LandingPage from '../../screens/LandingPage';
import Dictionary from '../../screens/DictionaryScreen';


const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/counter" element={<Counter />} />
      <Route exact path="/think" element={<Think />} />
      <Route exact path="/product" element={<Product />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/dictionary" element={<Dictionary />} />
    
    </Routes>
  );
};

export default Router