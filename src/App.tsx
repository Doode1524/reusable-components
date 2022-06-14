import Header from "./Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import React from "react";
import {INavLink} from './types'


function App() {
  const navigate = useNavigate();

  const navLinks: INavLink[] = [
    { text: "Home", path: "/home" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Product", path: "/products" },
  ];

  return (
    <div>
      <Header navigate={navigate} navLinks={navLinks} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
