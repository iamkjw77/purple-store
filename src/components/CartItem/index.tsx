import CheckBox from 'components/CheckBox';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSize } from 'theme';
import ProductImg from 'components/ProductImg';

const CartItem = () => {
  return (
    <StyledCartItem>
      <div className="title-container">
        <CheckBox />
        <span className="product-name">[빈티지] DOG 오븐프레쉬 치킨,칠면조 1kg</span>
        <button className="delete-btn">삭제</button>
      </div>
      <div className="product-info-container">
        <ProductImg />
        <div>
          <span className="price">2900원</span>
          <span className="point">최대 29원 적립예정</span>
          <div className="count-container">
            <button className="count-btn">-</button>
            <input type="input" readOnly />
            <button className="count-btn">+</button>
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
