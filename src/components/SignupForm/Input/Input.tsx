import { FC, HTMLProps } from 'react';
import { useField, FieldHookConfig } from 'formik';

import { InputStyled } from './Input.styled';

export const Input: FC<
  HTMLProps<HTMLInputElement> & FieldHookConfig<string>
> = ({ name, type = 'text', placeholder }) => {
  const [field, meta] = useField<string>({ name, type, placeholder });

  return (
    <InputStyled value={field.value}>
      <label>
        <input {...field} type={type} />
        <span>{placeholder}</span>
      </label>
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </InputStyled>
  );
};
