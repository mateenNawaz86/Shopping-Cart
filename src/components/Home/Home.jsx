import React from "react";
import { CartState } from "../../context/Context";
import Filter from "../Filters/Filter";
import SingleProd from "../SingleProd/SingleProd";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <>
      <div className="home">
        <Filter />
        <div className="productContainer">
          {products.map((prod) => {
            return <SingleProd prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
