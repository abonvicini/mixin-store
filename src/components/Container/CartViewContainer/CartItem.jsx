import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';

const CartItem = ({ id, name, price, amount, img }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Card
      sx={{
        width: '300px',
      }}
    >
      <CardMedia
        sx={{ objectFit: 'fit-content' }}
        component="img"
        height="200"
        image={img}
        alt={name}
      />

      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Divider sx={{ margin: '1em 0' }} />
        <Typography variant="body">Valor: {`$${price}`}</Typography>
        <br />
        <Typography variant="body">Cantidad: {amount}</Typography>
        <Divider sx={{ margin: '1em 0' }} />
        <Typography variant="h6">
          Subtotal: {'$'}
          {price * amount}
        </Typography>
      </CardContent>

      <CardActions sx={{ padding: '1em', justifyContent: 'flex-start' }}>
        <Button
          sx={{}}
          size="small"
          variant="contained"
          color="error"
          onClick={() => removeItem(id)}
        >
          Borrar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
