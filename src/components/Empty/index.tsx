import { useRouter } from 'next/router';
import styled from 'styled-components';
import { calcInterval, calcRem, colors } from 'theme';
import Button from 'components/Button';

const Empty = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <StyledEmpty>
      <img
        src="https://s3-purplestore.s3.ap-northeast-2.amazonaws.com/assets/img_cart_empty.png"
        alt="빈 장바구니"
      />
      <Button bgColor={colors.purple} color={colors.white} onClick={goHome}>
        퍼플스토어 둘러보기
      </Button>
    </StyledEmpty>
  );
};

const StyledEmpty = styled.div`
  text-align: center;
  padding: ${calcInterval([200, 0])};

  img {
    width: ${calcRem(390)};
    margin-bottom: ${calcRem(300)};
  }

  button {
    display: block;
    width: 95%;
    padding: ${calcRem(30)};
    margin: 0 auto;
  }
`;

export default Empty;
