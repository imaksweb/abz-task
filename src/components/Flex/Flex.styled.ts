import styled from 'styled-components';

interface Props {
  direction?: string;
  jContent?: string;
  aItems?: string;
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ jContent }) => jContent || 'center'};
  align-items: ${({ aItems }) => aItems || 'center'};
`;
