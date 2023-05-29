import styled from 'styled-components';
import { COLORS } from '../../../theme';

type Props = {
  hasError: boolean | undefined;
};

export const UploadPhotoStyled = styled.div`
  width: 100%;
  max-width: 380px;
`;

export const UploadWrapper = styled.label`
  display: flex;
  width: 100%;

  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadButton = styled.span<Props>`
  padding: 14px 16px;

  color: ${COLORS.black};

  border-width: ${({ hasError }) => (hasError ? '2px' : '1px')};
  border-style: solid;
  border-color: ${({ hasError }) => (hasError ? COLORS.red : COLORS.black)};
  border-radius: 4px 0 0 4px;
`;

export const UploadCaption = styled.span<Props>`
  flex: 1;
  padding: 14px 16px;

  color: ${COLORS.placeholder};

  border-top-width: ${({ hasError }) => (hasError ? '2px' : '1px')};
  border-top-style: solid;
  border-top-color: ${({ hasError }) =>
    hasError ? COLORS.red : COLORS.border};
  border-right-width: ${({ hasError }) => (hasError ? '2px' : '1px')};
  border-right-style: solid;
  border-right-color: ${({ hasError }) =>
    hasError ? COLORS.red : COLORS.border};
  border-bottom-width: ${({ hasError }) => (hasError ? '2px' : '1px')};
  border-bottom-style: solid;
  border-bottom-color: ${({ hasError }) =>
    hasError ? COLORS.red : COLORS.border};

  border-radius: 0 4px 4px 0;
`;
