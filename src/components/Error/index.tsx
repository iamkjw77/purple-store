import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import Button from 'components/Button/index';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  const handleClick = () => {
    router.reload();
  };

  return (
    <StyledContainer>
      <img src="error.png" alt="에러 이미지" />
      <p>서비스 이용에 불편을 드려 죄송합니다.</p>
      <p className="text-sub">하루 빨리 조치를 취하겠습니다!</p>
      <Button
        contents="새로고침"
        bgColor={colors.purple}
        color={colors.white}
        onClick={handleClick}
      />
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

  .text-sub {
    font-size: ${fontSize.xlarge};
    color: ${colors.pink};
    font-weight: normal;
    margin-bottom: ${calcRem(60)};
  }
`;

export default Error;
