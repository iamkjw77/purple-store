import Head from 'next/head';
import CartList from 'components/CartList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from 'modules/cart/cartSlice';
import { useTypedSelector } from './_app';

export default function Cart() {
  const { loading, data, error, count } = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems({ id: 'purple_16', pw: 'purple_16' }));
  }, []);

  if (!data) return null;

  return (
    <>
      <Head>
        <title>장바구니</title>
        <meta name="description" content="장바구니" />
      </Head>
      <CartList cartItems={data} />
    </>
  );
}
