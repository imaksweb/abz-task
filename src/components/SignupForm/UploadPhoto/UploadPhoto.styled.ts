import styled from 'styled-components';
import { COLORS } from '../../../theme';

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

export const UploadButton = styled.span`
  padding: 14px 16px;

  color: ${COLORS.black};

  border: 1px solid ${COLORS.black};
  border-radius: 4px 0 0 4px;
`;

export const UploadCaption = styled.span`
  flex: 1;
  padding: 14px 16px;

  color: ${COLORS.placeholder};

  border-top: 1px solid ${COLORS.border};
  border-right: 1px solid ${COLORS.border};
  border-bottom: 1px solid ${COLORS.border};
  border-radius: 0 4px 4px 0;
`;
