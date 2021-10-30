import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../../firebase/config';
import Spinner from '../../../helpers/Spinner';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const products = categoryId
      ? db.collection('products').where('category', '==', categoryId)
      : db.collection('products');

    products
      .get()
      .then((res) => {
        const newProducts = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log('newProducts: ', newProducts);
        setItems(newProducts);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, setLoading]);

  return <>{loading ? <Spinner /> : <ItemList stock={items} />}</>;
};

export default ItemListContainer;
