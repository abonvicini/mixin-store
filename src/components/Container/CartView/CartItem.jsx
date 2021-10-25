import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Typography,
} from '@mui/material';

const CartItem = ({ id, name, price, amount }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <Paper
      variant="outlined"
      sx={{
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1em',
        height: '18em',
      }}
    >
      <CardContent
        sx={{
          width: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4">{name}</Typography>
        <Divider sx={{ margin: '1em 0' }} />
        <Typography variant="body">Valor por unidad: {price}</Typography>
        <Typography variant="body">Cantidad: {amount}</Typography>
        <Typography variant="h6">
          Subtotal: {'$'}
          {price * amount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{}}
          size="large"
          variant="contained"
          color="error"
          onClick={() => removeItem(id)}
        >
          Borrar
        </Button>
      </CardActions>
    </Paper>
  );
};

export default CartItem;
