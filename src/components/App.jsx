import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Footer from "./Footer";
import Error404 from "../pages/Error404";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import { CartProvider } from "../components/CartContext";

const App = () => {
  const basename = import.meta.env.MODE === 'production' ? '/bmwebdev' : '';
  return (
    <CartProvider>
      <BrowserRouter basename= {basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/Error404" element={<Error404 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
};

export default App;