import { FC } from 'react';
import { Title } from '../Title';
import { Container } from '../Container';
import { GetRequestStyled } from './GetRequest.styled';
import { UsersList } from '../UsersList';
import { FlexContainer } from '../Flex';

export const GetRequest: FC = () => (
  <GetRequestStyled id="get-request">
    <Container>
      <Title>Working with GET request</Title>
      <FlexContainer direction="column">
        <UsersList />
      </FlexContainer>
    </Container>
  </GetRequestStyled>
);
