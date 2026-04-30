import type {CardInfoType} from '../../../../../common/types/CardInfoType';
import CardBrandLogo from '../CardBrandLogo/CardBrandLogo';
import CardExpiryDateDisplay from '../CardExpiryDateDisplay/CardExpiryDateDisplay';
import CardNumberDisplay from '../CardNumberDisplay/CardNumberDisplay';

const CardPreviewContainer = ({cardInfo}: {cardInfo: CardInfoType}) => {
  const {cardNumbers, expiryMonth, expiryYear} = cardInfo;

  const getBrandName = (cardNumbers: string[]): 'visa' | 'masterCard' | null => {
    const fullNumber = cardNumbers.join('');

    if (fullNumber.startsWith('4')) return 'visa';

    const prefix = Number(fullNumber.slice(0, 2));
    if (prefix >= 51 && prefix <= 55) return 'masterCard';

    return null;
  };

  return (
    <div>
      <CardBrandLogo brandName={getBrandName(cardNumbers)} />
      <CardNumberDisplay cardNumbers={cardNumbers} />
      <CardExpiryDateDisplay expiryMonth={expiryMonth} expiryYear={expiryYear} />
    </div>
  );
};

export default CardPreviewContainer;
