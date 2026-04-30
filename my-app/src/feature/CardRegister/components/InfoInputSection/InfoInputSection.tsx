import {useState} from 'react';
import CvcField from './CvcField/CvCField';
import ExpiryField from './ExpiryField/ExpiryField';
import InputContainer from './InputContainer/InputContainer';
import NumberField from './NumberField/NumberField';

const InfoInputSection = () => {
  const [cvcNumbers, setCvcNumbers] = useState('');
  return (
    <div>
      <InputContainer title='결제할 카드 번호를 입력해 주세요' description='본인 명의의 카드만 결제 가능합니다.'>
        <NumberField />
      </InputContainer>
      <InputContainer title='카드 유효기간을 입력해 주세요' description='월/년도(MMYY)를 순서대로 입력해 주세요.'>
        <ExpiryField />
      </InputContainer>
      <InputContainer title='CVC 번호를 입력해 주세요'>
        <CvcField />
      </InputContainer>
    </div>
  );
};

export default InfoInputSection;
