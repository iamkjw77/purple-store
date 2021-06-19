import styled from 'styled-components';
import { calcRem, colors } from 'theme';

const ProductImg = () => {
  return (
    <StyledProductImg>
      <img
        src="https://cdn.purplesto.re/media/store/sale/main_image/vintage_dog_B138DF01_thumb03.png"
        alt="상품이미지"
      />
    </StyledProductImg>
  );
};

const StyledProductImg = styled.div`
  display: inline-block;
  background-color: ${colors.gray};
  border-radius: 5px;
  margin-right: ${calcRem(30)};

  img {
    width: ${calcRem(200)};
  }
`;

export default ProductImg;
