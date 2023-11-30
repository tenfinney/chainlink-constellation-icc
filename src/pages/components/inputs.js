import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as ComponentsLayout } from 'src/layouts/components';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { Previewer } from 'src/sections/components/previewer';
import { Inputs1 } from 'src/sections/components/inputs/inputs-1';
import { Inputs2 } from 'src/sections/components/inputs/inputs-2';
import { Inputs3 } from 'src/sections/components/inputs/inputs-3';
import { Inputs4 } from 'src/sections/components/inputs/inputs-4';
import { Inputs5 } from 'src/sections/components/inputs/inputs-5';

const components = [
  {
    element: <Inputs1 />,
    title: 'Inputs 1'
  },
  {
    element: <Inputs2 />,
    title: 'Inputs 2'
  },
  {
    element: <Inputs3 />,
    title: 'Inputs 3'
  },
  {
    element: <Inputs4 />,
    title: 'Inputs 4'
  },
  {
    element: <Inputs5 />,
    title: 'Inputs 5'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Components: Inputs" />
      <ComponentsLayout title="Inputs">
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
