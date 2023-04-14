import styled from 'styled-components';
import { COLORS } from '../../theme';

export const ToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;

  width: 50px;
  height: 50px;

  color: ${COLORS.white};
  background-color: ${COLORS.secondary};
  border: none;
  border-radius: 50%;
  opacity: 0.5;

  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.secondary_hover};
  }
`;
