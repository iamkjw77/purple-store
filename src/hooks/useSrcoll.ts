import { getProducts } from 'modules/product/productSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'utils/debounce';

const useSrcoll = (page) => {
  const dispatch = useDispatch();

  const onScroll = async () => {
    const { scrollHeight, scrollTop, clientHeight } = document.scrollingElement as Element;
    if (page === 6) return null;
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      dispatch(getProducts(page < 6 ? page++ : page));
    }
  };

  useEffect(() => {
    document.onscroll = debounce(onScroll, 300);
    return () => {
      document.onscroll = null;
    };
  }, []);
};

export default useSrcoll;
