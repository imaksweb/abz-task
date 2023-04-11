import styled from 'styled-components';
import { COLORS, FONT_SIZES, LINE_HEIGHTS, WEIGHTS } from '../../theme';

export const UserCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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

    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div > p {
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div > div {
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    a {
      font: inherit;
      text-decoration: none;
      color: ${COLORS.black};
    }
  }
`;
