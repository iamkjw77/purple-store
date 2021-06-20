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
import Error from 'components/Error';
import Modal from 'components/Modal';
import AddCartModalContents from 'components/AddCartModalContents';
import DuplicateProductModalContents from 'components/DuplicateProductModalContents';

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
  if (productError || cartError === 500) return <Error />;

  return (
    <>
      <Head>
        <title>퍼플스토어</title>
        <meta name="description" content="퍼플스토어" />
      </Head>
      <ProductCardList products={data} setIsShow={setIsShow} />
      {loading && <Loader />}

      <AnimatePresence>
        {isShow && !cartError && (
          <ModalContainer id="modal">
            <Modal setIsShow={setIsShow}>
              <AddCartModalContents setIsShow={setIsShow} />
            </Modal>
          </ModalContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isShow && cartError === 400 && (
          <ModalContainer id="modal">
            <Modal setIsShow={setIsShow}>
              <DuplicateProductModalContents setIsShow={setIsShow} />
            </Modal>
          </ModalContainer>
        )}
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
