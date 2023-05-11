import * as Yup from 'yup';
import { FormValues } from '../types/FormValues';

const emailTemplate =
  /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
const phoneTemplate = /^[/+]{0,1}380([0-9]{9})$/;

export const SignupSchema: Yup.ObjectSchema<FormValues> = Yup.object().shape({
  name: Yup.string()
    .min(2, 'The name must be at least 2 characters.')
    .max(60, 'The name must be no longer than 60 characters.')
    .required('The name field is required.'),
  email: Yup.string()
    .min(2, 'The email must be at least 2 characters.')
    .max(100, 'The email must be no longer than 100 characters.')
    .matches(emailTemplate, 'The email must be a valid email address.')
    .required('The email field is required.'),
  phone: Yup.string()
    .matches(phoneTemplate, 'The phone number is not valid')
    .required('The phone field is required.'),
  position: Yup.string().required('Select a position.'),
});
