import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductCardList from 'components/ProductCardList/index';
import { clearProducts, getProducts, initializeProducts } from 'modules/product/productSlice';
import { useTypedSelector } from './_app';
import { debounce } from 'utils/debounce';
import Spinner from 'components/Spinner';
import Error from 'components/Error/index';
import Modal from './../src/components/Modal/index';
import ModalContainer from './../src/utils/portal';
import axios from 'axios';
import { ProductPage } from 'types/Product';
import { InferGetStaticPropsType } from 'next';

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { loading, data, error, count } = useTypedSelector((state) => state.product);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const pageRef = useRef(2);

  const onScroll = async () => {
    const { scrollHeight, scrollTop, clientHeight } = document.scrollingElement as Element;
    // TODO: 6 고치기
    if (pageRef.current === 6) return null;
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      dispatch(getProducts(pageRef.current < 6 ? pageRef.current++ : pageRef.current));
    }
  };

  useEffect(() => {
    if (!data) {
      dispatch(initializeProducts(products));
    }
    return () => {
      dispatch(clearProducts());
    };
  }, []);

  useEffect(() => {
    document.onscroll = debounce(onScroll, 300);
    return () => {
      document.onscroll = null;
    };
  }, []);

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = 'hidden';
      document.querySelector('html').scrollTop = window.scrollY;
    }

    if (isShow) {
      window.addEventListener('scroll', disableScroll);
    }

    return () => {
      window.removeEventListener('scroll', disableScroll);
      document.body.style.overflow = 'visible';
    };
  }, [isShow]);

  if (!data) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Head>
        <title>퍼플스토어</title>
        <meta name="description" content="퍼플스토어" />
      </Head>
      <ProductCardList products={data} setIsShow={setIsShow} />
      {loading && <Spinner />}
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
