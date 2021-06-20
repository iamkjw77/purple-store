import styled from 'styled-components';
import { calcInterval, fontSize } from 'theme';

type KeyValueTextProps = {
  /** 키 내용 */
  title: string;
  /** value 내용 */
  value: string | number;
} & React.HTMLAttributes<HTMLDListElement>;

const KeyValueText = ({ title, value, ...restProps }: KeyValueTextProps) => {
  return (
    <StyledKeyValueText {...restProps}>
      <dt>{title}</dt>
      <dd>{value}원</dd>
    </StyledKeyValueText>
  );
};

const StyledKeyValueText = styled.dl`
  font-size: ${fontSize.xlarge};
  padding: ${calcInterval([20, 30])};
  display: flex;
  justify-content: space-between;

  dt,
  dd {
    display: inline;
  }

  dd {
    font-weight: bold;
  }
`;

StyledKeyValueText.displayName = 'StyledKeyValueText';

export default KeyValueText;
