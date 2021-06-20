import Icon from 'components/Icon';
import styled from 'styled-components';
import { calcInterval, calcRem, colors } from 'theme';
import Logo from 'components/Logo';
import CartBtn from 'components/CartBtn';
import { useTypedSelector } from '../../../pages/_app';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCartItems } from 'modules/cart/cartSlice';
import Button from 'components/Button';

const Header = () => {
  const { count } = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <HeaderStyle>
      <div>
        <Button className="menu" bgColor="transparent" color={colors.black}>
          <Icon name="HamburgerMenu" size={25} />
        </Button>
        <Logo />
      </div>
      <CartBtn count={count} />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${calcRem(768)};
  margin: 0 auto;
  background-color: ${colors.white};
  padding: ${calcInterval([20, 30, 10])};

  div {
    display: flex;
    align-items: center;
  }

  .menu {
    width: auto;
    margin-right: ${calcRem(7)};
    border: none;
  }

  h1 {
    display: inline-block;

    img {
      vertical-align: top;
    }
  }
`;

HeaderStyle.displayName = 'HeaderStyle';

export default Header;
