import { FC } from 'react';
import { useQuery, useMutation } from 'react-query';

import { FormValues } from '../../types/FormValues';

import { ErrorWrapper, PostRequestStyled } from './PostRequest.styled';
import { Container } from '../Container';
import { Title } from '../Title/Title.styled';
import { SignupForm } from '../SignupForm';
import { Preloader } from '../Preloader';
import fetchToken from '../../api/fetchToken';
import { postUser } from '../../api/postUser';
import { SuccessRegistration } from '../SuccessRegistration';
import { ErrorMessage } from '../ErrorMessage';

export const PostRequest: FC = () => {
  const { data: tokenData } = useQuery(['token'], fetchToken);
  const mutation = useMutation({
    mutationFn: (newUser: FormValues) => {
      return postUser(newUser, token);
    },
  });
  const token = tokenData?.token ?? '';
  const error = mutation.error as Error;

  const handleSubmit = (newUser: FormValues) => {
    console.log('New user:', newUser);
    const { phone } = newUser;
    const formattedPhone = phone.replace(/\D/g, '');

    const formattedUser = { ...newUser, phone: `+${formattedPhone}` };

    mutation.mutate(formattedUser);
  };

  return (
    <PostRequestStyled id="post-request">
      <Container>
        <Title>
          {!mutation.data?.success ? 'Working with POST request' : null}
        </Title>
        {mutation.isLoading ? (
          <Preloader />
        ) : (
          <>
            {mutation.isError && (
              <ErrorWrapper>
                <ErrorMessage>An error occurred: {error.message}</ErrorMessage>
              </ErrorWrapper>
            )}

            {mutation.isSuccess && mutation.data.success && (
              <SuccessRegistration />
            )}

            {mutation.isSuccess && !mutation.data?.success && (
              <ErrorWrapper>
                <ErrorMessage>{mutation.data?.message}</ErrorMessage>
              </ErrorWrapper>
            )}

            {(!mutation.isSuccess || !mutation.data.success) && (
              <SignupForm handleSubmit={handleSubmit} />
            )}
          </>
        )}
      </Container>
    </PostRequestStyled>
  );
};
