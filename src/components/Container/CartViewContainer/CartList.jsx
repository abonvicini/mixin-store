import React from 'react';
import CartItem from './CartItem';
import { Button, Container, Divider, Typography } from '@mui/material';
import { containerCart, containerCardCart, textCardCart } from './styles';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';

const CartList = ({ cart, totalPriceCart }) => {
  const { push } = useHistory();
  return (
    <Container sx={containerCart}>
      <Container sx={containerCardCart}>
        {cart.map((cartItem) => (
          <CartItem key={nanoid()} {...cartItem} />
        ))}
      </Container>
      <Button
        onClick={() => push('/checkout')}
        variant="outlined"
        color="success"
        sx={{ padding: '1em', marginBottom: '2em' }}
      >
        Finalizar mi compra
      </Button>

      <Divider sx={{ margin: '1em 0' }} />
      <Typography variant="body" sx={textCardCart}>
        Total: {'$'}
        {totalPriceCart()}
      </Typography>
    </Container>
  );
};

export default CartList;
