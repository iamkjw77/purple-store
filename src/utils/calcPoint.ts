import point from 'constant/shoppingFee';

export const calcPoint = (price, quantity): number => {
  return price * quantity * point.POINT_RATE;
};
