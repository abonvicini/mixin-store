import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getStock } from '../../../helpers/getStock';
import Spinner from '../../../helpers/Spinner';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getStock()
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((prod) => prod.category === categoryId));
        } else {
          setItems(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return <>{loading ? <Spinner /> : <ItemList stock={items} />}</>;
};

export default ItemListContainer;
