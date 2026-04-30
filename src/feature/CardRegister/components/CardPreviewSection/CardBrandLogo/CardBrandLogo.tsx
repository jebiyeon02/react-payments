type BrandName = 'visa' | 'masterCard' | null;

const CardBrandLogo = ({brandName}: {brandName: BrandName}) => {
  if (brandName === null) return null;

  return <div>{brandName}</div>;
};

export default CardBrandLogo;
