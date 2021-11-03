import { getFirestore } from 'firebase/config';

const db = getFirestore();

const productsError = (error) => ({
  products: [],
  reason: error.message || error,
});

export const getProductsByCategory = async (categoryId) => {
  const products = categoryId
    ? db.collection('products').where('category', '==', categoryId)
    : db.collection('products');

  return products
    .get()
    .then((res) => {
      const newProducts = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log('[Service] newProducts: ', newProducts);
      return newProducts;
    })
    .catch((err) => {
      return productsError(err);
    });
};
