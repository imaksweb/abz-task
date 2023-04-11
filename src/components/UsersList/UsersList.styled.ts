import styled from 'styled-components';
import { MEDIA } from '../../theme';

export const UsersListStyled = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;

  grid-template-columns: repeat(1, minmax(328px, 344px));

  @media (min-width: ${MEDIA.tablets}) {
    gap: 16px;

    grid-template-columns: repeat(2, 344px);
  }

  @media (min-width: ${MEDIA.desktops}) {
    gap: 30px;

    grid-template-columns: repeat(3, minmax(282px, 370px));
  }
`;
