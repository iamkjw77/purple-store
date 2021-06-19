import Icon from 'components/Icon';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSize } from 'theme';
import { Product } from 'types/Product';
import { numberWithCommas } from 'utils/numberWithCommas';

type ProductCardProps = {
  product: Product;
  setIsShow: (boolean) => void;
};

const ProductCard = ({ product, setIsShow }: ProductCardProps) => {
  return (
    <StyledFigure>
      <div>
        <img src={product.image} alt="" />
        <button className="cart" onClick={() => setIsShow(true)}>
          <Icon name="ShoppingCart" size={30} />
        </button>
      </div>
      <figcaption>{product.name}</figcaption>
      <span>{numberWithCommas(product.price)}원</span>
    </StyledFigure>
  );
};

const StyledFigure = styled.figure`
  font-size: ${fontSize.large};
  margin-bottom: ${calcRem(50)};

  div {
    position: relative;
    width: ${calcRem(350)};
    padding: ${calcInterval([70, 10])};
    display: inline-block;
    background-color: ${colors.gray};
    border-radius: 10px;
  }

  img {
    display: block;
    width: ${calcRem(250)};
    margin: 0 auto;
  }

  figcaption {
    width: 215px;
    margin-top: ${calcRem(15)};
  }

  span {
    display: block;
    font-weight: bold;
    text-align: right;
    font-size: ${fontSize.xlarge};
    font-weight: bold;
    margin-top: ${calcRem(30)};
  }

  .cart {
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: ${colors.purple};
    background-color: ${colors.white};
    border-radius: 50%;
    padding: ${calcRem(10)};
    border: 2px solid ${colors.purple};
  }
`;

export default ProductCard;
