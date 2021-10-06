import React from "react";
import { CartState } from "../../context/Context";
import Rating from "../Filters/Rating";

const SingleProd = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <div className="card h-100">
        <img src={prod.image} className="card-img-top" alt={prod.name} />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text">
            <span>Rs {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>2 day's delivery</div>
            )}

            <Rating rating={prod.ratings} />
          </p>

          {cart.some((product) => product.id === prod.id) ? (
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
              className="btn btn-danger"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
              className="btn btn-success"
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProd;
