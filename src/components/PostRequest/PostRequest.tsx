import { FC } from 'react';
import { PostRequestStyled } from './PostRequest.styled';
import { Container } from '../Container';
import { Title } from '../Title/Title.styled';
import { SignupForm } from '../SignupForm';

export const PostRequest: FC = () => (
  <PostRequestStyled>
    <Container>
      <Title>Working with POST request</Title>
      <SignupForm />
    </Container>
  </PostRequestStyled>
);
