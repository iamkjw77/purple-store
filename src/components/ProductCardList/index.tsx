import React from 'react';
import styled from 'styled-components';
import { calcRem, colors } from 'theme';
import { Product } from 'types/Product';
import ProductCard from 'components/ProductCard';

type ProductCardList = {
  products: Product[];
  setIsShow: (boolean) => void;
};

const ProductCardList = ({ products, setIsShow }: ProductCardList) => {
  return (
    <StyledContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} setIsShow={setIsShow} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: ${calcRem(768)};
  margin: 0 auto;
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

StyledContainer.displayName = 'StyledContainer';

export default ProductCardList;
