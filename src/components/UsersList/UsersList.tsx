import { FC, Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';
import { UsersListStyled, UsersListWrapper } from './UsersList.styled';
import { UserCard } from '../UserCard';

import { fetchUsers } from '../../api/fetchUsers';
import { Preloader } from '../Preloader';
import { Button } from '../Button';

export const UsersList: FC = () => {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    'users',
    fetchUsers,
    {
      getNextPageParam: (_lastPage, pages) => {
        return pages.length < pages[0].total_pages
          ? pages.length + 1
          : undefined;
      },
    }
  );

  const handleLoadMore = async (): Promise<void> => {
    await fetchNextPage();
  };

  return status === 'loading' ? (
    <Preloader />
  ) : status === 'error' ? (
    <p>Error: {(error as Error).message}</p>
  ) : (
    <UsersListStyled>
      <UsersListWrapper>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </Fragment>
        ))}
      </UsersListWrapper>
      {hasNextPage && (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <Button variant="primary" width="120px" onClick={handleLoadMore}>
          Show more
        </Button>
      )}
    </UsersListStyled>
  );
};
