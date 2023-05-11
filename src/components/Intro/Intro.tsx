import { FC } from 'react';
import { IntroStyled, IntroContainer, Description } from './Intro.styled';
import { Title } from '../Title/Title.styled';
import { COLORS } from '../../theme';
import { Button } from '../Button';

export const Intro: FC = () => (
  <IntroStyled>
    <IntroContainer>
      <Title as="h1" color={COLORS.white} mb={'20px'}>
        Test assignment for front-end developer
      </Title>
      <Description>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they&apos;ll be building web interfaces with accessibility
        in mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Description>
      <Button as="a" variant="primary" href="#post-request">
        Sign up
      </Button>
    </IntroContainer>
  </IntroStyled>
);
