import * as yup from 'yup';

export const seriesValidationSchema = yup.object().shape({
  title: yup.string().required(),
  genre: yup.string().required(),
  release_date: yup.date().required(),
  rating: yup.number().integer().nullable(),
  seasons: yup.number().integer().nullable(),
  provider_id: yup.string().nullable().required(),
});
