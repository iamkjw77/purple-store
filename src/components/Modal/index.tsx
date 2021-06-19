import ModalOverlay from 'components/ModalOverlay';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar/index';
import Tooltip from './../Tooltip/index';
import { useRouter } from 'next/router';

type ModalProps = {
  setIsShow: (boolean) => void;
};

const Modal = ({ setIsShow }: ModalProps) => {
  const router = useRouter();
  const goLink = () => {
    setIsShow(false);
    router.push('/cart');
  };

  return (
    <>
      <ModalStyle>
        <div className="text">정기 배송 장바구니에 담겼습니다.</div>
        <Tooltip price={55000} />
        <ProgressBar price={55000} />

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

  .text {
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
