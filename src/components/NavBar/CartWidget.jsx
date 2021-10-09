import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({ handleClickCart }) => {
  return (
    <div>
      <ShoppingCartIcon className="cart" onClick={handleClickCart} />
    </div>
  );
};

export default CartWidget;
