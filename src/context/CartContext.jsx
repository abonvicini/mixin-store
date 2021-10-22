import React, { createContext } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {

  const logMessage = (message) => {
    console.log(message);
  };

  

  return (
    <CartContext.Provider value={{ logMessage }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
