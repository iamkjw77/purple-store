import axios from 'axios';
import { CartPage, UserLogin } from 'types/Cart';

export const getCartItems = async ({ id, pw }: UserLogin) => {
  const { data: cartItems } = await axios.get<CartPage>('https://task.purplesto.re/cart-items', {
    auth: {
      username: id,
      password: pw,
    },
  });
  return cartItems;
};
