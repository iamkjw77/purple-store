import shoppingFee from 'constant/shoppingFee';

export const calcShoppingFee = (totalPrice: number): number => {
  if (totalPrice >= shoppingFee.FREE_SHIPPING_TERMS) return 0;
  else return shoppingFee.DELIVERY_CHARGE;
};
