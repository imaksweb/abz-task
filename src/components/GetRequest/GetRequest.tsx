import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Title } from '../Title/Title.styled';
import { Container } from '../Container';
import { GetRequestStyled } from './GetRequest.styled';
import { UsersList } from '../UsersList';

import fetchUsers from '../../api/fetchUsers';
import { Button } from '../Button';
import { FlexContainer } from '../Flex';
import { Preloader } from '../Preloader';

export const GetRequest: FC = () => {
  const [count, setCount] = useState(6);
  const { data, isLoading, isError } = useQuery(['users', count], fetchUsers);

  // console.log(data, isLoading, isError);

  const users = data?.users ?? [];

  // console.log(users);

  return (
    <GetRequestStyled>
      <Container>
        <Title>Working with GET request</Title>
        {isLoading && <Preloader />}
        <FlexContainer direction="column">
          <UsersList users={users} />
          <Button width="120px">Show more</Button>
        </FlexContainer>
      </Container>
    </GetRequestStyled>
  );
};
