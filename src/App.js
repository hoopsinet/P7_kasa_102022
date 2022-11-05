import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "././home/index";
import About from "./about/about"
import Product from "./products/products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;