import React from 'react';
import styles from './styles/ItemListContainer.module.css';

const ItemListContainer = ({ greetings }) => {
  return (
    <div className={styles.mainSection}>
      <h3>{greetings}</h3>
    </div>
  );
};

export default ItemListContainer;
