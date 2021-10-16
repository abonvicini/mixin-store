import React from 'react';
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import styles from './styles/ItemDetail.module.css';
import Divider from '@mui/material/Divider';

const ItemDetail = ({ id, name, price, img, description }) => {
  const { goBack, push } = useHistory();

  return (
    <>
      <div>
        <Typography className={styles.title} variant="h4" component="h1">
          {name}
        </Typography>
        <Divider variant="middle" />
      </div>
      <Container maxWidth="sm" className={styles.container}>
        <Card>
          <CardMedia component="img" image={img} alt={name} />
        </Card>
      </Container>
      <Container maxWidth="lg" className={styles.container}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
        <CardActions className={styles.cardActions}>
          <Button variant="contained" size="large">
            Precio: ${price}
          </Button>
          <Button variant="outlined" size="large" onClick={() => goBack()}>
            Volver
          </Button>
          <Button variant="outlined" size="large" onClick={() => push('/')}>
            Volver al inicio
          </Button>
        </CardActions>
      </Container>
    </>
  );
};

export default ItemDetail;
