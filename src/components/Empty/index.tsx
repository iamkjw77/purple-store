import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSize } from 'theme';

const Empty = () => {
  return (
    <Container>
      <img
        src="https://s3-purplestore.s3.ap-northeast-2.amazonaws.com/assets/img_cart_empty.png"
        alt="빈 장바구니"
      />
      <button>퍼플스토어 둘러보기</button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: ${calcInterval([200, 0])};

  img {
    width: ${calcRem(390)};
    margin-bottom: ${calcRem(300)};
  }

  button {
    display: block;
    width: 95%;
    font-size: ${fontSize.large};
    padding: ${calcRem(30)};
    margin: 0 auto;
    font-weight: bold;
    background-color: ${colors.purple};
    color: ${colors.white};
    border-radius: 5px;
  }
`;

export default Empty;
