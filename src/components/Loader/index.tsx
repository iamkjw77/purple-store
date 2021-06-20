import Image from 'next/image';
import styled from 'styled-components';
import { calcRem } from 'theme';
import spinner from '../../../public/spinner.svg';

const Loader = () => {
  return (
    <StyledLoader>
      <Image src={spinner} alt="로딩중" />
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

StyledLoader.displayName = 'StyledLoader';

export default Loader;
