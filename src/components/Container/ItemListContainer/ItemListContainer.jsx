import React, { useEffect, useState } from 'react';
import { callStock } from '../../../helpers/callStock';
import CircularIndeterminate from '../../../helpers/circularProgress';
import ItemList from './ItemList';
import styles from './styles/ItemListContainer.module.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    callStock()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.mainSection}>
      {loading ? CircularIndeterminate() : <ItemList stock={items} />}
    </div>
  );
};

export default ItemListContainer;
