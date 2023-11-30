import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as ComponentsLayout } from 'src/layouts/components';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { Previewer } from 'src/sections/components/previewer';
import { Chart1 } from 'src/sections/components/charts/chart-1';
import { Chart2 } from 'src/sections/components/charts/chart-2';
import { Chart3 } from 'src/sections/components/charts/chart-3';
import { Chart4 } from 'src/sections/components/charts/chart-4';
import { Chart5 } from 'src/sections/components/charts/chart-5';
import { Chart6 } from 'src/sections/components/charts/chart-6';
import { Chart7 } from 'src/sections/components/charts/chart-7';
import { Chart8 } from 'src/sections/components/charts/chart-8';
import { Chart9 } from 'src/sections/components/charts/chart-9';
import { Chart10 } from 'src/sections/components/charts/chart-10';
import { Chart11 } from 'src/sections/components/charts/chart-11';
import { Chart12 } from 'src/sections/components/charts/chart-12';
import { Chart13 } from 'src/sections/components/charts/chart-13';

const components = [
  {
    element: <Chart1 />,
    title: 'Chart 1'
  },
  {
    element: <Chart2 />,
    title: 'Chart 2'
  },
  {
    element: <Chart3 />,
    title: 'Chart 3'
  },
  {
    element: <Chart4 />,
    title: 'Chart 4'
  },
  {
    element: <Chart5 />,
    title: 'Chart 5'
  },
  {
    element: <Chart6 />,
    title: 'Chart 6'
  },
  {
    element: <Chart7 />,
    title: 'Chart 7'
  },
  {
    element: <Chart8 />,
    title: 'Chart 8'
  },
  {
    element: <Chart9 />,
    title: 'Chart 9'
  },
  {
    element: <Chart10 />,
    title: 'Chart 10'
  },
  {
    element: <Chart11 />,
    title: 'Chart 11'
  },
  {
    element: <Chart12 />,
    title: 'Chart 12'
  },
  {
    element: <Chart13 />,
    title: 'Chart 13'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Components: Charts" />
      <ComponentsLayout title="Charts">
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
