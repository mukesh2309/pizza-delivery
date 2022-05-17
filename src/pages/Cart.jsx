import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  let total = 0;
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const [priceFetch, setPriceFetch] = useState(false);

  useEffect(() => {
    if (priceFetch) {
      return;
    }
    fetch(
      "https://raw.githubusercontent.com/codersgyan/ecommerce-rest-apis-node/main/database/products.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((p) => {
        setProducts(p);
        setPriceFetch(true);
      });
  }, [cart]);
  const product_id = Object.keys(cart.items);
  const getQty = (prodId) => {
    return cart.items[prodId];
  };
  const increment = (prod_id) => {
    const oldqty = cart.items[prod_id];

    const _cart = { ...cart };
    _cart.items[prod_id] = oldqty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };
  const decrement = (prod_id) => {
    const oldqty = cart.items[prod_id];
    if (oldqty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[prod_id] = oldqty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };
  const getSum = (id, price) => {
    const sum = price * getQty(id);
    total += sum;
    return sum;
  };
  const deleteHandle = (prod_id) => {
    const _cart = { ...cart };
    const qty = _cart.items[prod_id];
    delete _cart.items[prod_id];
    _cart.totalItems -= qty;
    setCart(_cart);
  };
  const handleOrder = () => {
    window.alert("order placed successfully");
    setProducts([]);
    setCart({});
  };
  return !product_id.length ? (
    <img className="mx-auto w-1/2" src="/images/empty-cart.png" />
  ) : (
    <div className="container mx-auto px-24">
      <h1 className="my-12 font-bold">
        <ul>
          {products.map((e) => {
            // console.log(e);
            if (product_id.includes(e._id.$oid)) {
              return (
                <li
                  className="flex  items-center justify-between mb-4"
                  key={e._id.$oid}
                >
                  <div className="flex items-center flex-1">
                    <img className="w-24" src="../images/peproni.png" alt="" />
                    <span className="text-xl font-bold ml-4 w-45">
                      {e.name}
                    </span>
                  </div>
                  <div className="flex items-center flex-1">
                    <button
                      onClick={() => decrement(e._id.$oid)}
                      className="text-2xl font-bold bg-yellow-500 px-6 py-1 rounded-full leading-none"
                    >
                      -
                    </button>
                    <div className="px-4">{getQty(e._id.$oid)}</div>
                    <button
                      onClick={() => {
                        increment(e._id.$oid);
                      }}
                      className="text-2xl font-bold bg-yellow-500 px-6 py-1 rounded-full leading-none"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-lg flex-1">
                    ₹ {getSum(e._id.$oid, e.price)}
                  </span>
                  <button
                    onClick={() => deleteHandle(e._id.$oid)}
                    className="bg-red-500 px-8 text-lg font-bold rounded-lg py-3 text-white"
                  >
                    Delete
                  </button>
                </li>
              );
            }
          })}
          <hr className="my-6" />
          <div className="text-right">
            <div className="text-lg font-bold">
              <b> grand total </b>: ₹ {total}
            </div>
            <div className=" mt-4 bg-yellow-500 px-4 py-3 rounded-full leading-none inline-block font-bold text-lg">
              <button onClick={handleOrder}>Order Now</button>
            </div>
          </div>
        </ul>
      </h1>
    </div>
  );
}

export default Cart;
