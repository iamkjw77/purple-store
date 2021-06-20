import Head from 'next/head';
import { useTypedSelector } from './_app';
import CartList from 'components/CartList';
import Loader from 'components/Loader/index';
import Error from 'components/Error';

export default function Cart() {
  const { loading, data, error, count } = useTypedSelector((state) => state.cart);

  if (!data || loading) return <Loader />;
  if (error && error !== 400) return <Error />;

  return (
    <>
      <Head>
        <title>장바구니 | 퍼플스토어</title>
        <meta name="description" content="장바구니" />
      </Head>
      <CartList cartItems={data} count={count} />
    </>
  );
}
