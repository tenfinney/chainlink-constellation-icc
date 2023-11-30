import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Seo } from 'src/components/seo';

export const Error = (props) => {
  const { statusCode, title } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const text = `${statusCode}: ${title}`;

  return (
    <>
      <Seo title={text} />
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          py: '80px'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6
            }}
          >
            <Typography
              align="center"
              variant={mdUp ? 'h1' : 'h4'}
            >
              {text}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};
