import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as ComponentsLayout } from 'src/layouts/components';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { Previewer } from 'src/sections/components/previewer';
import { Modal1 } from 'src/sections/components/modals/modal-1';
import { Modal2 } from 'src/sections/components/modals/modal-2';
import { Modal3 } from 'src/sections/components/modals/modal-3';
import { Modal4 } from 'src/sections/components/modals/modal-4';
import { Modal5 } from 'src/sections/components/modals/modal-5';
import { Modal6 } from 'src/sections/components/modals/modal-6';
import { Modal7 } from 'src/sections/components/modals/modal-7';
import { Modal8 } from 'src/sections/components/modals/modal-8';
import { Modal9 } from 'src/sections/components/modals/modal-9';
import { Modal10 } from 'src/sections/components/modals/modal-10';

const components = [
  {
    element: <Modal1 />,
    title: 'Modal 1'
  },
  {
    element: <Modal2 />,
    title: 'Modal 2'
  },
  {
    element: <Modal3 />,
    title: 'Modal 3'
  },
  {
    element: <Modal4 />,
    title: 'Modal 4'
  },
  {
    element: <Modal5 />,
    title: 'Modal 5'
  },
  {
    element: <Modal6 />,
    title: 'Modal 6'
  },
  {
    element: <Modal7 />,
    title: 'Modal 7'
  },
  {
    element: <Modal8 />,
    title: 'Modal 8'
  },
  {
    element: <Modal9 />,
    title: 'Modal 9'
  },
  {
    element: <Modal10 />,
    title: 'Modal 10'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Components: Modals" />
      <ComponentsLayout title="Modals">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={8}>
              {components.map((component) => (
                <Previewer
                  key={component.title}
                  title={component.title}
                >
                  {component.element}
                </Previewer>
              ))}
            </Stack>
          </Container>
        </Box>
      </ComponentsLayout>
    </>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    {page}
  </MarketingLayout>
);

export default Page;
