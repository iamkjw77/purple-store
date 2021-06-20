import styled from 'styled-components';
import { motion } from 'framer-motion';
import { calcRem, colors, fontSize } from 'theme';
import Button from 'components/Button';
import { useRouter } from 'next/router';

const ErrorModalContents = () => {
  const router = useRouter();

  const onReload = () => {
    router.reload();
  };

  return (
    <StyledDuplicateModal
      role="dialog"
      aria-modal={true}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'none' }}
      exit={{ opacity: 0 }}
    >
      <h1>에러가 발생했습니다. 페이지를 새로고침합니다.</h1>
      <Button bgColor={colors.purple} color={colors.white} onClick={onReload}>
        새로고침
      </Button>
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
  text-align: center;

  h1 {
    font-size: ${fontSize.xlarge};
    font-weight: bold;
    margin-bottom: ${calcRem(100)};
  }
`;

StyledDuplicateModal.displayName = 'StyledDuplicateModal';

export default ErrorModalContents;
