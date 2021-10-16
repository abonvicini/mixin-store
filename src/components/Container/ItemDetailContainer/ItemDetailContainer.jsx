import React, { useEffect, useState, useParams } from 'react';
import { getItems } from '../../../helpers/getItems';
import Spinner from '../../../helpers/Spinner';
import ItemDetail from './ItemDetail';
import styles from './styles/ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  // const {itemId} = useParams()

  useEffect(() => {
    setLoading(true);

    getItems()
      .then((res) => {
        setItem(res.find((prod) => prod.price === 500));
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.mainSection}>
      {loading ? <Spinner /> : <ItemDetail {...item} />}
    </div>
  );
};

export default ItemDetailContainer;
