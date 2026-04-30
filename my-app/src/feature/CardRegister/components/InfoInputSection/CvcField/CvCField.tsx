import Label from '../../../../../common/components/Label/Label';
import Input from '../../../../../common/components/Input/Input';
import {useState} from 'react';

const CvcField = ({
  cvcNumber,
  setCvcNumber,
  setIsError,
}: {
  cvcNumber: string;
  setCvcNumber: (value: string) => void;
  setIsError: (value: boolean) => void;
}) => {
  const INPUT_COUNT = 2;

  const [errorInfo, setErrorInfo] = useState({
    flag: Array(INPUT_COUNT).fill(false),
    currentErrorMsg: '',
  });
  const handleCvcNumberChange = (eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) {
      return;
    }

    setCvcNumber(eValue);
  };

  const ERROR_MSG = 'CVC 번호 3자리를 입력해 주세요';

  const handleCvcBlur = (index: number, eValue: string) => {
    const isValid = eValue.length === 3;
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
      <Label value='CVC' />
      <div>
        <Input
          value={cvcNumber}
          maxLength={3}
          inputMode='numeric'
          placeholder='123'
          strokeMode={0 === firstErrorIdx ? 'error' : 'default'}
          onChange={(e) => handleCvcNumberChange(e.target.value)}
          onBlur={(e) => handleCvcBlur(0, e.target.value)}
        />
      </div>
      <span>{errorInfo.currentErrorMsg}</span>
    </div>
  );
};

export default CvcField;
