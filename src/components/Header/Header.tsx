import { FC } from 'react';
import { HeaderStyled } from './Header.styled';
import { Logo } from '../Logo';
import { Container } from '../Container';
import { Menu } from '../Menu';
import { FlexContainer } from '../Flex';

export const Header: FC = () => (
  <HeaderStyled>
    <Container>
      <FlexContainer jContent="space-between">
        <Logo />
        <Menu />
      </FlexContainer>
    </Container>
  </HeaderStyled>
);
