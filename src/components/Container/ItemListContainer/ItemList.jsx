import { Divider, Typography } from '@mui/material';
import React from 'react';
import Item from './Item';
import styles from './styles/ItemList.module.css';

const ItemList = ({ stock = [] }) => {
  return (
    <div>
      <Typography className={styles.title} variant="h4" component="h1">
        Home
      </Typography>
      ;
      <Divider variant="middle" />
      <div className={styles.grid}>
        {stock.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
