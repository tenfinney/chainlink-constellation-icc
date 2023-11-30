import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as ComponentsLayout } from 'src/layouts/components';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { Previewer } from 'src/sections/components/previewer';
import { Colors1 } from 'src/sections/components/colors/colors-1';
import { Colors2 } from 'src/sections/components/colors/colors-2';

const components = [
  {
    element: <Colors1 />,
    title: 'Main colors'
  },
  {
    element: <Colors2 />,
    title: 'Severity colors'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Components: Colors" />
      <ComponentsLayout title="Colors">
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
