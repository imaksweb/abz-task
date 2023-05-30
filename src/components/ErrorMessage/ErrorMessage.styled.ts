import styled from 'styled-components';
import { COLORS, FONT_SIZES, LINE_HEIGHTS, WEIGHTS } from '../../theme';

export const ErrorMessage = styled.p`
  font-size: ${FONT_SIZES.s};
  font-weight: ${WEIGHTS.regular};
  line-height: ${LINE_HEIGHTS.s};
  text-align: center;
  color: ${COLORS.red};
`;
