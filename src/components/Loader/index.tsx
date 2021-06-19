import styled from 'styled-components';
import { calcRem } from 'theme';

const Loader = () => {
  return (
    <StyledLoader>
      <img src="spinner.svg" alt="로딩중" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  max-width: ${calcRem(768)};
  margin: 0 auto;
  text-align: center;
  background-color: transparent;
  margin-top: ${calcRem(370)};
  z-index: 1000;
`;

export default Loader;
