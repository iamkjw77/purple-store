import benefitCriteria from 'constant/benefitCriteria';

const calcBenefit = (totalPrice) => {
  if (totalPrice > 0 && totalPrice < benefitCriteria.STAGE_01)
    return benefitCriteria.STAGE_01 - totalPrice;
  if (totalPrice > benefitCriteria.STAGE_01 && totalPrice < benefitCriteria.STAGE_02)
    return benefitCriteria.STAGE_02 - totalPrice;
  if (totalPrice > benefitCriteria.STAGE_02 && totalPrice < benefitCriteria.STAGE_03)
    return benefitCriteria.STAGE_03 - totalPrice;
  if (totalPrice >= benefitCriteria.STAGE_03) return 0;
};

export default calcBenefit;
