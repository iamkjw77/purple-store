import Head from 'next/head';
import Error from 'components/Error';

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="404 에러페이지" />
      </Head>
      <Error />
    </>
  );
}
