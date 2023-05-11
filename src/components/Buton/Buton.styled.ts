import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZES, WEIGHTS, LINE_HEIGHTS } from '../../theme';

interface Props {
  width?: string;
  variant?: 'primary';
  disabled?: boolean;
}

const primaryButtonStyles = css`
  background-color: ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.primary_hover};
  }

  &:disabled {
    background-color: ${COLORS.primary_disabled};
    cursor: not-allowed;
  }
`;

export const Buton = styled.button<Props>`
  margin: 0 auto;
  padding: 4px 0;
  width: ${({ width }) => width || '100px'};

  font-size: ${FONT_SIZES.m};
  font-weight: ${WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.m};
  color: ${COLORS.black};

  border: 1px solid transparent;
  border-radius: 80px;

  transition: 0.3s background-color ease;
  cursor: pointer;

  ${({ variant }) => variant === 'primary' && primaryButtonStyles};
`;
