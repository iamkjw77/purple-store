import axios from 'axios';
import { CartItemType, CartPage } from 'types/Cart';

export const getCartItems = async () => {
  const { data: cartItems } = await axios.get<CartPage>('https://task.purplesto.re/cart-items', {
    auth: {
      username: 'purple_16',
      password: 'purple_16',
    },
  });
  return cartItems;
};

export const addCartItem = async ({ pog, qty }) => {
  const { data: cartItem } = await axios.post<CartItemType>(
    'https://task.purplesto.re/cart-items',
    {
      auth: {
        username: 'purple_16',
        password: 'purple_16',
      },
      params: {
        pog,
        qty,
      },
    },
  );

  return cartItem;
};
