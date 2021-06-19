import Head from 'next/head';
import CartList from 'components/CartList';
import { useTypedSelector } from './_app';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCartItems } from 'modules/cart/cartSlice';
import Loader from 'components/Loader/index';
import Error from 'components/Error';

export default function Cart() {
  const { loading, data, error, count } = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (!data || loading) return <Loader />;
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
