import { FC } from 'react';
import { UsersListStyled } from './UsersList.styled';
import { UserCard } from '../UserCard';
import { User } from '../../types/User';

type Props = {
  users: User[];
};

export const UsersList: FC<Props> = ({ users }) => {
  return (
    <UsersListStyled>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </UsersListStyled>
  );
};
