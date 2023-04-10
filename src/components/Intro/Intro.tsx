import { FC } from 'react';
import { IntroStyled, IntroContainer } from './Intro.styled';
import { Title } from '../Title/Title.styled';
import { COLORS } from '../../theme';
import { Button } from '../Button';

export const Intro: FC = () => (
  <IntroStyled>
    <IntroContainer>
      <Title as="h1" color={COLORS.white}>
        Test assignment for front-end developer
      </Title>
      <p>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they&apos;ll be building web interfaces with accessibility
        in mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button>Sign up</Button>
    </IntroContainer>
  </IntroStyled>
);
