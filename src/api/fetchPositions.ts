import { QueryFunction } from 'react-query';
import { PositionsAPIResponse } from '../types/Position';

const fetchPositions: QueryFunction<
  PositionsAPIResponse,
  ['positions']
> = async () => {
  const apiRes = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
  );

  if (!apiRes.ok) {
    throw new Error('Page not found');
  }

  return apiRes.json();
};

export default fetchPositions;
