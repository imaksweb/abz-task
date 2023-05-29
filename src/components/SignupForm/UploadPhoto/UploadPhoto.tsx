import { FC, ChangeEvent } from 'react';
import { useField, FieldHookConfig } from 'formik';

import {
  UploadPhotoStyled,
  UploadWrapper,
  UploadInput,
  UploadButton,
  UploadCaption,
} from './UploadPhoto.styled';

type Props = {
  name: string;
};

export const UploadPhoto: FC<Props & FieldHookConfig<File | null>> = ({
  name,
}) => {
  const [field, meta, helpers] = useField<File | null>({ name });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];

    helpers.setTouched(true, true);
    helpers.setValue(file, true);
  };

  return (
    <UploadPhotoStyled>
      <UploadWrapper>
        <UploadInput
          {...field}
          type="file"
          value={undefined}
          accept=".jpeg, .jpg"
          onChange={handleFileChange}
        />
        <UploadButton>Upload</UploadButton>
        <UploadCaption>
          {field.value?.name || 'Upload your photo'}
        </UploadCaption>
      </UploadWrapper>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </UploadPhotoStyled>
  );
};
