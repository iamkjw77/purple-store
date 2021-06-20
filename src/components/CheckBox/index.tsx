import Icon from 'components/Icon';
import { useState } from 'react';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';

type CheckBox = {
  /** 체크박스 레이블 */
  label?: string;
};

const CheckBox = ({ label }: CheckBox) => {
  const [isChecked, setisChecked] = useState(false);
  const handleClick = () => setisChecked(!isChecked);

  return (
    <StyledCheckBox>
      <input type="checkbox" onChange={handleClick} checked={isChecked} />
      {isChecked ? <Icon name="Unchecked" size={18} /> : <Icon name="Checked" size={18} />}
      {label}
    </StyledCheckBox>
  );
};

const StyledCheckBox = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: ${fontSize.large};

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  svg {
    margin-right: ${calcRem(10)};
    color: ${colors.purple};
  }
`;

StyledCheckBox.displayName = 'StyledCheckBox';

export default CheckBox;
