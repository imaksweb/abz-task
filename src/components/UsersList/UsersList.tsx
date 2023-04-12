import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { UsersListStyled, UsersListWrapper } from './UsersList.styled';
import { UserCard } from '../UserCard';
import { Button } from '../Button';

import fetchUsers from '../../api/fetchUsers';
import { Preloader } from '../Preloader';

export const UsersList: FC = () => {
  const [count, setCount] = useState(6);
  const { data, isLoading, isError } = useQuery(['users', count], fetchUsers);

  // console.log(data, isLoading, isError);

  const users = data?.users ?? [];

  // console.log(users);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <UsersListStyled>
      <UsersListWrapper>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersListWrapper>
      <Button
        width="120px"
        disabled={data?.total_pages === 1}
        onClick={() => setCount((current) => current + 6)}
      >
        Show more
      </Button>
    </UsersListStyled>
  );
};
