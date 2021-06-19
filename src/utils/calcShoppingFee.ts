import { numberWithCommas } from './numberWithCommas';

export const calcShoppingFee = (totalPrice: number): string | number => {
  if (totalPrice >= 30000) return 0;
  else return numberWithCommas(3000);
};
