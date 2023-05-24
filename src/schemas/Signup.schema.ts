import * as Yup from 'yup';
import { FormValues } from '../types/FormValues';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const emailTemplate =
  /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
const phoneTemplate = /^[/+]{0,1}380([0-9]{9})$/;
const validFileExtensions: { image: string[] } = {
  image: ['jpg', 'jpeg'],
};

function isValidFileType(fileName: string, fileType: string): boolean {
  if (!fileName) {
    return false;
  }

  const fileExtension = fileName.split('.').pop();
  if (!fileExtension) {
    return false;
  }

  return (
    validFileExtensions[fileType as keyof typeof validFileExtensions].indexOf(
      fileExtension
    ) > -1
  );
}

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
  position_id: Yup.number().required('Select a position.'),
  photo: Yup.mixed<File>()
    .required('The photo field is required.')
    .test(
      'fileType',
      `Image is invalid. Only '.jpeg' or '.jpg' files are allowed.`,
      (value) => isValidFileType(value && value.name.toLowerCase(), 'image')
    )
    .test(
      'fileSize',
      'The photo may not be greater than 5 Mbytes.',
      (value) => value && value.size <= MAX_FILE_SIZE
    )
    .test('imageSize', 'Minimum size of photo 70x70px.', (value) => {
      if (!value) {
        return false;
      }

      return new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = function () {
          const { naturalWidth, naturalHeight } = this as HTMLImageElement;
          resolve(naturalWidth >= 70 && naturalHeight >= 70);
        };
        img.src = URL.createObjectURL(value);
      });
    }),
});
