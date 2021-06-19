import React from 'react';
import ProductCard from 'components/ProductCard';
import { Product } from 'types/Product';
import styled from 'styled-components';
import { calcRem, colors } from 'theme';

type ProductCardList = {
  products: Product[];
  setIsShow: (boolean) => void;
};

const ProductCardList = ({ products, setIsShow }: ProductCardList) => {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} setIsShow={setIsShow} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: ${calcRem(768)};
  margin: 0 auto;
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export default ProductCardList;
