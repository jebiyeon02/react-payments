import Label from '../../../../../common/components/Label/Label';
import Input from '../../../../../common/components/Input/Input';

const CvcField = ({cvcNumbers, setCvcNumbers}: {cvcNumbers: string; setCvcNumbers: (value: string) => void}) => {
  const handleCvcNumbersChange = (eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) {
      return;
    }

    setCvcNumbers(eValue);
  };
  return (
    <div>
      <Label value='CVC' />
      <div>
        <Input
          value={cvcNumbers}
          maxLength={3}
          inputMode='numeric'
          placeholder='123'
          onChange={(e) => handleCvcNumbersChange(e.target.value)}
        />
      </div>
      <span>에러 메시지</span>
    </div>
  );
};

export default CvcField;
