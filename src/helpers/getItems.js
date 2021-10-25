import { mockStock } from '../data/mockStock';

export const getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockStock);
    }, 500);
  });
};
