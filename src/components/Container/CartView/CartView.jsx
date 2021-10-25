import { Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../../context/CartContext';

const CartView = () => {
  const { cart, removeItem, totalPriceCart } = useContext(CartContext);
  console.log('CartView: ', cart);
  console.log('totalPriceCart: ', totalPriceCart());

  return (
    <div>
      <Container
        maxWidth="md"
        sx={{
          marginTop: '2em',
          display: 'grid',
          gap: '1rem',
          height: 'auto',
        }}
      >
        {cart.map((cartItem) => (
          <CartItem {...cartItem} />
        ))}
      </Container>
      <Typography
        sx={{ marginTop: '2rem', textAlign: 'right', marginRight: '4rem' }}
        variant="h3"
      >
        Total: {'$'}
        {totalPriceCart()}
      </Typography>
    </div>
  );
};

export default CartView;
