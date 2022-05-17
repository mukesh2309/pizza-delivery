import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import peproni from "../images/peproni.png";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/codersgyan/ecommerce-rest-apis-node/main/database/products.json`
    )
      .then((res) => res.json())
      .then((p) => {
        p.map((e) => {
          if (e._id.$oid == params.id) {
            setProduct(e);
          }
        });
      });
  }, []);
  return (
    <div className="container mx-auto px-4 mt-12">
      <button
        className="mb-12 font-bold text-xl"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <div className="flex flex-col sm:flex-row  gap-12">
        <img src={peproni} alt="" />
        <div>
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-lg">{product.size}</div>
          <div className="font-bold mt-2 text-lg">{product.price}</div>
          <button className="bg-yellow-500 py-1 py-2 px-8 rounded-md font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
