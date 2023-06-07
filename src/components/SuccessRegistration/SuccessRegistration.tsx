import { FC } from 'react';
import { Title } from '../Title';
import { SuccessRegistrationStyled } from './SuccessRegistration.styled';

import SuccessImage from '../../assets/img/success-image.svg';

export const SuccessRegistration: FC = () => (
  <SuccessRegistrationStyled>
    <Title>User successfully registered</Title>
    <img src={SuccessImage} alt="Successful registration" />
  </SuccessRegistrationStyled>
);
