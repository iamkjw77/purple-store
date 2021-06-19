import ModalOverlay from 'components/ModalOverlay';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar/index';
import Tooltip from 'components/Tooltip/index';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../../../pages/_app';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import calcBenefit from 'utils/calcBenefit';

type ModalProps = {
  setIsShow: (boolean) => void;
};

const Modal = ({ setIsShow }: ModalProps) => {
  const { data } = useTypedSelector((state) => state.cart);
  const router = useRouter();
  const goLink = () => {
    setIsShow(false);
    router.push('/cart');
  };
  const totalPrice = calcTotalPrice(data);

  return (
    <>
      <ModalStyle role="dialog" aria-modal={true}>
        <h1>정기 배송 장바구니에 담겼습니다.</h1>
        <Tooltip price={calcBenefit(totalPrice)} />
        <ProgressBar price={totalPrice} />

        <div className="button-container">
          <Button
            contents="계속담기"
            bgColor={colors.white}
            color={colors.purple}
            onClick={() => setIsShow(false)}
          />
          <Button
            contents="장바구니 확인"
            bgColor={colors.purple}
            color={colors.white}
            onClick={goLink}
          />
        </div>
      </ModalStyle>
      <ModalOverlay setIsShow={setIsShow} />
    </>
  );
};

const ModalStyle = styled.div`
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

  .button-container {
    display: flex;
    justify-content: space-around;
    margin-top: ${calcRem(120)};

    button:last-child {
      margin-left: ${calcRem(20)};
    }
  }
`;

export default Modal;
