import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';

const Error = () => {
  return (
    <StyledContainer>
      <img src="error.png" alt="에러 이미지" />
      <p>서비스 이용에 불편을 드려 죄송합니다.</p>
      <p>지금 당장 개발자를 호출하도록 하겠습니다!!</p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: ${calcRem(768)};
  height: ${calcRem(1000)};
  background-color: ${colors.white};
  margin: 0 auto;
  padding-top: 7rem;
  text-align: center;

  img {
    margin: 0 auto;
  }

  p {
    margin-top: 3rem;
    font-size: ${fontSize.title};
    font-weight: bold;
  }

  p:last-child {
    font-size: ${fontSize.large};
    color: ${colors.pink};
    font-weight: normal;
  }
`;

export default Error;
