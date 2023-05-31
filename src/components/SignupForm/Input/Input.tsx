import { FC, HTMLProps } from 'react';
import { useField, FieldHookConfig } from 'formik';

import { InputStyled, InputWrapper } from './Input.styled';
import { ErrorMessage } from '../../ErrorMessage';

export const Input: FC<
  HTMLProps<HTMLInputElement> & FieldHookConfig<string>
> = ({ name, type = 'text', placeholder }) => {
  const [field, meta] = useField<string>({ name, type, placeholder });

  return (
    <InputStyled value={field.value} hasError={!!meta.error && meta.touched}>
      <InputWrapper>
        <input {...field} type={type} />
        <span>{placeholder}</span>
      </InputWrapper>
      {meta.error && meta.touched && (
        <div>
          <ErrorMessage>{meta.error}</ErrorMessage>
        </div>
      )}
    </InputStyled>
  );
};
