import type {CardInfoType} from '../../../../common/types/CardInfoType';
import CardPreviewContainer from './CardPreviewContainer/CardPreviewContainer';

const CardPreviewSection = ({cardInfo}: {cardInfo: CardInfoType}) => {
  return <CardPreviewContainer cardInfo={cardInfo} />;
};
export default CardPreviewSection;
