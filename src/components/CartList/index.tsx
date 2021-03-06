import React from 'react';
import styled from 'styled-components';
import { calcRem, colors } from 'theme';
import { CartItemType } from 'types/Cart';
import Empty from 'components/Empty';
import ControlBar from 'components/ControlBar';
import CartItem from 'components/CartItem';
import CartItemPriceInfo from 'components/CartItemPriceInfo';

type CartListProps = {
  /** 카트 전체 아이템 배열 */
  cartItems: CartItemType[];
  /** 카트 아이템 전체 갯수 */
  count: number;
};

const CartList = ({ cartItems, count }: CartListProps) => {
  return (
    <StyledContainer>
      <ControlBar />
      {!count ? (
        <Empty />
      ) : (
        <>
          <StyledCartItemContainer>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </StyledCartItemContainer>
          <CartItemPriceInfo cartItems={cartItems} count={count} />
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: ${calcRem(768)};
  margin: 0 auto;
  background-color: ${colors.white};
  padding: ${calcRem(30)};
  margin-bottom: ${calcRem(100)};
`;

const StyledCartItemContainer = styled.ul`
  margin-bottom: ${calcRem(40)};
`;

StyledContainer.displayName = 'StyledContainer';
StyledCartItemContainer.displayName = 'StyledCartItemContainer';

export default React.memo(CartList);
