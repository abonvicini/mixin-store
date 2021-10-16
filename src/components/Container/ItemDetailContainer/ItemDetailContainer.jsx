import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getItems } from '../../../helpers/getItems';
import Spinner from '../../../helpers/Spinner';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getItems()
      .then((res) => {
        setItem(res.find((prod) => prod.id === String(itemId)));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return <>{loading ? <Spinner /> : <ItemDetail {...item} />}</>;
};

export default ItemDetailContainer;
