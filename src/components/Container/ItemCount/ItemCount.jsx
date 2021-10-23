import React from "react";
import { Button } from "@mui/material";

const ItemCount = ({ amount, stock, setAmount }) => {
  const handleSubtract = () => {
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };
  const handleAdd = () => {
    if (amount !== stock) {
      setAmount(amount + 1);
    }
  };

  return (
    <>
      <Button variant="contained" size="large" onClick={handleSubtract}>
        -
      </Button>
      <Button variant="contained" size="large" onClick={handleSubtract}>
        {amount}
      </Button>
      <Button variant="contained" size="large" onClick={handleAdd}>
        +
      </Button>
    </>
  );
};

export default ItemCount;
