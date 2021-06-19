import axios from 'axios';
import { AddCartType, CartItemType, CartPage, UpdateCartType } from 'types/Cart';

// 장바구니 전체 조회
export const getCartItems = async () => {
  const { data: cartItems } = await axios.get<CartPage>('https://task.purplesto.re/cart-items', {
    auth: {
      username: 'purple_16',
      password: 'purple_16',
    },
  });
  return cartItems;
};

// 장바구니 아이템 추가
export const addCartItem = async ({ pog, qty }: AddCartType) => {
  const { data: cartItem } = await axios.post<CartItemType>(
    'https://task.purplesto.re/cart-items',
    {
      pog,
      qty,
    },
    {
      auth: {
        username: 'purple_16',
        password: 'purple_16',
      },
    },
  );

  return cartItem;
};

// 장바구니 아이템 수정
export const updateCartItem = async ({ id, qty }: UpdateCartType) => {
  const { data: cartItem } = await axios.patch<CartItemType>(
    `https://task.purplesto.re/cart-items/${id}`,
    {
      qty,
    },
    {
      auth: {
        username: 'purple_16',
        password: 'purple_16',
      },
    },
  );
  return cartItem;
};

// 장바구니 아이템 삭제
export const deleteCartItem = async (id) => {
  await axios.delete(`https://task.purplesto.re/cart-items/${id}`, {
    auth: {
      username: 'purple_16',
      password: 'purple_16',
    },
  });
};
