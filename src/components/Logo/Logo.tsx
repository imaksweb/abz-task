import { FC } from 'react';
import LogoIcon from '../../assets/img/logo.svg';

export const Logo: FC = () => (
  <a href="/">
    <img src={LogoIcon} alt="Logo" />
  </a>
);
