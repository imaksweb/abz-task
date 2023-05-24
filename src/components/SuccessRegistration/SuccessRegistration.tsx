import { FC } from 'react';
import { Title } from '../Title/Title.styled';
import { SuccessRegistrationStyled } from './SuccessRegistration.styled';

import SuccessImage from '../../assets/img/success-image.svg';

export const SuccessRegistration: FC = () => {
  return (
    <SuccessRegistrationStyled>
      <Title>User successfully registered</Title>
      <img src={SuccessImage} alt="Successful registration" />
    </SuccessRegistrationStyled>
  );
};
