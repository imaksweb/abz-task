import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { UsersListStyled } from './UsersList.styled';
import fetchUsers from '../../api/fetchUsers';
import { UserCard } from '../UserCard';

export const UsersList: FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(['users', page], fetchUsers);

  // console.log(data, isLoading, isError);

  const users = data?.users ?? [];

  // console.log(users);

  return (
    <UsersListStyled>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </UsersListStyled>
  );
};
