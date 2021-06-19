import benefitCriteria from 'constant/benefitCriteria';

export const calcQuarter = (price: number): number => {
  if (price > 0 && price < benefitCriteria.STAGE_01) return 1;
  if (price === benefitCriteria.STAGE_01) return 2;

  if (price > benefitCriteria.STAGE_01 && price < benefitCriteria.STAGE_02) return 3;
  if (price === benefitCriteria.STAGE_02) return 4;

  if (price > benefitCriteria.STAGE_02 && price < benefitCriteria.STAGE_03) return 5;
  if (price >= benefitCriteria.STAGE_03) return 6;
};

export const calcMargin = (price: number): string => {
  if (price > 0 && price < benefitCriteria.STAGE_01) return '15px';
  if (price >= benefitCriteria.STAGE_01 && price < benefitCriteria.STAGE_02) return '107px';
  if (price >= benefitCriteria.STAGE_02 && price < benefitCriteria.STAGE_03) return '179px';
};
