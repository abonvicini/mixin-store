import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greetings }) => {
  return (
    <div className="mainSection">
      <h3>{greetings}</h3>
    </div>
  );
};

export default ItemListContainer;
