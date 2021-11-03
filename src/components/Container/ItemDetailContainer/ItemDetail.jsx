import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from 'context/CartContext';
import GoToCart from 'utils/Buttons/GoToCart';
import ItemCount from '../ItemCount/ItemCount';
import styles from './styles/ItemDetail.module.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';

const ItemDetail = ({ id, name, price, img, description, category, stock }) => {
  const { goBack, push } = useHistory();
  const { addItem, isInCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const handleClick = () => {
    const item = {
      id,
      name,
      price,
      category,
      amount,
      img,
    };

    if (amount > 0) {
      addItem(item);
    }
  };

  return (
    <>
      <div>
        <Typography className={styles.title} variant="h4" component="h1">
          {name}
        </Typography>
        <Divider variant="middle" />
      </div>
      <Container maxWidth="sm" className={styles.containerImage}>
        <Card>
          <CardMedia component="img" image={img} alt={name} />
        </Card>
      </Container>
      <Container maxWidth="lg" className={styles.containerInfo}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {description}
            </Typography>
            <Divider
              sx={{
                marginTop: '1em',
                marginBottom: '1em',
              }}
            />
            <Typography variant="body2" color="text.secondary">
              ${`${price} Por unidad`}
            </Typography>
          </CardContent>
        </Card>
        <CardActions className={styles.cardActions}>
          <Button variant="outlined" size="large" onClick={() => goBack()}>
            Volver
          </Button>
          <Button variant="outlined" size="large" onClick={() => push('/')}>
            Volver al inicio
          </Button>
        </CardActions>
        {isInCart(id) ? (
          <GoToCart />
        ) : (
          <>
            <CardActions className={styles.cardActions}>
              <ItemCount amount={amount} stock={stock} setAmount={setAmount} />
            </CardActions>
            <CardActions>
              <Typography variant="h4" color="text.secondary">
                ${price * amount}
              </Typography>
            </CardActions>
            <CardActions>
              <Button variant="contained" size="large" onClick={handleClick}>
                Comprar
              </Button>
            </CardActions>
          </>
        )}
      </Container>
    </>
  );
};

export default ItemDetail;
