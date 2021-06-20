import Head from 'next/head';
import { useTypedSelector } from './_app';
import { AnimatePresence } from 'framer-motion';
import ModalContainer from 'utils/portal';
import CartList from 'components/CartList';
import Loader from 'components/Loader/index';
import Modal from 'components/Modal';
import ErrorModalContents from 'components/ErrorModalContents/index';
import { useState } from 'react';

export default function Cart() {
  const { loading, data, error, count } = useTypedSelector((state) => state.cart);
  const [_, setIsShow] = useState(true);

  if (!data || loading) return <Loader />;

  return (
    <>
      <Head>
        <title>장바구니 | 퍼플스토어</title>
        <meta name="description" content="장바구니" />
      </Head>
      <CartList cartItems={data} count={count} />

      <AnimatePresence>
        {error && error !== 400 && (
          <ModalContainer id="modal">
            <Modal setIsShow={setIsShow}>
              <ErrorModalContents />
            </Modal>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
}
