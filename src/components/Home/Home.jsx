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
            return (
              <div className="col-md-4 my-2" key={prod.id}>
                <SingleProd prod={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
