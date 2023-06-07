import styled from 'styled-components';
import { COLORS, FONT_SIZES, LINE_HEIGHTS, FONT_WEIGHTS } from '../../theme';

type Props = {
  color?: string;
  mb?: string;
};

export const Title = styled.h2<Props>`
  margin-bottom: ${({ mb }) => mb || '50px'};

  font-size: ${FONT_SIZES.l};
  font-weight: ${FONT_WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.l};
  text-align: center;
  color: ${({ color }) => color || COLORS.black};
`;
