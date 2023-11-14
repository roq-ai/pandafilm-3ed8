import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  first_name: yup.string().nullable(),
  last_name: yup.string().nullable(),
  birth_date: yup.date().nullable(),
  gender: yup.string().nullable(),
  location: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
