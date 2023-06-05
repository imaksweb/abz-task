import styled from 'styled-components';
import { COLORS, MEDIA } from '../../theme';

import introBg from '../../assets/img/intro-bg.jpg';
import introBgTablets from '../../assets/img/intro-bg_tablets.jpg';
import introBgDesktops from '../../assets/img/intro-bg_desktops.jpg';

export const IntroStyled = styled.section`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 16px 70px;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${introBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;

  @media (min-width: ${MEDIA.tablets}) {
    padding: 88px 32px;

    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${introBgTablets});
  }

  @media (min-width: ${MEDIA.desktops}) {
    padding: 164px 60px;

    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${introBgDesktops});
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;

  text-align: center;
`;

export const Description = styled.p`
  margin-bottom: 32px;

  text-align: center;
  color: ${COLORS.white};
`;
