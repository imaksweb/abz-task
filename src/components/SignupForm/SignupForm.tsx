import { FC } from 'react';
import { useQuery } from 'react-query';
import { Formik, Form } from 'formik';

import { FormValues } from '../../types/FormValues';
import { SignupSchema } from '../../schemas/Signup.schema';

import fetchPositions from '../../api/fetchPositions';
import { Input } from './Input';
import { FlexContainer } from '../Flex';
import { RadioGroup } from './RadioGroup';
import { Buton } from '../Buton/Buton.styled';

export const SignupForm: FC = () => {
  const { data } = useQuery(['positions'], fetchPositions);
  const positions = data?.positions ?? [];
  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    position: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, errors, dirty }) => (
        <Form>
          <FlexContainer direction="column" gap="50px">
            <Input name="name" placeholder="Your name" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="phone" placeholder="Phone" />

            <RadioGroup
              title="Select your position"
              name="position"
              options={positions}
            />
            <Buton
              variant="primary"
              type="submit"
              disabled={
                isSubmitting || Object.keys(errors).length !== 0 || !dirty
              }
            >
              Sign up
            </Buton>
          </FlexContainer>
        </Form>
      )}
    </Formik>
  );
};
