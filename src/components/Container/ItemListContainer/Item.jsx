import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { CartContext } from "../../../context/CartContext";
import GoToCart from "../../../utils/Buttons/GoToCart";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ id, name, description, price, img, category }) => {
  const { isInCart } = useContext(CartContext);
  const { push } = useHistory();
  const { categoryId } = useParams();

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
      {isInCart(id) ? (
        <>
          <GoToCart isForItem={true} idItem={id} />
        </>
      ) : (
        <>
          <CardActions sx={{ justifyContent: "space-around" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#0070E0",
                fontWeight: "bold",
                borderBottom: 1,
              }}
            >
              ${price}
            </Typography>
            <Link to={`/detail/${id}`}>
              <Button size="large">Ver detalles</Button>
            </Link>
            <Button
              variant={categoryId ? "contained" : "outlined"}
              size="small"
              onClick={() => push("/category/silla")}
            >
              {category}
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default Item;
