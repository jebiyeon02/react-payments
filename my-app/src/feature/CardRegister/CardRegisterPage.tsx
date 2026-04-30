import {useState} from 'react';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';

const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const cardInfo = {
    cardNumbers,
    expiryMonth,
    expiryYear,
  };

  return (
    <div>
      <CardPreviewSection cardInfo={cardInfo} />
      <InfoInputSection />
    </div>
  );
};

export default CardRegisterPage;
