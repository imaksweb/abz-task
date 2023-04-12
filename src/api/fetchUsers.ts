import { QueryFunction } from 'react-query';
import { UsersAPIResponse } from '../types/User';

const fetchUsers: QueryFunction<UsersAPIResponse, ['users', number]> = async ({
  queryKey,
}) => {
  const count = queryKey[1];

  const apiRes = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`
  );

  if (!apiRes.ok) {
    throw new Error('Users fetch not ok');
  }

  return apiRes.json();
};

export default fetchUsers;
