import styled from 'styled-components';
import { calcRem } from 'theme';

const Spinner = () => {
  return (
    <StyledSpinner>
      <img src="spinner.svg" alt="로딩중" />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  max-width: ${calcRem(768)};
  margin: 0 auto;
  text-align: center;
  background-color: transparent;
  margin-top: ${calcRem(370)};
  z-index: 1000;
`;

export default Spinner;
