import { QueryFunction } from 'react-query';
import { TokenAPIResponse } from '../types/Token';

const fetchToken: QueryFunction<TokenAPIResponse, ['token']> = async () => {
  const apiRes = await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  );

  if (!apiRes.ok) {
    throw new Error('Token fetch not ok');
  }

  return apiRes.json();
};

export default fetchToken;
