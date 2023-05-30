import { FC, useEffect, useRef, HTMLProps } from 'react';
import { useField, FieldHookConfig } from 'formik';
import IMask from 'imask';

import { InputStyled, InputWrapper } from './Input.styled';
import { ErrorMessage } from '../../ErrorMessage';

export const Input: FC<
  HTMLProps<HTMLInputElement> & FieldHookConfig<string>
> = ({ name, type = 'text', placeholder }) => {
  const [field, meta] = useField<string>({ name, type, placeholder });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (type === 'tel' && inputRef.current) {
      const phoneMask = IMask(inputRef.current, {
        mask: '+{38}(\\000)000-00-00',
      });
      return () => {
        phoneMask.destroy();
      };
    }
  }, [type]);

  return (
    <InputStyled value={field.value} hasError={!!meta.error && meta.touched}>
      <InputWrapper>
        <input ref={inputRef} {...field} type={type} />
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
