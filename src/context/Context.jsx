import React, { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./Reducer";
import faker from "faker";

const Cart = createContext();

const Context = (props) => {
  // create random data with the help of faker npm package
  const product = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([0, 1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
