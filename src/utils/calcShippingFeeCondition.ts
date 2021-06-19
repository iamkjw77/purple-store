import { numberWithCommas } from './numberWithCommas';
import shoppingFee from 'constant/shoppingFee';

export const calcShippingFeeCondition = (totalPrice: number): number | string => {
  if (totalPrice >= shoppingFee.FREE_SHIPPING_TERMS) return 0;
  else return numberWithCommas(shoppingFee.FREE_SHIPPING_TERMS - totalPrice);
};
