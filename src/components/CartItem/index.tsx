import CheckBox from 'components/CheckBox';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSize } from 'theme';
import ProductImg from 'components/ProductImg';
import { CartItemType } from 'types/Cart';
import { numberWithCommas } from 'utils/numberWithCommas';
import { calcPoint } from 'utils/calcPoint';
import { useDispatch } from 'react-redux';
import { deleteCartItem, updateCartItem } from 'modules/cart/cartSlice';
import { debounce } from 'utils/debounce';
import { useState } from 'react';

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const [count, setCount] = useState(cartItem.qty);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteCartItem(cartItem.id));
  };

  const onDecrease = () => {
    if (count === 1) return;
    setCount(cartItem.qty - 1);
    setTimeout(() => {
      dispatch(updateCartItem({ id: cartItem.id, qty: cartItem.qty - 1 }));
    }, 300);
  };

  const onIncrease = () => {
    setCount(cartItem.qty + 1);
    setTimeout(() => {
      dispatch(updateCartItem({ id: cartItem.id, qty: cartItem.qty + 1 }));
    }, 300);
  };

  return (
    <StyledCartItem>
      <div className="title-container">
        <CheckBox />
        <span className="product-name">{cartItem.pog.name}</span>
        <button className="delete-btn" onClick={handleClick}>
          삭제
        </button>
      </div>
      <div className="product-info-container">
        <ProductImg />
        <div>
          <span className="price">{numberWithCommas(cartItem.pog.price)}원</span>
          <span className="point">
            최대 {calcPoint(cartItem.pog.price, cartItem.qty)}원 적립예정
          </span>
          <div className="count-container">
            <button className="count-btn" onClick={debounce(onDecrease, 400)}>
              -
            </button>
            <input type="input" readOnly value={count} />
            <button className="count-btn" onClick={debounce(onIncrease, 400)}>
              +
            </button>
          </div>
        </div>
      </div>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.div`
  font-size: ${fontSize.large};
  font-weight: bold;
  padding: ${calcInterval([30, 20])};
  border-bottom: 1px solid ${colors.darkGray};

  .title-container {
    display: flex;
    align-items: center;
    margin-bottom: ${calcRem(30)};

    .product-name {
      width: ${calcRem(550)};
    }
    .delete-btn {
      color: ${colors.purple};
      font-weight: bold;
    }
  }

  .price,
  .point {
    display: block;
  }

  .price {
    font-size: ${fontSize.title};
    margin-bottom: ${calcRem(15)};
  }
  .point {
    font-size: ${fontSize.base};
    color: ${colors.darkGray};
    margin-bottom: ${calcRem(15)};
  }

  .product-info-container {
    display: flex;
    align-items: center;
  }

  .count-container {
    border: 1px solid ${colors.darkGray};
    border-radius: 5px;
    padding: ${calcRem(10)};
    font-size: ${fontSize.title};
    margin-top: ${calcRem(30)};

    input {
      border: none;
      text-align: center;
      width: ${calcRem(100)};
    }

    button {
      font-size: inherit;
    }
  }
`;

export default CartItem;
