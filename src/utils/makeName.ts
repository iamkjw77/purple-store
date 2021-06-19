import { colors } from 'theme';

type classNameProps = {
  icon: string;
  color: string;
  text: string;
};

export const make05IconName = (price: number): classNameProps => {
  if (price < 50000) return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price >= 50000) return { icon: 'CheckCircle', color: colors.purple, text: colors.purple };
};

export const make10IconName = (price: number): classNameProps => {
  if (price < 50000) return { icon: 'Circle', color: colors.darkGray, text: colors.darkGray };
  if (price === 50000) return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price > 50000 && price < 100000)
    return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price >= 100000) return { icon: 'CheckCircle', color: colors.purple, text: colors.purple };
};

export const make20IconName = (price: number): classNameProps => {
  if (price < 100000) return { icon: 'Circle', color: colors.darkGray, text: colors.darkGray };
  if (price === 100000) return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price > 100000 && price < 200000)
    return { icon: 'Circle', color: colors.purple, text: colors.darkGray };
  if (price >= 200000) return { icon: 'CheckCircle', color: colors.purple, text: colors.purple };
};
