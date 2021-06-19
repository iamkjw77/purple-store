import { colors } from 'theme';
import benefitCriteria from 'constant/benefitCriteria';

type classNameProps = {
  icon: string;
  color: string;
  text: string;
};

export const make05IconName = (price: number): classNameProps => {
  if (price < benefitCriteria.STAGE_01)
    return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price >= benefitCriteria.STAGE_01)
    return { icon: 'CheckCircle', color: colors.purple, text: colors.purple };
};

export const make10IconName = (price: number): classNameProps => {
  if (price < benefitCriteria.STAGE_01)
    return { icon: 'Circle', color: colors.darkGray, text: colors.darkGray };
  if (price === benefitCriteria.STAGE_01)
    return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price > benefitCriteria.STAGE_01 && price < benefitCriteria.STAGE_02)
    return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price >= benefitCriteria.STAGE_02)
    return { icon: 'CheckCircle', color: colors.purple, text: colors.purple };
};

export const make20IconName = (price: number): classNameProps => {
  if (price < benefitCriteria.STAGE_02)
    return { icon: 'Circle', color: colors.darkGray, text: colors.darkGray };
  if (price === benefitCriteria.STAGE_02)
    return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price > benefitCriteria.STAGE_02 && price < benefitCriteria.STAGE_03)
    return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price >= benefitCriteria.STAGE_03)
    return { icon: 'CheckCircle', color: colors.purple, text: colors.purple };
};
