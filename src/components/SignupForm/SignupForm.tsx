import { FC } from 'react';
import { useQuery } from 'react-query';
import { Formik, Form } from 'formik';

import { FormValues } from '../../types/FormValues';
import { SignupSchema } from '../../schemas/Signup.schema';

import fetchPositions from '../../api/fetchPositions';
import { Input } from './Input';
import { FlexContainer } from '../Flex';
import { RadioGroup } from './RadioGroup';
import { Button } from '../Button';
import { UploadPhoto } from './UploadPhoto';

type Props = {
  handleSubmit: (newUser: FormValues) => void;
};

export const SignupForm: FC<Props> = ({ handleSubmit }) => {
  const { data: positionsData } = useQuery(['positions'], fetchPositions);
  const positions = positionsData?.positions ?? [];

  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    position_id: 0,
    photo: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, dirty }) => (
        <Form>
          <FlexContainer direction="column" gap="50px">
            <Input name="name" placeholder="Your name" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="phone" placeholder="Phone" />

            <RadioGroup
              title="Select your position"
              name="position_id"
              options={positions}
            />

            <UploadPhoto name="photo" />

            <Button
              variant="primary"
              type="submit"
              disabled={
                isSubmitting || Object.keys(errors).length !== 0 || !dirty
              }
            >
              Sign up
            </Button>
          </FlexContainer>
        </Form>
      )}
    </Formik>
  );
};
