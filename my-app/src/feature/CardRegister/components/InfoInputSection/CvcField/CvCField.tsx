import Label from '../../../../../common/components/Label/Label';
import Input from '../../../../../common/components/Input/Input';
// import {useState} from 'react';

const CvcField = ({
  cvcNumber,
  setCvcNumber,
  // setIsError,
}: {
  cvcNumber: string;
  setCvcNumber: (value: string) => void;
  // setIsError: (value: boolean) => void;
}) => {
  const handleCvcNumberChange = (eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) {
      return;
    }

    setCvcNumber(eValue);
  };

  return (
    <div>
      <Label value='CVC' />
      <div>
        <Input
          value={cvcNumber}
          maxLength={3}
          inputMode='numeric'
          placeholder='123'
          onChange={(e) => handleCvcNumberChange(e.target.value)}
          // onBlur={(e) => handleCvcNumberBlur(e.target.value)}
        />
      </div>
      <span>에러 메시지</span>
    </div>
  );
};

export default CvcField;
