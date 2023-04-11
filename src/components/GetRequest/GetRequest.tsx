import { FC } from 'react';
import { Title } from '../Title/Title.styled';
import { Container } from '../Container';
import { GetRequestStyled } from './GetRequest.styled';
import { UsersList } from '../UsersList';

export const GetRequest: FC = () => (
  <GetRequestStyled>
    <Container>
      <Title>Working with GET request</Title>
      <UsersList />
    </Container>
  </GetRequestStyled>
);
