import axios from 'axios';
import { ProductPage } from 'types/Product';

// 상품 전체 조회
export const getProducts = async (page: number) => {
  const { data: productsPageData } = await axios.get<ProductPage>(
    `https://task.purplesto.re/products?page=${page}`,
  );
  return productsPageData;
};
