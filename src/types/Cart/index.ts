import { Product } from 'types/Product';

export type CartPageState = {
  loading: boolean;
  error: number | null;
  data: CartItemType[] | null;
  count: number;
};

export type CartPage = {
  count: number;
  next: null | string;
  previous: null | string;
  results: CartItemType[];
};

export type CartItemType = {
  id: number;
  pog: Product;
  qty: number;
};

export type AddCartType = {
  pog: number;
  qty: number;
};

export type UpdateCartType = {
  id: number;
  qty: number;
};
