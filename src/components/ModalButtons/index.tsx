import styled from 'styled-components';
import { calcRem, colors } from 'theme';
import Button from 'components/Button';
import { useRouter } from 'next/router';

type ModalButtons = {
  setIsShow: (boolean) => void;
};

const ModalButtons = ({ setIsShow }: ModalButtons) => {
  const router = useRouter();

  const goLink = () => {
    setIsShow(false);
    router.push('/cart');
  };

  return (
    <StyledButtonContainer>
      <Button
        className="cancle"
        bgColor={colors.white}
        color={colors.purple}
        onClick={() => setIsShow(false)}
      >
        계속담기
      </Button>
      <Button className="confirm" bgColor={colors.purple} color={colors.white} onClick={goLink}>
        장바구니 확인
      </Button>
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${calcRem(120)};

  button {
    transition: all 0.2s ease-in;
  }

  .cancle:hover {
    border: 2px solid ${colors.light_pink};
    color: ${colors.light_pink};
  }

  .confirm:hover {
    opacity: 0.9;
    background-color: ${colors.light_purple};
    border: 2px solid ${colors.light_purple};
  }

  button:last-child {
    margin-left: ${calcRem(20)};
  }
`;

export default ModalButtons;
