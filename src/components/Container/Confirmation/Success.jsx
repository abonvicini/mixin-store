import { Button, Container, Divider, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Item from './Item';
import { useHistory } from 'react-router';

const Success = () => {
  const orderId = JSON.parse(sessionStorage.getItem('orderId'));
  const cartSuccess = JSON.parse(sessionStorage.getItem('cartSuccess'));
  const total = JSON.parse(sessionStorage.getItem('totalPriceCart'));
  const { push } = useHistory();

  useEffect(() => {}, []);

  const handleClick = () => {
    push('/');
    sessionStorage.clear();
  };

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: 'auto',
            margin: '2em',
            borderRadius: '10px',
            height: 'auto',
            marginTop: '3rem',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant={'h5'}
            sx={{ marginBottom: '1em', textAlign: 'center' }}
          >
            Compra realizada con éxito
          </Typography>

          <Typography variant={'h6'} sx={{ textAlign: 'center' }}>
            Numero de la orden:
          </Typography>
          <Typography
            variant={'body1'}
            sx={{ marginBottom: '1em', textAlign: 'center' }}
          >
            {orderId}
          </Typography>
          <Divider sx={{ margin: '0.5em 0' }} />
          <Typography variant={'body1'}>Detalles de tu compra:</Typography>
          <Divider sx={{ margin: '0.5em 0' }} />
          <Typography variant={'body2'}>
            {cartSuccess.map((item) => (
              <Item {...item} />
            ))}
          </Typography>
          <Typography sx={{ marginTop: '1em' }} variant={'h6'}>
            Total: ${total}
          </Typography>
        </Paper>
        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          sx={{ margin: '1em' }}
        >
          Volver al inicio
        </Button>
      </Container>
    </>
  );
};

export default Success;
