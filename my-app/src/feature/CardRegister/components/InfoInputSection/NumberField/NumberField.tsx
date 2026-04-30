import Input from '../../../../../common/components/Input/Input';
import Label from '../../../../../common/components/Label/Label';

const NumberField = ({
  cardNumbers,
  setCardNumbers,
}: {
  cardNumbers: string[];
  setCardNumbers: (value: string[]) => void;
}) => {
  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newChunks = cardNumbers.map((chunk, i) => (i === index ? value : chunk));

    setCardNumbers(newChunks);
  };

  return (
    <div>
      <Label value='카드 번호' />
      <div>
        {cardNumbers.map((chunk, index) => (
          <Input
            key={index}
            value={chunk}
            placeholder='1234'
            type='text'
            maxLength={4}
            onChange={(e) => handleNumbersChange(index, e.target.value)}
          />
        ))}
      </div>

      <span>에러 메시지</span>
    </div>
  );
};

export default NumberField;
