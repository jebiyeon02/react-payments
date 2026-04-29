import styled from 'styled-components';

type StrokeModeType = 'default' | 'focus' | 'error';

const STROKE_MODE_COLOR: Record<StrokeModeType, string> = {
  default: '#ACACAC',
  focus: '#000000',
  error: '#FF3D3D',
};

type InputPropsType = {
  value: string;
  placeholder: string;
  strokeMode: StrokeModeType;
};

const StyledInput = styled.input<{$strokeMode: StrokeModeType}>`
  font-size: 11px;
  font-weight: 400;
  color: #000;
  padding: 8px;
  border: 1px solid ${(props) => STROKE_MODE_COLOR[props.$strokeMode]};
  border-radius: 4px;
`;

const Input = ({value, placeholder, strokeMode = 'default'}: InputPropsType) => {
  return <StyledInput $strokeMode={strokeMode} placeholder={placeholder} value={value}></StyledInput>;
};

export default Input;
