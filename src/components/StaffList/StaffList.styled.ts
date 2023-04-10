import styled from 'styled-components';
import { MEDIA } from '../../theme';

export const StaffList = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 50px;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${MEDIA.tablets}) {
    gap: 16px;

    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA.desktops}) {
    gap: 30px;

    grid-template-columns: repeat(3, 1fr);
  }
`;
