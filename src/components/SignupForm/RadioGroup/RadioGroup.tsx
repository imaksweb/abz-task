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
            <RadioButton type="radio" name={name} value={option.name} />
            <RadioCaption>{option.name}</RadioCaption>
          </RadioOption>
        ))}
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </RadioWrapper>
    </RadioGroupStyled>
  );
};
