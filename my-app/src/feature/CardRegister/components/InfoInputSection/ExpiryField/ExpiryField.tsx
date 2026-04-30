import {useState} from 'react';
import Label from '../../../../../common/components/Label/Label';
import Input from '../../../../../common/components/Input/Input';

const ExpiryField = ({
  expiryMonth,
  expiryYear,
  setExpiryMonth,
  setExpiryYear,
  setIsError,
}: {
  expiryMonth: string;
  expiryYear: string;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
  setIsError: (value: boolean) => void;
}) => {
  const INPUT_COUNT = 2;

  const [errorInfo, setErrorInfo] = useState({
    flag: Array(INPUT_COUNT).fill(false),
    currentErrorMsg: '',
  });

  const handleMonthChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) return;

    if (value.length === 0) {
      setExpiryMonth('');
      return;
    }

    if (value.length === 1) {
      if (Number(value) >= 2) {
        setExpiryMonth(`0${value}`);
        return;
      }
      setExpiryMonth(value);
      return;
    }

    if (value.length === 2) {
      const month = Number(value);
      if (month < 1 || month > 12) return;
      setExpiryMonth(value);
    }

    handleExpiryBlur(index, eValue);
  };

  const handleYearChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) return;
    if (value.length > 2) return;

    setExpiryYear(value);
    handleExpiryBlur(index, eValue);
  };
  const ERROR_MSG = '2자리를 입력해 주세요';

  const handleExpiryBlur = (index: number, eValue: string) => {
    const isValid = eValue.length === 2;
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
      <Label value='유효기간' />
      <div>
        <Input
          value={expiryMonth}
          maxLength={2}
          inputMode='numeric'
          placeholder='MM'
          strokeMode={0 === firstErrorIdx ? 'error' : 'default'}
          onChange={(e) => handleMonthChange(0, e.target.value)}
          onBlur={(e) => handleExpiryBlur(0, e.target.value)}
        />
        <Input
          value={expiryYear}
          maxLength={2}
          placeholder='YY'
          inputMode='numeric'
          strokeMode={1 === firstErrorIdx ? 'error' : 'default'}
          onChange={(e) => handleYearChange(1, e.target.value)}
          onBlur={(e) => handleExpiryBlur(1, e.target.value)}
        />
      </div>

      <span>{errorInfo.currentErrorMsg}</span>
    </div>
  );
};

export default ExpiryField;
