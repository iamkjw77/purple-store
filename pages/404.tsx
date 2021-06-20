import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import Button from 'components/Button';

export default function Error404() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="404 에러페이지" />
      </Head>
      <StyledContainer>
        <p className="title">Oops!!</p>
        <p>해당 페이지는 찾을 수 없어요.</p>
        <img
          src="https://t1.kakaocdn.net/friends/new_store/3.0/common/ryan-shy-184.png"
          alt="라이언"
        />
        <Button bgColor={colors.purple} color={colors.white} onClick={goHome}>
          홈으로
        </Button>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  max-width: ${calcRem(768)};
  margin: 0 auto;
  padding-top: ${calcRem(100)};
  text-align: center;
  background-color: ${colors.white};
  min-height: 83rem;

  p {
    padding-top: ${calcRem(30)};
    font-size: ${fontSize.title};
  }

  .title {
    font-weight: bold;
  }

  img {
    display: block;
    margin: ${calcRem(30)} auto;
  }
`;

StyledContainer.displayName = 'StyledContainer';
