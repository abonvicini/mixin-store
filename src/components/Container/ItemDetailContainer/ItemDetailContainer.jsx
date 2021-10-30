import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../../firebase/config';
import Spinner from '../../../helpers/Spinner';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const products = db.collection('products');
    const item = products.doc(itemId);

    item
      .get()
      .then((res) => {
        setItem({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId, setLoading]);

  return <>{loading ? <Spinner /> : <ItemDetail {...item} />}</>;
};

export default ItemDetailContainer;
