import { useTypedSelector } from '../../../pages/_app';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import Tooltip from 'components/Tooltip/index';
import ProgressBar from 'components/ProgressBar/index';
import ModalButtons from 'components/ModalButtons/index';

type AddCartModalContentsProps = {
  setIsShow: (boolean) => void;
};

const AddCartModalContents = ({ setIsShow }: AddCartModalContentsProps) => {
  const { data } = useTypedSelector((state) => state.cart);
  const totalPrice = calcTotalPrice(data);

  return (
    <StyledModal role="dialog" aria-modal={true}>
      <h1>정기 배송 장바구니에 담겼습니다.</h1>
      <Tooltip price={totalPrice} />
      <ProgressBar price={totalPrice} />
      <ModalButtons setIsShow={setIsShow} />
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 101;
  background-color: ${colors.white};
  padding: ${calcRem(100)};
  border-radius: 10px;

  h1 {
    font-size: ${fontSize.title};
    font-weight: bold;
    margin-bottom: ${calcRem(40)};
  }
`;

export default AddCartModalContents;
