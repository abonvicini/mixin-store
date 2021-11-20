import { Divider } from '@mui/material';
import React, { Fragment } from 'react';

const Item = ({ name, price, id, amount }) => {
  return (
    <Fragment key={id}>
      <p>{name}</p>
      <p>Precio: ${price}</p>
      <p>Cantidad: {amount}</p>
      <Divider sx={{ margin: '0.5em 0' }} />
    </Fragment>
  );
};

export default Item;
