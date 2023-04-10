import styled from 'styled-components';
import { COLORS, FONT_SIZES, LINE_HEIGHTS, WEIGHTS } from '../../theme';

interface Props {
  tAlign?: string;
  color?: string;
}

export const Title = styled.h2<Props>`
  font-size: ${FONT_SIZES.l};
  font-weight: ${WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.l};
  text-align: ${({ tAlign }) => tAlign || 'center'};
  color: ${({ color }) => color || COLORS.black};
`;
