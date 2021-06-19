import Head from 'next/head';
import CartList from 'components/CartList';
import { CartPage } from 'types/Cart';
import axios from 'axios';
import { InferGetStaticPropsType } from 'next';

export default function Cart({ cart }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>장바구니</title>
        <meta name="description" content="장바구니" />
      </Head>
      <CartList cartItems={cart.results} count={cart.count} />
    </>
  );
}

export const getStaticProps = async () => {
  const { data: cart } = await axios.get<CartPage>('https://task.purplesto.re/cart-items', {
    auth: {
      username: 'purple_16',
      password: 'purple_16',
    },
  });
  return {
    props: { cart },
  };
};
