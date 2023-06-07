import styled from 'styled-components';
import { COLORS } from '../../../theme';

type Props = {
  value: string;
  hasError: boolean | undefined;
};

export const InputStyled = styled.div<Props>`
  position: relative;
  width: 100%;
  max-width: 380px;
  padding-bottom: 18px;

  border-width: ${({ hasError }) => (hasError ? '0' : '1px')};
  border-style: solid;
  border-color: transparent;

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
    white-space: nowrap;
    background-color: ${COLORS.bg};

    transition: top 0.2s ease-in-out;
    pointer-events: none;
  }

  div {
    position: absolute;
    left: 16px;
    bottom: 0;
  }
`;

export const InputWrapper = styled.label`
  position: relative;
  display: block;
`;
