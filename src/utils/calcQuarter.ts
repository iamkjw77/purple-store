export const calcQuarter = (price: number): number => {
  if (price > 0 && price < 50000) return 1;
  if (price === 50000) return 2;

  if (price > 50000 && price < 100000) return 3;
  if (price === 100000) return 4;

  if (price > 100000 && price < 200000) return 5;
  if (price >= 200000) return 6;
};

export const calcMargin = (price: number): string => {
  if (price > 0 && price < 50000) return '15px';
  if (price >= 50000 && price < 100000) return '107px';
  if (price >= 100000 && price < 200000) return '179px';
};
