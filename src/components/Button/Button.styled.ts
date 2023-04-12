import styled from 'styled-components';
import { COLORS, FONT_SIZES, WEIGHTS, LINE_HEIGHTS } from '../../theme';

interface Props {
  disabled: boolean;
  width?: string;
  color?: string;
  bg?: string;
  bgHover?: string;
}

export const Button = styled.button<Props>`
  display: block;
  width: ${({ width }) => width || '100px'};
  margin: 0 auto;
  padding: 4px 0;

  font-size: ${FONT_SIZES.m};
  font-weight: ${WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.m};
  color: ${({ disabled, color }) =>
    disabled ? COLORS.white : color ? color : COLORS.black};

  background-color: ${({ disabled, bg }) =>
    disabled ? COLORS.primary_disabled : bg ? bg : COLORS.primary};
  border: 1px solid transparent;
  border-radius: 80px;

  transition: 0.3s background-color ease;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled, bgHover }) =>
      disabled
        ? COLORS.primary_disabled
        : bgHover
        ? bgHover
        : COLORS.primary_hover};
  }
`;
