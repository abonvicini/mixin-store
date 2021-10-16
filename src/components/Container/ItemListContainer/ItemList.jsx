import { Divider, Typography } from '@mui/material';
import React from 'react';
import Item from './Item';
import styles from './styles/ItemList.module.css';
import { useParams } from 'react-router';

const ItemList = ({ stock = [] }) => {
  const { categoryId } = useParams();
  return (
    <div>
      <>
        {categoryId === 'banqueta' ? (
          <Typography className={styles.title} variant="h4" component="h1">
            Banquetas
          </Typography>
        ) : categoryId === 'silla' ? (
          <Typography className={styles.title} variant="h4" component="h1">
            Sillas
          </Typography>
        ) : (
          <Typography className={styles.title} variant="h4" component="h1">
            Home
          </Typography>
        )}
      </>
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
