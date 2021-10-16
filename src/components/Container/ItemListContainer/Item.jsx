import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './styles/Item.module.css';

const Item = ({ id, name, description, price, img, category }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={img} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">${price}</Button>
        <Link className={styles.noDecoration} to={`/detail/${id}`}>
          <Button size="large">Ver detalles</Button>
        </Link>
        <Button variant="outlined" size="small">
          {category}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
