import styled from 'styled-components';
import { HTMLMotionProps, motion } from 'framer-motion';
import { calcRem, colors, fontSize } from 'theme';
import ModalButtons from 'components/ModalButtons';

type DuplicateProductModalContentsProps = {
  setIsShow: (boolean) => void;
} & HTMLMotionProps<'div'>;

const DuplicateProductModalContents = ({ setIsShow }: DuplicateProductModalContentsProps) => {
  return (
    <StyledDuplicateModal
      role="dialog"
      aria-modal={true}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'none' }}
      exit={{ opacity: 0 }}
    >
      <h1>해당 상품은 이미 장바구니에 담겨있습니다.</h1>
      <ModalButtons setIsShow={setIsShow} />
    </StyledDuplicateModal>
  );
};

const StyledDuplicateModal = styled(motion.div)`
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
    font-size: ${fontSize.xlarge};
    font-weight: bold;
    margin-bottom: ${calcRem(40)};
  }
`;

export default DuplicateProductModalContents;
