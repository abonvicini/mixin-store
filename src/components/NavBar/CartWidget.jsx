import React, { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import styles from "./styles/CartWidget.module.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = ({ handleClickCart }) => {
  const { totalItemsCart } = useContext(CartContext);
  return (
    <div className={styles.cart}>
      <ShoppingCartIcon className="cart" onClick={handleClickCart} />
      {totalItemsCart()}
    </div>
  );
};

export default CartWidget;
