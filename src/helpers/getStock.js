import { mockStock } from '../data/mockStock';

export const getStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockStock);
    }, 2000);
  });
};
