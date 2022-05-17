import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Product(props) {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { product } = props;
  const { $oid } = product._id;
  const addToCart = (e, p) => {
    e.preventDefault();
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[$oid]) {
      _cart.items[$oid] += 1;
    } else {
      _cart.items[$oid] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <Link to={`/products/${$oid}`}>
      <div className="shadow-lg rounded-md">
        <img
          className="w-full rounded-t-md"
          src="./images/peproni.png"
          alt=""
        />
        <div className="py-4 px-2 sm:text-xl md:text-2xl">
          <h2 className=" font-bold pb-2 md:pb-4">{product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-sm text-sm px-2 inline-block sm:text-lg md:text-xl ">
            {product.size}
          </span>
          <div className="flex justify-between items-center py-2 mt-2">
            <span className="font-bold text-lg ">₹ {product.price}</span>
            <button
              disabled={isAdding}
              className={`${
                isAdding ? `bg-green-500` : `bg-yellow-500`
              } text-sm  py-1 px-4 rounded-md font-bold md:text-lg`}
              onClick={(e) => addToCart(e, product)}
            >
              ADD{isAdding ? "ED" : ""}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
