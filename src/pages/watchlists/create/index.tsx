import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { watchlistValidationSchema } from 'validationSchema/watchlists';
import { UserInterface } from 'interfaces/user';
import { MovieInterface } from 'interfaces/movie';
import { SeriesInterface } from 'interfaces/series';
import { WatchlistInterface } from 'interfaces/watchlist';

function WatchlistCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: WatchlistInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.watchlist.create({ data: values as RoqTypes.watchlist });
      resetForm();
      router.push('/watchlists');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<WatchlistInterface>({
    initialValues: {
      added_at: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
      movie_id: (router.query.movie_id as string) ?? null,
      series_id: (router.query.series_id as string) ?? null,
    },
    validationSchema: watchlistValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Watchlists',
              link: '/watchlists',
            },
            {
              label: 'Create Watchlist',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Watchlist
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="added_at" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Added At
            </FormLabel>
            <DatePicker
              selected={formik.values?.added_at ? new Date(formik.values?.added_at) : null}
              onChange={(value: Date) => formik.setFieldValue('added_at', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<MovieInterface>
            formik={formik}
            name={'movie_id'}
            label={'Select Movie'}
            placeholder={'Select Movie'}
            fetcher={() => roqClient.movie.findManyWithCount({})}
            labelField={'title'}
          />
          <AsyncSelect<SeriesInterface>
            formik={formik}
            name={'series_id'}
            label={'Select Series'}
            placeholder={'Select Series'}
            fetcher={() => roqClient.series.findManyWithCount({})}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/watchlists')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'watchlist',
    operation: AccessOperationEnum.CREATE,
  }),
)(WatchlistCreatePage);
