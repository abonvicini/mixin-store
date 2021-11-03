import React from 'react';
import CartItem from './CartItem';
import { Container, Divider, Typography } from '@mui/material';
import { containerCart, containerCardCart, textCardCart } from './styles';

const CartList = ({ cart, totalPriceCart }) => {
  return (
    <Container sx={containerCart}>
      <Container sx={containerCardCart}>
        {cart.map((cartItem) => (
          <CartItem {...cartItem} />
        ))}
      </Container>
      <Divider sx={{ margin: '1em 0' }} />
      <Typography variant="body" sx={textCardCart}>
        Total: {'$'}
        {totalPriceCart()}
      </Typography>
    </Container>
  );
};

export default CartList;
