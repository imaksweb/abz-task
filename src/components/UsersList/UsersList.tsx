import { FC, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { UsersListStyled, UsersListWrapper } from './UsersList.styled';
import { UserCard } from '../UserCard';
import { Button } from '../Button';

import fetchUsers from '../../api/fetchUsers';
import { Preloader } from '../Preloader';
import { User } from '../../types/User';

export const UsersList: FC = () => {
  const [page, setPage] = useState(1);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const { data, isError, isFetching } = useQuery(['users', page], fetchUsers);

  const { users: newUsers = [], total_pages } = data || {};

  useEffect(() => {
    if (newUsers.length) {
      setAllUsers((currentUsers) => [...currentUsers, ...newUsers]);
    }
  }, [newUsers]);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    <UsersListStyled>
      <UsersListWrapper>
        {allUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersListWrapper>
      {isFetching && <Preloader />}
      {total_pages && page < total_pages && (
        <Button width="120px" onClick={handleShowMore}>
          Show more
        </Button>
      )}
    </UsersListStyled>
  );
};
