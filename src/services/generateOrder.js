import { getFirestore } from 'firebase/config';
import firebase from 'firebase';
import 'firebase/firestore';

export const generateOrder = (data, cart, total) => {
  return new Promise(async (resolve, reject) => {
    // object to store the order
    const order = {
      buyer: data,
      items: cart.map((item) => ({
        id: item.id,
        precio: item.price,
        cantidad: item.amount,
      })),
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    // added the order to the database
    const db = getFirestore();
    const orders = db.collection('orders');
    const itemsToUpdate = db.collection('products').where(
      firebase.firestore.FieldPath.documentId(),
      'in',
      cart.map((item) => item.id),
    );

    const query = await itemsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];

    query.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.amount) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.amount,
        });
      } else {
        outOfStock.push({ ...doc.data(), id: doc.id });
      }
    });

    if (outOfStock.length === 0) {
      orders.add(order).then((res) => {
        batch.commit();
        resolve(res.id);
      });
    } else {
      reject(outOfStock);
    }
  });
};
