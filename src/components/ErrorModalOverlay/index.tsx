import styled from 'styled-components';
import { colors } from 'theme';

type ErrorModalOverlayProps = {
  setIsError: (boolean) => void;
};

const ErrorModalOverlay = ({ setIsError }: ErrorModalOverlayProps) => {
  return <StyledErrorModalOverlay onClick={() => setIsError(false)}></StyledErrorModalOverlay>;
};

const StyledErrorModalOverlay = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.black};
  opacity: 0.7;
`;

export default ErrorModalOverlay;
