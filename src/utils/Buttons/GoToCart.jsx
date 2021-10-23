import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styles from "./styles/GoToCart.module.css";

import { Button, CardActions } from "@mui/material";

const GoToCart = ({ isForItem, idItem }) => {
  const { push } = useHistory();
  return (
    <>
      <CardActions
        className={
          isForItem ? styles.cardActionsItem : styles.cardActionsDetail
        }
      >
        {isForItem ? (
          <>
            <Link to={`/detail/${idItem}`}>
              <Button variant="outlined" size="large">
                Ver detalles
              </Button>
            </Link>
            <Button
              variant="contained"
              size="large"
              onClick={() => push("/cart")}
            >
              Ir al carrito
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={() => push("/cart")}
          >
            Ir al carrito
          </Button>
        )}
      </CardActions>
    </>
  );
};

export default GoToCart;
