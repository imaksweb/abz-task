import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const RadioGroupStyled = styled.div`
  width: 100%;
  max-width: 380px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;

  font: inherit;
`;

export const RadioWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 14px;

  div {
    position: absolute;
    left: 16px;
    bottom: 0;
  }
`;

export const RadioOption = styled.label`
  display: inline-flex;
  gap: 12px;
  align-items: center;

  cursor: pointer;
`;

export const RadioCaption = styled.span``;

export const RadioButton = styled.input`
  appearance: none;
  position: relative;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid ${COLORS.border};
  border-radius: 50%;

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 10px;
    height: 10px;

    background-color: transparent;
    border-radius: 50%;

    transition: background-color 0.3s ease;
  }

  &:checked {
    border-color: ${COLORS.secondary};

    &::after {
      background-color: ${COLORS.secondary};
    }
  }
`;
