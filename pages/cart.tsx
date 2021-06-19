import Head from 'next/head';
import CartList from 'components/CartList';

export default function Cart() {
  return (
    <>
      <Head>
        <title>장바구니</title>
        <meta name="description" content="장바구니" />
      </Head>
      <CartList />
    </>
  );
}
