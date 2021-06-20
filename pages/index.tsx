import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './_app';
import { clearProducts, initializeProducts } from 'modules/product/productSlice';
import { AnimatePresence } from 'framer-motion';
import { ProductPage } from 'types/Product';
import useStopSroll from 'hooks/useStopSroll';
import useSrcoll from 'hooks/useSrcoll';
import ModalContainer from 'utils/portal';
import ProductCardList from 'components/ProductCardList';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import AddCartModalContents from 'components/AddCartModalContents';
import DuplicateProductModalContents from 'components/DuplicateProductModalContents';
import ErrorModalContents from 'components/ErrorModalContents/index';

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    loading: productLoading,
    data,
    error: productError,
  } = useTypedSelector((state) => state.product);
  const { loading: cartLoading, error: cartError } = useTypedSelector((state) => state.cart);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const pageRef = useRef(2);

  useSrcoll(pageRef.current);
  useStopSroll(isShow);

  useEffect(() => {
    dispatch(initializeProducts(products));

    return () => {
      dispatch(clearProducts());
    };
  }, []);

  if (!data) return <Loader />;

  return (
    <>
      <Head>
        <title>퍼플스토어</title>
        <meta name="description" content="퍼플스토어" />
      </Head>
      <ProductCardList products={data} setIsShow={setIsShow} />
      {(productLoading || cartLoading) && <Loader />}

      <AnimatePresence>
        {isShow && !cartError && !cartLoading && (
          <ModalContainer id="modal">
            <Modal setIsShow={setIsShow}>
              <AddCartModalContents setIsShow={setIsShow} />
            </Modal>
          </ModalContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isShow && cartError === 400 && !cartLoading && (
          <ModalContainer id="modal">
            <Modal setIsShow={setIsShow}>
              <DuplicateProductModalContents setIsShow={setIsShow} />
            </Modal>
          </ModalContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(isShow && productError) ||
          (cartError === 500 && (
            <ModalContainer id="modal">
              <Modal setIsShow={setIsShow}>
                <ErrorModalContents />
              </Modal>
            </ModalContainer>
          ))}
      </AnimatePresence>
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
