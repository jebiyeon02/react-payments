import {useState} from 'react';
import Input from '../../../../../common/components/Input/Input';
import Label from '../../../../../common/components/Label/Label';

const NumberField = () => {
  const [numbers, setNumbers] = useState('1444');
  return (
    <div>
      <Label value='카드 번호' />
      <div>
        <Input value={numbers} placeholder='1234' onChange={(e: any) => setNumbers(e.target.value)} />
        <Input value={numbers} placeholder='1234' onChange={(e: any) => setNumbers(e.target.value)} />
        <Input value={numbers} placeholder='1234' onChange={(e: any) => setNumbers(e.target.value)} />
        <Input value={numbers} placeholder='1234' onChange={(e: any) => setNumbers(e.target.value)} />
      </div>

      <span>에러 메시지</span>
    </div>
  );
};

export default NumberField;
