import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';

type ButtonProps = {
  contents: string;
  bgColor: string;
  color: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonStyle = {
  bgColor: string;
  color: string;
};

const Button = ({ contents, bgColor, color, ...restProps }: ButtonProps) => {
  return (
    <ButtonStyle bgColor={bgColor} color={color} {...restProps}>
      {contents}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<ButtonStyle>`
  width: ${calcRem(250)};
  border: 2px solid ${colors.purple};
  text-align: center;
  padding: ${calcRem(20)};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${fontSize.xlarge};
  font-weight: bold;
  border-radius: 10px;
`;

export default Button;
