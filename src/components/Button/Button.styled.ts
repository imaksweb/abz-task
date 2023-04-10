import styled from 'styled-components';
import { COLORS, FONT_SIZES, WEIGHTS, LINE_HEIGHTS } from '../../theme';

interface Props {
  width?: string;
  color?: string;
  bg?: string;
}

export const Button = styled.button<Props>`
  width: ${({ width }) => width || '100px'};
  padding: 4px 0;

  font-size: ${FONT_SIZES.m};
  font-weight: ${WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.m};
  color: ${({ color }) => color || COLORS.black};

  background-color: ${({ bg }) => bg || COLORS.primary};
  border: 1px solid transparent;
  border-radius: 80px;

  cursor: pointer;
`;
