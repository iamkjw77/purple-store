import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import { CartItemType } from 'types/Cart';
import { calcShippingFeeCondition } from 'utils/calcShippingFeeCondition';
import { calcShoppingFee } from 'utils/calcShoppingFee';
import { calcTotal } from 'utils/calcTotal';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import { numberWithCommas } from 'utils/numberWithCommas';
import KeyValueText from 'components/KeyValueText/index';
import Button from 'components/Button';

type CartItemPriceInfoProps = {
  /** 카트 전체 아이템 배열 */
  cartItems: CartItemType[];
  /** 카트 아이템 전체 갯수 */
  count: number;
};

const CartItemPriceInfo = ({ cartItems, count }: CartItemPriceInfoProps) => {
  const totalPrice = calcTotalPrice(cartItems);
  const shippingFee = calcShoppingFee(totalPrice);

  return (
    <StyledCartItemPriceInfo>
      <KeyValueText title="총 상품가격" value={numberWithCommas(totalPrice)} />
      <KeyValueText title="총 배송비" value={numberWithCommas(shippingFee)} />
      <span className="shippingFee-info">
        ({calcShippingFeeCondition(totalPrice)}원 추가시 무료배송)
      </span>
      <KeyValueText
        className="total-container"
        title="합계"
        value={calcTotal(totalPrice, shippingFee)}
      />
      <Button bgColor={colors.purple} color={colors.white} className="purchase-btn">
        구매하기 ({count})
      </Button>
    </StyledCartItemPriceInfo>
  );
};

const StyledCartItemPriceInfo = styled.div`
  .shippingFee-info {
    display: block;
    padding: ${calcRem(30)};
    font-size: ${fontSize.large};
    text-align: right;
    color: ${colors.darkGray};
    border-bottom: 1px solid ${colors.darkGray};
  }

  .total-container {
    margin-top: ${calcRem(30)};
    margin-bottom: ${calcRem(50)};
    font-weight: bold;

    dd {
      color: ${colors.purple};
    }
  }

  .purchase-btn {
    display: block;
    width: 95%;
    padding: ${calcRem(30)};
    margin: 0 auto;
  }
`;

StyledCartItemPriceInfo.displayName = 'StyledCartItemPriceInfo';

export default React.memo(CartItemPriceInfo);
