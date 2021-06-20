export const calcRem = (size: number): string => `${size / 16}rem`;

export const calcInterval = (intervalLists: number[]) => {
  return intervalLists
    .reduce((interval, intervalItem) => {
      interval += calcRem(intervalItem) + ' ';
      return interval;
    }, '')
    .trim();
};

export const colors = {
  black: '#000',
  white: '#fff',
  gray: '#f5f5f5',
  darkGray: '#aaa',
  pink: '#fb3a61',
  light_pink: '#da77f2',
  purple: '#6415b7',
  light_purple: '#5f3dc4',
};

export const fontSize = {
  small: calcRem(16),
  base: calcRem(18),
  large: calcRem(22),
  xlarge: calcRem(27),
  title: calcRem(32),
};
