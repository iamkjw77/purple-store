import Icon from 'components/Icon';
import styled from 'styled-components';
import { calcRem, colors } from 'theme';
import Logo from 'components/Logo';
import CartBtn from 'components/CartBtn';

type HeaderProps = {
  count: number;
};

const Header = ({ count }: HeaderProps) => {
  return (
    <HeaderStyle>
      <div>
        <button className="menu">
          <Icon name="HamburgerMenu" size={25} />
        </button>
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
  padding: ${calcRem(30)};

  div {
    display: flex;
    align-items: center;
  }

  .menu {
    margin-right: ${calcRem(7)};
  }

  h1 {
    display: inline-block;

    img {
      vertical-align: top;
    }
  }
`;

export default Header;
