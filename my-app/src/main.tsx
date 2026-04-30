import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import CardRegisterPage from './feature/CardRegister/CardRegisterPage';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardRegisterPage />
  </StrictMode>
);
