import Label from '../../../../../common/components/Label/Label';
import Input from '../../../../../common/components/Input/Input';

const ExpiryField = ({
  expiryMonth,
  expiryYear,
  setExpiryMonth,
  setExpiryYear,
}: {
  expiryMonth: string;
  expiryYear: string;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
}) => {
  const handleMonthChange = (eValue: string) => {
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
  };

  const handleYearChange = (eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) return;
    if (value.length > 2) return;

    setExpiryYear(value);
  };

  return (
    <div>
      <Label value='유효기간' />
      <div>
        <Input
          value={expiryMonth}
          maxLength={2}
          inputMode='numeric'
          placeholder='MM'
          onChange={(e) => handleMonthChange(e.target.value)}
        />
        <Input
          value={expiryYear}
          maxLength={2}
          placeholder='YY'
          inputMode='numeric'
          onChange={(e) => handleYearChange(e.target.value)}
        />
      </div>

      <span>에러 메시지</span>
    </div>
  );
};

export default ExpiryField;
