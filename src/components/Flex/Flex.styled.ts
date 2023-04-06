import styled from 'styled-components';

interface Props {
  jContent?: string;
  aItems?: string;
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  justify-content: ${({ jContent }) => jContent || 'center'};
  align-items: ${({ aItems }) => aItems || 'center'};
`;
