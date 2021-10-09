import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './styles/CartWidget.module.css';

const CartWidget = ({ handleClickCart }) => {
  return (
    <div className={styles.cart}>
      <ShoppingCartIcon className="cart" onClick={handleClickCart} />
    </div>
  );
};

export default CartWidget;
