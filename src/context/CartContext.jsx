import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();
const emptyCart = [];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(emptyCart);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(newCart);
  };

  const clear = () => {
    setCart(emptyCart);
  };

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  const totalItemsCart = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.amount, 0);
  };

  const totalPriceCart = () => {
    return cart.reduce(
      (acc, cartItem) => acc + cartItem.amount * cartItem.price,
      0,
    );
  };

  //Se deja el useEffect para mostrar como funciona el carrito desde la consola
  useEffect(() => {
    console.log('Carrito: ', cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        totalItemsCart,
        cart,
        totalPriceCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
