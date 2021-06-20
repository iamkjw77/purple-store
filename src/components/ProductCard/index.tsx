import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { calcInterval, calcRem, colors, fontSize } from 'theme';
import { addCartItem } from 'modules/cart/cartSlice';
import { Product } from 'types/Product';
import { numberWithCommas } from 'utils/numberWithCommas';
import Icon from 'components/Icon';
import Button from 'components/Button';

type ProductCardProps = {
  product: Product;
  setIsShow: (boolean) => void;
};

const ProductCard = ({ product, setIsShow }: ProductCardProps) => {
  const dispatch = useDispatch();

  const onAddItem = () => {
    setIsShow(true);
    dispatch(addCartItem({ pog: product.id, qty: 1 }));
  };

  return (
    <>
      <StyledProductCard>
        <div>
          <img src={product.image} alt={product.name} />
          <Button bgColor={colors.white} color={colors.purple} onClick={onAddItem}>
            <Icon name="ShoppingCart" size={30} />
          </Button>
        </div>
        <figcaption>{product.name}</figcaption>
        <span>{numberWithCommas(product.price)}원</span>
      </StyledProductCard>
    </>
  );
};

const StyledProductCard = styled.figure`
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

  button {
    position: absolute;
    width: auto;
    bottom: 15px;
    right: 10px;
    border-radius: 50%;
    padding: ${calcInterval([10, 15])};
    border: 2px solid ${colors.purple};
  }
`;

StyledProductCard.displayName = 'StyledProductCard';

export default ProductCard;
