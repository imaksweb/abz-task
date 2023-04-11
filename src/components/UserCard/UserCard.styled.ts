import styled from 'styled-components';
import { COLORS, FONT_SIZES, LINE_HEIGHTS, WEIGHTS } from '../../theme';

export const UserCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  font: inherit;
  text-align: center;

  background-color: ${COLORS.white};
  border-radius: 10px;

  img {
    display: inline-block;
    width: 70px;
    height: 70px;
    margin: 0 auto;

    border-radius: 50%;
  }

  h3 {
    font-size: ${FONT_SIZES.m};
    font-weight: ${WEIGHTS.regular};
    line-height: ${LINE_HEIGHTS.m};
    color: ${COLORS.black};
  }

  div {
    display: flex;
    flex-direction: column;

    a {
      font: inherit;
      text-decoration: none;
      color: ${COLORS.black};
    }
  }
`;
