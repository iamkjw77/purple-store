import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import calcBenefit from 'utils/calcBenefit';
import { calcMargin } from 'utils/calcQuarter';

type TooltipProps = {
  /** 총 가격 */
  price: number;
};

const Tooltip = ({ price }: TooltipProps) => {
  return (
    <TooltipContainer price={price}>
      {calcBenefit(price)}원 추가시 <span>16% 할인</span>
    </TooltipContainer>
  );
};

const TooltipContainer = styled.div<TooltipProps>`
  display: ${({ price }) => (price < 200000 ? 'inline-block' : 'none')};
  margin-left: ${({ price }) => (price < 200000 ? calcMargin(price) : '')};
  margin-bottom: ${calcRem(20)};
  font-size: ${fontSize.base};
  border-radius: 30px;
  padding: ${calcRem(20)};
  font-weight: bold;
  text-align: center;
  background: url('tooltip.svg') no-repeat 0 5px;
  line-height: 1.5;

  span {
    color: ${colors.purple};
  }
`;

TooltipContainer.displayName = 'TooltipContainer';

export default Tooltip;
