import Header from "./Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";

function App() {
  const navigate = useNavigate()
  
  return (
    <div>
      <Header navigate={navigate} />
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
