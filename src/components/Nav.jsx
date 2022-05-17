import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import logo from "../images/logo.png";
import cartImg from "../images/cart.png";

const Nav = () => {
  const cartStyle = {
    background: "#f08c00",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "10px",
    gap: "10px",
  };
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-2 font-semibold sm:text-xl md:text-2xl ">
        <Link to="/">
          <img className="md:h-20 h-15" src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center gap-4 md:gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <div style={cartStyle}>
                <span>{cart.totalItems}</span>
                <img src={cartImg} alt="cart" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
