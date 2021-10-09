import { mockStock } from '../data/mockStock';

export const callStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockStock);
    }, 2000);
  });
};
