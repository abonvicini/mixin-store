import React, { useEffect, useState } from 'react';
import { getStock } from '../../../helpers/getStock';
import Spinner from '../../../helpers/Spinner';
import ItemList from './ItemList';
import styles from './styles/ItemListContainer.module.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getStock()
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
      {loading ? <Spinner /> : <ItemList stock={items} />}
    </div>
  );
};

export default ItemListContainer;
