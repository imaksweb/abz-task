import styled from 'styled-components';
import { COLORS } from '../../../theme';

interface Props {
  value: string;
  hasError: boolean | undefined;
}

export const InputStyled = styled.div<Props>`
  width: 100%;
  max-width: 380px;

  input {
    display: block;
    width: 100%;
    padding: 14px 16px;

    font: inherit;
    color: inherit;

    background-color: ${COLORS.bg};
    border-width: ${({ hasError }) => (hasError ? '2px' : '1px')};
    border-style: solid;
    border-color: ${({ hasError }) => (hasError ? COLORS.red : COLORS.border)};
    border-radius: 4px;

    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px ${COLORS.bg} inset;
    }

    &:focus {
      border-color: ${COLORS.secondary};

      & ~ span {
        top: 0;
      }
    }
  }

  span {
    position: absolute;
    top: ${({ value }) => (value ? '0' : '50%')};
    left: 16px;
    padding: 0 4px;

    transform: translateY(-50%);

    color: ${({ hasError }) => (hasError ? COLORS.red : COLORS.placeholder)};
    background-color: ${COLORS.bg};

    transition: top 0.2s ease-in-out;
    pointer-events: none;
  }

  div {
    position: absolute;
  }
`;

export const InputWrapper = styled.label`
  position: relative;
`;
