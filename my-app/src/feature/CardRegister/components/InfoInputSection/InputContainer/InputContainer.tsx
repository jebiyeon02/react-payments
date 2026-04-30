import type {ReactNode} from 'react';
import Description from '../../../../../common/components/Description/Description';
import Title from '../../../../../common/components/Title/Title';

const InputContainer = ({title, description, children}: {title: string; description?: string; children: ReactNode}) => {
  return (
    <div>
      <Title value={title} />
      {description && <Description value={description} />}
      {children}
    </div>
  );
};

export default InputContainer;
