import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductCardList from 'components/ProductCardList/index';
import { clearProducts, initializeProducts } from 'modules/product/productSlice';
import { useTypedSelector } from './_app';
import Loader from 'components/Loader';
import Error from 'components/Error/index';
import Modal from 'components/Modal/index';
import ModalContainer from 'utils/portal';
import axios from 'axios';
import { ProductPage } from 'types/Product';
import { InferGetStaticPropsType } from 'next';
import useSrcoll from 'hooks/useSrcoll';
import useStopSroll from 'hooks/useStopSroll';

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { loading, data, error: productError } = useTypedSelector((state) => state.product);
  const { error: cartError } = useTypedSelector((state) => state.cart);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const pageRef = useRef(2);

  useSrcoll(pageRef.current);
  useStopSroll(isShow);

  useEffect(() => {
    if (!data) {
      dispatch(initializeProducts(products));
    }

    return () => {
      dispatch(clearProducts());
    };
  }, []);

  if (!data) return <Loader />;
  if (productError || cartError) return <Error />;

  return (
    <>
      <Head>
        <title>퍼플스토어</title>
        <meta name="description" content="퍼플스토어" />
      </Head>
      <ProductCardList products={data} setIsShow={setIsShow} />
      {loading && <Loader />}
      {isShow && (
        <ModalContainer id="modal">
          <Modal setIsShow={setIsShow} />
        </ModalContainer>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const { data: products } = await axios.get<ProductPage>('https://task.purplesto.re/products');
  return {
    props: {
      products,
    },
  };
};
