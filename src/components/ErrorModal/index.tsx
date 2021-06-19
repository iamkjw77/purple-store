import styled from 'styled-components';
import { calcRem, colors } from 'theme';
import ErrorModalOverlay from 'components/ErrorModalOverlay/index';

type typeErrorModal = {
  error: Error;
  setIsError: (boolean) => void;
};

const ErrorModal = ({ error, setIsError }: typeErrorModal) => {
  return (
    <>
      <StyledErrorModal>{error}</StyledErrorModal>
      <ErrorModalOverlay setIsError={setIsError}></ErrorModalOverlay>
    </>
  );
};

const StyledErrorModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 101;
  background-color: ${colors.white};
  padding: ${calcRem(100)};
  border-radius: 10px;
`;

export default ErrorModal;
