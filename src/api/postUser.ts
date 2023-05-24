import { FormValues } from '../types/FormValues';
import { NewUserAPIResponse } from '../types/User';

export const postUser = async (
  newUser: FormValues,
  token: string
): Promise<NewUserAPIResponse> => {
  const formData = new FormData();
  formData.append('name', newUser.name);
  formData.append('email', newUser.email);
  formData.append('phone', newUser.phone);
  formData.append('position_id', String(newUser.position_id));
  formData.append('photo', newUser.photo);

  try {
    const apiRes = await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        headers: {
          Token: token,
        },
        body: formData,
      }
    );

    return apiRes.json() as Promise<NewUserAPIResponse>;
  } catch (error: any) {
    throw new Error((error as Error).message);
  }
};
