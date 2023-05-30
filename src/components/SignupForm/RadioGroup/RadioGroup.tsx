import { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';

import {
  RadioButton,
  RadioCaption,
  RadioGroupStyled,
  RadioOption,
  RadioWrapper,
  Title,
} from './RadioGroup.styled';
import { Position } from '../../../types/Position';
import { ErrorMessage } from '../../ErrorMessage';

type Props<T> = {
  title: string;
  name: string;
  options: T[];
};

export const RadioGroup: FC<Props<Position> & FieldHookConfig<string>> = ({
  title,
  name,
  options,
}) => {
  const [field, meta] = useField({ name });

  return (
    <RadioGroupStyled>
      <Title>{title}</Title>
      <RadioWrapper>
        {options.map((option) => (
          <RadioOption key={option.id}>
            <RadioButton
              {...field}
              type="radio"
              name={name}
              value={option.id}
            />
            <RadioCaption>{option.name}</RadioCaption>
          </RadioOption>
        ))}
        {meta.error && meta.touched && (
          <div>
            <ErrorMessage>{meta.error}</ErrorMessage>
          </div>
        )}
      </RadioWrapper>
    </RadioGroupStyled>
  );
};
