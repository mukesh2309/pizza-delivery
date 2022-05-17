import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

const App = () => {
  const [cart, setCart] = useState({});
  // fetch from locastorage
  useEffect(() => {
    const Cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(Cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="md:px-8 sm:px-6 px-4">
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />} exact></Route>
            <Route path="/products/:id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </CartContext.Provider>
      </Router>
    </div>
  );
};

export default App;
