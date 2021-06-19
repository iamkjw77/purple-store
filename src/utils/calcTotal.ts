import { numberWithCommas } from './numberWithCommas';

export const calcTotal = (total: number, fee: number): string => {
  return numberWithCommas(total + fee);
};
