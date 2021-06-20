import Head from 'next/head';
import { useTypedSelector } from './_app';
import CartList from 'components/CartList';
import Loader from 'components/Loader/index';
import { useRouter } from 'next/router';

export default function Cart() {
  const { loading, data, error, count } = useTypedSelector((state) => state.cart);
  const router = useRouter();

  if (!data || loading) return <Loader />;
  if (error && error !== 400) {
    alert('에러가 발생했습니다. 페이지를 새로고침 합니다.');
    router.reload();
  }

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
