import CheckBox from 'components/CheckBox';
import styled from 'styled-components';
import { calcInterval, colors, fontSize } from 'theme';
import Button from 'components/Button';

const ControlBar = () => {
  return (
    <StyledControlBar>
      <CheckBox label="전체선택" />
      <Button bgColor={colors.white} color={colors.darkGray}>
        선택삭제
      </Button>
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
    width: auto;
    font-size: ${fontSize.large};
    padding: ${calcInterval([10, 10])};
    border-radius: 5px;
    font-weight: bold;
    border: none;
  }

  button:hover {
    color: ${colors.purple};
  }
`;

export default ControlBar;
