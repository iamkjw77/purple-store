import Icon from 'components/Icon';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { calcInterval, colors, fontSize } from 'theme';

type CartBtnProps = {
  count: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CartBtn = ({ count }: CartBtnProps) => {
  const router = useRouter();

  const goLink = () => {
    router.push('cart');
  };

  return (
    <StyledButton count={count} onClick={goLink}>
      <Icon name="ShoppingCart" size={28} />
      <span>{count}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ count: number }>`
  position: relative;

  span {
    display: ${({ count }) => (count ? 'inline' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${colors.pink};
    color: ${colors.white};
    border-radius: 50%;
    padding: ${calcInterval([5, 7])};
    font-size: ${fontSize.small};
    font-weight: bold;
  }
`;

export default CartBtn;
