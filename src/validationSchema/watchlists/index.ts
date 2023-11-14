import * as yup from 'yup';

export const watchlistValidationSchema = yup.object().shape({
  added_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  movie_id: yup.string().nullable().required(),
  series_id: yup.string().nullable().required(),
});
