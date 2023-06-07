import styled from 'styled-components';

type Props = {
  direction?: string;
  jContent?: string;
  aItems?: string;
  gap?: string;
};

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ jContent }) => jContent || 'center'};
  align-items: ${({ aItems }) => aItems || 'center'};
  gap: ${({ gap }) => gap || '0'};
`;
