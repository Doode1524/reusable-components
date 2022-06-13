import Header from "./Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";

function App() {
  const navigate = useNavigate()

  const navLinks = [
    {text: "Home", path: '/home', href: "Home Page" },
    {text: "About", path: '/about', href: "About Page" },
    {text: "Contact", path: '/contact', href: "Contact Page" },
    {text: "Product", path: '/product', href: "Product Page" },
  ]
  
  return (
    <div>
      <Header navigate={navigate} navLinks={navLinks} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
