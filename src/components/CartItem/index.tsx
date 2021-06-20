import CheckBox from 'components/CheckBox';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CartItemType } from 'types/Cart';
import { deleteCartItem } from 'modules/cart/cartSlice';
import { calcInterval, calcRem, colors, fontSize } from 'theme';
import ProductImg from 'components/ProductImg';
import Button from 'components/Button';
import ProductInfo from 'components/ProductInfo';

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteCartItem(cartItem.id));
  };

  return (
    <StyledCartItem>
      <StyledTitleContainer>
        <CheckBox />
        <span className="product-name">{cartItem.pog.name}</span>
        <Button
          bgColor="transparent"
          color={colors.purple}
          className="delete-btn"
          onClick={onDeleteItem}
        >
          삭제
        </Button>
      </StyledTitleContainer>
      <StyledProductContainer>
        <ProductImg />
        <ProductInfo id={cartItem.id} price={cartItem.pog.price} qty={cartItem.qty} />
      </StyledProductContainer>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.div`
  font-size: ${fontSize.large};
  font-weight: bold;
  padding: ${calcInterval([30, 20])};
  border-bottom: 1px solid ${colors.darkGray};
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${calcRem(30)};

  .product-name {
    width: ${calcRem(550)};
  }
  .delete-btn {
    width: auto;
    border: none;
    padding: 0;
    font-size: ${fontSize.large};
  }
`;

const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

StyledCartItem.displayName = 'StyledCartItem';
StyledTitleContainer.displayName = 'StyledTitleContainer';
StyledProductContainer.displayName = 'StyledProductContainer';

export default CartItem;
