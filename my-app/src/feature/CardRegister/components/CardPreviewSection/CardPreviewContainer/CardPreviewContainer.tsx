import type {CardInfoType} from '../../../../../common/types/CardInfoType';
import CardBrandLogo from '../CardBrandLogo/CardBrandLogo';
import CardExpiryDateDisplay from '../CardExpiryDateDisplay/CardExpiryDateDisplay';
import CardNumberDisplay from '../CardNumberDisplay/CardNumberDisplay';

const CardPreviewContainer = ({cardInfo}: {cardInfo: CardInfoType}) => {
  const {cardNumbers, expiryMonth, expiryYear} = cardInfo;
  return (
    <div>
      <CardBrandLogo />
      <CardNumberDisplay cardNumbers={cardNumbers} />
      <CardExpiryDateDisplay expiryMonth={expiryMonth} expiryYear={expiryYear} />
    </div>
  );
};

export default CardPreviewContainer;
