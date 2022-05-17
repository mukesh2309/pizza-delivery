import React from "react";
import Product from "../components/Product";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";

function Products(props) {
  // const { Name } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const getIdHandler = (e) => {
    props.getPId(e);
  };
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/codersgyan/ecommerce-rest-apis-node/main/database/products.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        setProducts(product);
      });
  }, []);

  return (
    <div className="container mx-auto px-2 md:px-4 mt-10 pb-12">
      <h1 className="text-xl font-bold mb-8 md:text-2xl lg:text-4xl sm:text-xl ">
        Products
      </h1>
      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {products.map((p) => (
          <Product key={p._id} product={p} getId={getIdHandler} />
        ))}
      </div>
    </div>
  );
}

export default Products;
