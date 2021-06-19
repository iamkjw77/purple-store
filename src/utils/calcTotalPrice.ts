import { CartItemType } from 'types/Cart';

export const calcTotalPrice = (items: CartItemType[]): number =>
  items.reduce((acc, cur) => {
    acc += cur.pog.price * cur.qty;
    return acc;
  }, 0);
