import { FC } from 'react';
import LogoIcon from '../../assets/img/logo.svg';

export const Logo: FC = () => (
  <a href="/">
    <img src={LogoIcon} width="104" height="26" alt="Logo" />
  </a>
);
