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
      <Button bgColor={colors.white} color={colors.purple} onClick={() => setIsShow(false)}>
        계속담기
      </Button>
      <Button bgColor={colors.purple} color={colors.white} onClick={goLink}>
        장바구니 확인
      </Button>
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${calcRem(120)};

  button:last-child {
    margin-left: ${calcRem(20)};
  }
`;

export default ModalButtons;
