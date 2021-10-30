import React from 'react';
import CartItem from './CartItem';
import { Container, Divider, Typography } from '@mui/material';

const CartList = ({ cart, totalPriceCart }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '4em',
        justifyContent: 'center',
      }}
    >
      <Container
        sx={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, 300px)',
          placeContent: 'center',
          marginBottom: '2em',
        }}
      >
        {cart.map((cartItem) => (
          <CartItem {...cartItem} />
        ))}
      </Container>
      <Divider sx={{ margin: '1em 0' }} />
      <Typography
        sx={{
          margin: '1rem',
          padding: '1rem',
          marginRight: '4rem',
          fontSize: '2rem',
          fontWeight: 600,
          color: '#333',
          alignSelf: 'flex-end',
        }}
        variant="body"
      >
        Total: {'$'}
        {totalPriceCart()}
      </Typography>
    </Container>
  );
};

export default CartList;
