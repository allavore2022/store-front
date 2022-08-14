import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import Footer from './components/pages/Footer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

function App() {

  const [cart, setCart] = useState(cartFromLocalStorage);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  return (
    <>
    <BrowserRouter>
      <Navbar cart={ cart } />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store-front" element={<Navigate to="/"/>}/>
        <Route path="/products" element={<Products cart={ cart } setCart={ setCart } />}/>
        <Route path="/cart" element={<Cart cart={ cart } setCart={ setCart } />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
