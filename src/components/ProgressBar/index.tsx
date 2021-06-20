import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, fontSize } from 'theme';
import { calcQuarter } from 'utils/calcQuarter';
import { make05IconName, make10IconName, make20IconName } from 'utils/makeName';
import Icon from 'components/Icon';

type ProgressBarType = {
  /** 총 가격 */
  price: number;
};

const ProgressBar = ({ price }: ProgressBarType) => {
  return (
    <ProgressBarContainer price={price}>
      <span className="basic-progress"></span>

      {Array.from({ length: calcQuarter(price) }).map((_, i) => (
        <span key={i} className="active"></span>
      ))}

      <Icon className="icon-basic" name="CheckCircle" size={25} />
      <Icon className="icon-05" name={make05IconName(price).icon} size={25} />
      <Icon className="icon-10" name={make10IconName(price).icon} size={25} />
      <Icon className="icon-20" name={make20IconName(price).icon} size={25} />

      <StyledProgressBarText price={price}>
        <span className="text-basic">기본 5%↓</span>
        <span className="text-05">5만원 10%↓</span>
        <span className="text-10">10만원 13%↓</span>
        <span className="text-20">20만원 15%↓</span>
      </StyledProgressBarText>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div<ProgressBarType>`
  position: relative;
  width: ${calcRem(550)};
  height: ${calcRem(20)};
  background-color: ${colors.gray};
  border-radius: 15px;

  svg {
    position: absolute;
    top: -5px;
    border-radius: 50%;
    background-color: ${colors.white};
    color: ${colors.darkGray};
  }

  .icon-basic {
    left: 60px;
    color: ${colors.purple};
  }
  .icon-05 {
    left: 140px;
    color: ${({ price }) => make05IconName(price).color};
  }
  .icon-10 {
    left: 230px;
    color: ${({ price }) => make10IconName(price).color};
  }
  .icon-20 {
    right: 0;
    color: ${({ price }) => make20IconName(price).color};
  }

  .basic-progress {
    display: inline-block;
    width: ${calcRem(120)};
    height: ${calcRem(20)};
    background-color: ${colors.purple};
    border-radius: 15px;
  }

  .active {
    display: inline-block;
    width: ${calcRem(70)};
    height: ${calcRem(20)};
    background-color: ${colors.purple};
    border: 1px solid ${colors.purple};
  }
`;

const StyledProgressBarText = styled.div<ProgressBarType>`
  display: flex;
  justify-content: space-between;
  font-size: ${fontSize.base};
  font-weight: bold;
  margin-left: ${calcRem(45)};
  margin-top: ${calcRem(20)};
  color: ${colors.darkGray};

  .text-basic {
    color: ${colors.purple};
  }
  .text-05 {
    color: ${({ price }) => make05IconName(price).text};
  }
  .text-10 {
    color: ${({ price }) => make10IconName(price).text};
  }
  .text-20 {
    color: ${({ price }) => make20IconName(price).text};
  }
`;

ProgressBarContainer.displayName = 'ProgressBarContainer';
StyledProgressBarText.displayName = 'StyledProgressBarText';

export default React.memo(ProgressBar);
