import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import CartList from './CartList';
import { useHistory } from 'react-router';
import { Button, Container, Typography, Divider } from '@mui/material';

const CartViewContainer = () => {
  const { cart, totalPriceCart } = useContext(CartContext);
  const { push } = useHistory();

  return (
    <>
      <Typography
        sx={{
          color: '#1976d2',
          textAlign: 'left',
          padding: '1em',
          paddingBottom: '0.25em',
        }}
        variant="h4"
        component="h1"
      >
        Cart
      </Typography>
      <Divider variant="middle" />
      {cart.length === 0 ? (
        <>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '3em',
            }}
          >
            <Typography sx={{ padding: '6rem 0', fontSize: '2em' }}>
              No hay ningun producto en el Carrito!
            </Typography>
            <Button variant="contained" size="large" onClick={() => push('/')}>
              Volver al inicio
            </Button>
          </Container>
        </>
      ) : (
        <>
          <CartList cart={cart} totalPriceCart={totalPriceCart} />
        </>
      )}
    </>
  );
};

export default CartViewContainer;
