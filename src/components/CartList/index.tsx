import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSize } from 'theme';
import Empty from 'components/Empty';
import ControlBar from 'components/ControlBar';
import CartItem from 'components/CartItem';
import { CartItemType } from 'types/Cart';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import { numberWithCommas } from 'utils/numberWithCommas';
import { calcShoppingFee } from 'utils/calcShoppingFee';

type CartListProps = {
  cartItems: CartItemType[];
};

const CartList = ({ cartItems }: CartListProps) => {
  const totalPrice = calcTotalPrice(cartItems);

  return (
    <Container>
      <ControlBar />
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      {/* <Empty /> */}
      <dl>
        <dt>총 상품가격</dt>
        <dd>{numberWithCommas(totalPrice)}원</dd>
      </dl>
      <dl>
        <dt>총 배송비</dt>
        <dd>{calcShoppingFee(totalPrice)}원</dd>
      </dl>
      <span className="shippingFee-info">(6100원 추가시 무료배송)</span>
      <dl className="total-container">
        <dt className="total-title">합계</dt>
        <dd className="total-price">84,000원</dd>
      </dl>
      <button className="purchase-btn">구매하기 (2)</button>
    </Container>
  );
};

const Container = styled.div`
  max-width: ${calcRem(768)};
  margin: 0 auto;
  background-color: ${colors.white};
  padding: ${calcRem(30)};
  margin-bottom: ${calcRem(100)};

  .shippingFee-info {
    display: block;
    padding: ${calcRem(30)};
    font-size: ${fontSize.large};
    text-align: right;
    color: ${colors.darkGray};
    border-bottom: 1px solid ${colors.darkGray};
  }
  ul {
    margin-bottom: ${calcRem(40)};
  }

  dl {
    font-size: ${fontSize.xlarge};
    padding: ${calcInterval([20, 30])};
    display: flex;
    justify-content: space-between;

    dt,
    dd {
      display: inline;
    }

    dd,
    .total-title {
      font-weight: bold;
    }
  }
  .total-container {
    margin-top: ${calcRem(30)};
    margin-bottom: ${calcRem(50)};

    .total-price {
      color: ${colors.purple};
    }
  }

  .purchase-btn {
    display: block;
    width: 95%;
    font-size: ${fontSize.large};
    padding: ${calcRem(30)};
    margin: 0 auto;
    font-weight: bold;
    background-color: ${colors.purple};
    color: ${colors.white};
    border-radius: 5px;
  }
`;

export default CartList;
