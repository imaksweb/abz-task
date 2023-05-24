import { FC } from 'react';
import { useQuery, useMutation } from 'react-query';
import { Formik, Form } from 'formik';

import { FormValues } from '../../types/FormValues';
import { SignupSchema } from '../../schemas/Signup.schema';

import fetchPositions from '../../api/fetchPositions';
import fetchToken from '../../api/fetchToken';
import { Input } from './Input';
import { FlexContainer } from '../Flex';
import { RadioGroup } from './RadioGroup';
import { Button } from '../Button';
import { UploadPhoto } from './UploadPhoto';
import { postUser } from '../../api/postUser';
import { Preloader } from '../Preloader';
import { SuccessRegistration } from '../SuccessRegistration';

export const SignupForm: FC = () => {
  const { data: positionsData } = useQuery(['positions'], fetchPositions);
  const { data: tokenData } = useQuery(['token'], fetchToken);
  const mutation = useMutation({
    mutationFn: (newUser: FormValues) => {
      return postUser(newUser, token);
    },
  });
  const positions = positionsData?.positions ?? [];
  const token = tokenData?.token ?? '';

  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    position_id: 0,
    photo: '',
  };

  if (mutation.isLoading) {
    return <Preloader />;
  }

  if (mutation.isSuccess) {
    console.log('Mutation data:', mutation);

    return <SuccessRegistration />;
  }

  if (mutation.isError) {
    const error = mutation.error as Error;

    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log('New user:', values);

        mutation.mutate(values);
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
