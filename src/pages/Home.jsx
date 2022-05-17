import Products from "../pages/Products";

const Home = (props) => {
  return (
    <>
      <div className="pb-12 pt-4 md:pt-12">
        <div className="container mx-auto px-2 md:px-4 flex flex-col sm:flex-row-reverse items-center gap-12">
          <div className="md:w-full">
            <img className="md:ml-auto" src="images/pizza.png" alt="pizza" />
          </div>
          <div className="w-full home-text">
            <h5 className="text-md md:text-2xl mb-2 lg:text-4xl">
              <strong>Are You Hungry ?</strong>
            </h5>
            <h1 className="text-3xl md:text-4xl mb-2 lg:text-7xl font-bold">
              Don't wait
            </h1>
            <button className="text-md md:text-2xl font-semi-bold text-white mt-2 px-4  py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white pointer ">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="class-pb-24">
        <Products getPId={(e) => props.getP(e)} />
      </div>
    </>
  );
};

export default Home;
