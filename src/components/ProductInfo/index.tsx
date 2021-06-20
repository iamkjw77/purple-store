import { updateCartItem } from 'modules/cart/cartSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import { calcPoint } from 'utils/calcPoint';
import { debounce } from 'utils/debounce';
import { numberWithCommas } from 'utils/numberWithCommas';
import Button from 'components/Button';

type ProductInfo = {
  id: number;
  price: number;
  qty: number;
};

const ProductInfo = ({ id, price, qty }: ProductInfo) => {
  const [count, setCount] = useState(qty);
  const dispatch = useDispatch();

  const onDecreaseItem = () => {
    if (count === 1) return;
    setCount(qty - 1);
    setTimeout(() => {
      dispatch(updateCartItem({ id: id, qty: qty - 1 }));
    }, 300);
  };

  const onIncreaseItem = () => {
    setCount(qty + 1);
    setTimeout(() => {
      dispatch(updateCartItem({ id: id, qty: qty + 1 }));
    }, 300);
  };

  return (
    <StyledProductInfo>
      <span className="price">{numberWithCommas(price)}원</span>
      <span className="point">최대 {calcPoint(price, qty)}원 적립예정</span>
      <StyledCountContainer>
        <Button
          bgColor="transparent"
          color={colors.darkGray}
          onClick={debounce(onDecreaseItem, 400)}
        >
          -
        </Button>
        <input type="input" readOnly value={count} />
        <Button
          bgColor="transparent"
          color={colors.darkGray}
          onClick={debounce(onIncreaseItem, 400)}
        >
          +
        </Button>
      </StyledCountContainer>
    </StyledProductInfo>
  );
};

const StyledProductInfo = styled.div`
  .price,
  .point {
    display: block;
  }

  .price {
    font-size: ${fontSize.title};
    margin-bottom: ${calcRem(20)};
  }
  .point {
    font-size: ${fontSize.large};
    color: ${colors.darkGray};
  }
`;

const StyledCountContainer = styled.div`
  border: 1px solid ${colors.darkGray};
  border-radius: 5px;
  padding: ${calcRem(10)};
  font-size: ${fontSize.title};
  margin-top: ${calcRem(50)};
  text-align: center;

  input {
    width: ${calcRem(100)};
    border: none;
    text-align: center;
    font-size: ${fontSize.xlarge};
  }

  button {
    width: auto;
    padding: ${calcRem(5)};
    border: none;
  }
`;

StyledProductInfo.displayName = 'StyledProductInfo';
StyledCountContainer.displayName = 'StyledCountContainer';

export default ProductInfo;
