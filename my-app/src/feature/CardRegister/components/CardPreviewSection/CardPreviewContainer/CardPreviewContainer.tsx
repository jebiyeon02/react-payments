import styled from 'styled-components';
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
    <Container>
      <IcChip></IcChip>
      <CardBrandLogo brandName={getBrandName(cardNumbers)} />
      <CardNumberDisplay cardNumbers={cardNumbers} />
      <CardExpiryDateDisplay expiryMonth={expiryMonth} expiryYear={expiryYear} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  width: 212px;
  height: 132px;
  background-color: #333333;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const IcChip = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 36px;
  height: 22px;
  background-color: #ddcd78;
  border-radius: 4px;
`;

export default CardPreviewContainer;
