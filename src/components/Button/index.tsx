import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';

type ButtonProps = {
  children: React.ReactNode;
  bgColor: string;
  color: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonStyle = {
  bgColor: string;
  color: string;
};

const Button = ({ children, bgColor, color, ...restProps }: ButtonProps) => {
  return (
    <ButtonStyle bgColor={bgColor} color={color} {...restProps}>
      {children}
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
