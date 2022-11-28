import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home";
import About from "./pages/about/about"
import Product from "./pages/products/products";
import Error from "./pages/error/error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;