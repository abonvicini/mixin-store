import React, { useContext, useState } from 'react';
import { CartContext } from 'context/CartContext';
import { generateOrder } from 'services/generateOrder';
import Spinner from 'helpers/Spinner';
import { Divider, Input, Typography, Container, Button } from '@mui/material';
import styles from './styles/Checkout.module.css';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const { cart, totalPriceCart, clear } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    tel: '',
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length < 3) {
      alert('Nombre inválido');
      return;
    }
    if (values.apellido.length < 3) {
      alert('Apellido inválido');
      return;
    }
    if (values.email.length < 3) {
      alert('Email inválido');
      return;
    }
    if (values.tel.length < 7) {
      alert('Teléfono inválido');
      return;
    }

    setLoading(true);
    generateOrder(values, cart, totalPriceCart())
      .then((res) => {
        sessionStorage.setItem(`orderId`, JSON.stringify(res));
        sessionStorage.setItem(`cartSuccess`, JSON.stringify(cart));
        sessionStorage.setItem(
          `totalPriceCart`,
          JSON.stringify(totalPriceCart()),
        );
        clear();
        push('/success');
      })
      .catch((err) => {
        console.log('Ocurrio un error: ', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Typography
              sx={{
                margin: '2rem 0',
                textAlign: 'center',
              }}
              variant="h3"
            >
              Complete sus datos
            </Typography>
            <Divider />
            {/* listado de la compra */}
            <Container maxWidth="sm">
              <form onSubmit={handleSubmit} className={styles.formContainer}>
                <Input
                  className="form-control my-2"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleInputChange}
                  fullWidth={'true'}
                  autoFocus={'true'}
                  error={values.nombre.length < 3}
                />

                <Input
                  type="text"
                  placeholder="Apellido"
                  name="apellido"
                  value={values.apellido}
                  onChange={handleInputChange}
                  fullWidth={'true'}
                  error={values.apellido.length < 3}
                />

                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  fullWidth={'true'}
                  error={values.email.length < 3}
                />

                <Input
                  type="text"
                  placeholder="Teléfono"
                  name="tel"
                  value={values.tel}
                  onChange={handleInputChange}
                  fullWidth={'true'}
                  error={values.tel.length < 7}
                />

                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  disabled={
                    values.nombre.length < 3 ||
                    values.apellido.length < 3 ||
                    values.email.length < 3 ||
                    values.tel.length < 7
                  }
                >
                  Finalizar
                </Button>
              </form>
              <Divider />
            </Container>
          </>
        )}
      </>
    </div>
  );
};

export default Checkout;
