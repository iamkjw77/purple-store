import axios from 'axios';
import { ProductPage } from 'types/Product';

export const getProducts = async (page: number) => {
  const { data: productsPageData } = await axios.get<ProductPage>(
    `https://task.purplesto.re/products?page=${page}`,
  );
  return productsPageData;
};
