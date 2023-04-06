import styled from 'styled-components';
import { MEDIA } from '../../theme';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${MEDIA.tablets}) {
    padding: 0 32px;
  }

  @media (min-width: ${MEDIA.desktops}) {
    padding: 0 60px;
  }

  @media (min-width: ${MEDIA.ultraDesktops}) {
    padding: 0;
  }
`;
