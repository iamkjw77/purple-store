import CheckBox from 'components/CheckBox';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSize } from 'theme';

const ControlBar = () => {
  return (
    <StyledControlBar>
      <CheckBox label="전체선택" />
      <button>선택삭제</button>
    </StyledControlBar>
  );
};

const StyledControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${calcInterval([20, 18])};
  background-color: ${colors.gray};

  button {
    font-size: ${fontSize.large};
    background-color: ${colors.white};
    padding: ${calcRem(10)};
    border-radius: 5px;
    color: ${colors.darkGray};
    font-weight: bold;
  }

  button:hover {
    color: ${colors.purple};
  }
`;

export default ControlBar;
