import Head from 'next/head';
import CartList from 'components/CartList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from 'modules/cart/cartSlice';
import { useTypedSelector } from './_app';
import Spinner from 'components/Spinner';
import Error from 'components/Error/index';

export default function Cart() {
  const { loading, data, error, count } = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (!data || loading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Head>
        <title>장바구니</title>
        <meta name="description" content="장바구니" />
      </Head>
      <CartList cartItems={data} count={count} />
    </>
  );
}
