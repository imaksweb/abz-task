import styled from 'styled-components';
import { COLORS } from '../../theme';

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
`;

export const Image = styled.img`
  display: inline-block;
  width: 70px;
  height: 70px;
  margin: 0 auto;

  border-radius: 50%;
`;

export const Text = styled.p`
  font: inherit;

  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Link = styled.a`
  font: inherit;
  text-decoration: none;
  color: ${COLORS.black};
`;
