import { FC } from 'react';
import { MenuStyled } from './Menu.styled';
import { Button } from '../Button';

export const Menu: FC = () => (
  <MenuStyled>
    <Button as="a" variant="primary" href="#get-request">
      Users
    </Button>
    <Button as="a" variant="primary" href="#post-request">
      Sign up
    </Button>
  </MenuStyled>
);
