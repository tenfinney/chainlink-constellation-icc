import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import { MuiOtpInput } from 'mui-one-time-password-input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { Layout as AuthLayout } from 'src/layouts/auth/classic-layout';
import { paths } from 'src/paths';

const initialValues = {
  code: ''
};

const validationSchema = Yup.object({
  code: Yup
    .string()
    .min(6)
    .max(6)
    .required('Code is required')
});

const Page = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => { }
  });

  return (
    <>
      <Seo title="Verify Code" />
      <div>
        <Box sx={{ mb: 4 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            href={paths.dashboard.index}
            sx={{
              alignItems: 'center',
              display: 'inline-flex'
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Card elevation={16}>
          <CardHeader
            sx={{ pb: 0 }}
            title="Verify code"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <FormControl error={!!(formik.touched.code && formik.errors.code)}>
                <FormLabel
                  sx={{
                    display: 'block',
                    mb: 2
                  }}
                >
                  Code
                </FormLabel>
                <MuiOtpInput
                  length={6}
                  onBlur={() => formik.handleBlur('code')}
                  onChange={(value) => formik.setFieldValue('code', value)}
                  onFocus={() => formik.setFieldTouched('code')}
                  sx={{
                    '& .MuiFilledInput-input': {
                      p: '14px'
                    }
                  }}
                  value={formik.values.code}
                />
                {!!(formik.touched.code && formik.errors.code) && (
                  <FormHelperText>
                    {formik.errors.code}
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Verify
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
