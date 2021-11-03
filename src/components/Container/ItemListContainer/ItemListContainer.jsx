import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from '../../../helpers/Spinner';
import ItemList from './ItemList';

import { getProductsByCategory } from 'services/store';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchApiEffect = async () => {
      setLoading(true);

      getProductsByCategory(categoryId)
        .then((newProducts) => setItems(newProducts))
        .catch((error) => {
          setItems(error.products);
          console.log(error.reason);
        })
        .finally(() => setLoading(false));
    };
    fetchApiEffect();
  }, [categoryId, setLoading]);

  return <>{loading ? <Spinner /> : <ItemList stock={items} />}</>;
};

export default ItemListContainer;
