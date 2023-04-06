import { FC } from 'react';
import { Button } from '../Button';
import { MenuStyled } from './Menu.styled';

export const Menu: FC = () => (
  <MenuStyled>
    <Button>Users</Button>
    <Button>Sign up</Button>
  </MenuStyled>
);
