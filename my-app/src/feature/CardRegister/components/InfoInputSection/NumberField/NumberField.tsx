import {useState} from 'react';
import Input from '../../../../../common/components/Input/Input';
import Label from '../../../../../common/components/Label/Label';

const NumberField = ({
  cardNumbers,
  setCardNumbers,
  setIsError,
}: {
  cardNumbers: string[];
  setCardNumbers: (value: string[]) => void;
  setIsError: (value: boolean) => void;
}) => {
  const INPUT_COUNT = 4;

  const [errorInfo, setErrorInfo] = useState({
    flag: Array(INPUT_COUNT).fill(false),
    currentErrorMsg: '',
  });

  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newChunks = cardNumbers.map((chunk, i) => (i === index ? value : chunk));

    setCardNumbers(newChunks);
  };

  const ERROR_MSG = '카드 번호 4자리를 입력해 주세요';

  const handleNumbersBlur = (index: number, eValue: string) => {
    const isValid = eValue.length === 4;
    const newFlag = errorInfo.flag.map((flag, i) => (i === index ? !isValid : flag));
    const firstErrorIdx = newFlag.indexOf(true);

    setErrorInfo({
      flag: newFlag,
      currentErrorMsg: firstErrorIdx === -1 ? '' : ERROR_MSG,
    });
    setIsError(firstErrorIdx !== -1);
  };

  const firstErrorIdx = errorInfo.flag.indexOf(true);

  return (
    <div>
      <Label value='카드 번호' />
      <div>
        {cardNumbers.map((chunk, index) => (
          <Input
            key={index}
            value={chunk}
            placeholder='1234'
            inputMode='numeric'
            maxLength={4}
            strokeMode={index === firstErrorIdx ? 'error' : 'default'}
            onChange={(e) => handleNumbersChange(index, e.target.value)}
            onBlur={(e) => handleNumbersBlur(index, e.target.value)}
          />
        ))}
      </div>

      <span>{errorInfo.currentErrorMsg}</span>
    </div>
  );
};

export default NumberField;
