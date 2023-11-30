import ArrowDownIcon from '@untitled-ui/icons-react/build/esm/ArrowDown';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { paths } from 'src/paths';
const getSections = (paletteMode) => ([
    {
        title: 'MCLE Registration & Activity Checkpoints',
        items: [
        {
        title: 'MCLE Registration & Checkpoints',
        subtitle: 'Use these forms to interact with the MCLE activity and recieve your digital certificate of attendance and participation.',
        image: `/assets/components/forms-${paletteMode}.png`,
        path: paths.components.forms
        }
        ]
        },
{
title: 'Ongoing Projects',
items: [
{
title: 'Open Web3 Legal-tech Grants',
subtitle: 'Summaries of Web3 Legaltech Grants',
image: `/assets/components/detail-list-${paletteMode}.png`,
path: paths.components.dataDisplay.detailLists
},
{
title: 'Courses Users & API Endpoints',
subtitle: 'Web3Skills Training Courses and Activities',
image: `/assets/components/tables-${paletteMode}.png`,
path: paths.components.dataDisplay.tables
},
{
title: 'SmartLaw Tokens Dashboard',
subtitle: 'Digital Artifact Minting and Management',
image: `/assets/components/quick-stats-${paletteMode}.png`,
path: paths.components.dataDisplay.quickStats
}
]
},
{
title: 'Application Adminstration Tools',
items: [
{
title: 'Metrics and Performance Reporting',
subtitle: 'Explore charting tools for presentation efficiency.',
image: `/assets/components/grouped-lists-${paletteMode}.png`,
path: paths.components.lists.groupedLists
},
{
title: 'Web3Skills & SmartLaw Courses',
subtitle: 'Legaltech using Web3Skill and SmartLaw Artifacts',
image: `/assets/components/grid-lists-${paletteMode}.png`,
path: paths.components.lists.gridLists
}
]
},

{
title: 'SmartLaw Web3 Training Apps',
items: [
{
title: 'Upload and get CID hash',
subtitle: 'A basic hashing algorithm.',
image: `/assets/components/002-12-${paletteMode}.png`,
path: 'https://upload.freeweb3.com'
},
{
title: 'Encrypting Content',
subtitle: 'Use a public resource for basic encryption.',
image: `/assets/components/002-13a-${paletteMode}.png`,
path: 'https://encrypt.freeweb3.com'
},
{
title: 'Decoding Content',
subtitle: 'Use a public resource for basic decoding of content.',
image: `/assets/components/002-13a-${paletteMode}.png`,
path: 'https://decode.freeweb3.com'
},
{
title: 'Generate a Web3 key-pair',
subtitle: 'a combination of a public and private key that is used to decrypt data',
image: `/assets/components/002-13-${paletteMode}.png`,
path: 'https://users.freeweb3.com'
},
{
title: 'Connect to Web3 blockchain',
subtitle: 'A basic interface to a public blockchain',
image: `/assets/components/005-01-${paletteMode}.png`,
path: 'https://connect.freeweb3.com'
},
{
title: 'Record CID on Chain for a Nominal Transaction Fee',
subtitle: 'Pass information to a blockchain for a small fee.',
image: `/assets/components/005-03-${paletteMode}.png`,
path: 'https://cidtochain.freeweb3.com'
},
{
title: 'Automatically Record a CID to Chain for Free',
subtitle: 'A simple tool that automates the content-hash to a public blockchan.',
image: `/assets/components/002-04-${paletteMode}.png`,
path: 'https://cidtochainfree.freeweb3.com'
},
{
title: 'Explore a Web3 Account',
subtitle: 'Connect to a website that queries blockchain transactions',
image: `/assets/components/005-07-${paletteMode}.png`,
path: 'https://explore.freeweb3.com'
},
{
title: 'Lookup an on-chain Digital Artifact',
subtitle: 'Explore digital assets, tokens, and access keys.',
image: `/assets/components/002-10-${paletteMode}.png`,
path: 'https://nftlookup.freeweb3.com'
},
{
title: 'Unlock Web3-Gated Digital Content',
subtitle: 'Use digital artifacts to protect and deliver content, access, or value.',
image: `/assets/components/2024-all-sites-036A-800w-${paletteMode}.png`,
path: 'https://nftgated.freeweb3.com'
}
]
},



{
title: 'LexAutomatico - LSSAC Web3 Legal Engineering Publication',
items: [
{
title: 'Legal-tech publication lexnewsplus ',
subtitle: 'lexnewsplus',
image: '/assets/backlinks/backlinks-2024-001.png',
path: 'https://lexnewsplus.com',
},
{
title: 'Legal-tech publication lexcomms ',
subtitle: 'lexcomms freeweb3',
image: '/assets/backlinks/backlinks-2024-002.png',
path: 'https://lexcomms.freeweb3.com',
},
{
title: 'Legal-tech publication web3lexa Adventures',
subtitle: 'web3lexa adventures',
image: '/assets/backlinks/backlinks-2024-003.png',
path: 'https://web3lexa.com/adventures',
},
{
title: 'Legal-tech publication web3lexa Explorations',
subtitle: 'web3lexa explorations ',
image: '/assets/backlinks/backlinks-2024-004.png',
path: 'https://web3lexa.com/explorations ',
},
{
title: 'Legal-tech publication web3lexa Discoveries',
subtitle: 'web3lexa discoveries',
image: '/assets/backlinks/backlinks-2024-005.png',
path: 'https://web3lexa.com/discoveries',
},
{
title: 'Legal-tech publication web3lexa Chronicles',
subtitle: 'web3lexa chronicles',
image: '/assets/backlinks/backlinks-2024-006.png',
path: 'https://web3lexa.com/chronicles',
},
{
title: 'Legal-tech publication web3lexa Insights',
subtitle: 'web3lexa insights',
image: '/assets/backlinks/backlinks-2024-007.png',
path: 'https://web3lexa.com/insights',
},
{
title: 'Legal-tech publication web3lexa Perspectives',
subtitle: 'web3lexa perspectives',
image: '/assets/backlinks/backlinks-2024-008.png',
path: 'https://web3lexa.com/perspectives',
},
{
title: 'Legal-tech publication web3lexa Spotlight',
subtitle: 'web3lexa spotlight ',
image: '/assets/backlinks/backlinks-2024-009.png',
path: 'https://web3lexa.com/spotlight ',
},
{
title: 'Legal-tech publication web3lexa Tidbits',
subtitle: 'web3lexa tidbits',
image: '/assets/backlinks/backlinks-2024-010.png',
path: 'https://web3lexa.com/tidbits',
},
{
title: 'Learning Management System web3lexa edu',
subtitle: 'web3lexa edu',
image: '/assets/backlinks/backlinks-2024-011.png',
path: 'https://web3lexa.com/edu',
},
{
title: 'Legal-tech publication webelexa ',
subtitle: 'webelexa ',
image: '/assets/backlinks/backlinks-2024-012.png',
path: 'https://webelexa.com/',
},
]
},





// {
// title: 'REMOVE-REF-Overlays',
// items: [
// {
// title: 'REMOVE-REF-Modals',
// subtitle: 'Application description goes here',
// image: `/assets/components/modals-${paletteMode}.png`,
// path: paths.components.modals
// }
// ]
// },
// {
// title: 'REMOVE-REF-Charts',
// items: [
// {
// title: 'REMOVE-REFCharts',
// subtitle: 'Application description goes here',
// image: `/assets/components/charts-${paletteMode}.png`,
// path: paths.components.charts
// }
// ]
// },
// {
// title: 'REMOVE-REF-Components',
// items: [
// {
// title: 'REMOVE-REF-Buttons',
// subtitle: 'Application description goes here',
// image: `/assets/components/buttons-${paletteMode}.png`,
// path: paths.components.buttons
// },
// {
// title: 'REMOVE-REF-Typography',
// subtitle: 'Application description goes here',
// image: `/assets/components/typography-${paletteMode}.png`,
// path: paths.components.typography
// },
// {
// title: 'REMOVE-REF-Colors',
// subtitle: 'Application description goes here',
// image: `/assets/components/colors-${paletteMode}.png`,
// path: paths.components.colors
// },
// {
// title: 'REMOVE-REF-Inputs',
// subtitle: 'Application description goes here',
// image: `/assets/components/inputs-${paletteMode}.png`,
// path: paths.components.inputs
// }
// ]
// }
]);




const Page = () => {
const theme = useTheme();
const sections = getSections(theme.palette.mode);
usePageView();
return (
<>
<Seo title="Components" />
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.50',
py: '120px'
}}
>
<Container maxWidth="lg">
<Stack spacing={1}>
<Typography variant="h1">
SmartLaw Applications
</Typography>
<Typography
color="text.secondary"
variant="body1"
>
Browse through the SmartLaw applications
</Typography>
</Stack>
</Container>
</Box>
<Box
component="main"
sx={{
flexGrow: 1,
py: 8
}}
>
<Container maxWidth="lg">
<Stack
divider={<Divider />}
spacing={4}
>
{sections.map((section) => (
<Grid
key={section.title}
container
spacing={4}
>
<Grid
xs={12}
lg={3}
>
<Typography
sx={{ fontWeight: 600 }}
variant="h5"
>
{section.title}
</Typography>
</Grid>
<Grid
xs={12}
lg={9}
>
<Grid
container
spacing={4}
>
{section.items.map((item) => (
<Grid
key={item.title}
xs={12}
sm={6}
md={4}
>
<Card
component={RouterLink}
href={item.path}
rel="noreferrer"  
target="_blank"
sx={{
display: 'block',
textDecoration: 'none',
gridColumn: {
xs: 'span 3',
sm: 'span 1'
}
}}
variant="outlined"
{...item.newTab && {
component: 'a',
target: '_blank'
}}>
<Box sx={{ p: 2 }}>
<Box
sx={{
position: 'relative',
pt: 'calc(300 / 500 * 100%)',
'& img': {
height: 'auto',
position: 'absolute',
top: 0,
width: '100%'
}
}}
>
<img src={item.image} />
</Box>
<Box
sx={{
alignItems: 'flex-end',
display: 'flex',
mt: 2
}}
>
<Typography variant="subtitle2">
{item.title}
</Typography>
{item.newTab && (
<SvgIcon
color="action"
sx={{ ml: 1.5 }}
>
<ArrowDownIcon />
</SvgIcon>
)}
</Box>
<Typography
color="text.secondary"
variant="body2"
>
{item.subtitle}
</Typography>
</Box>
</Card>
</Grid>
))}
</Grid>
</Grid>
</Grid>
))}
</Stack>
</Container>
</Box>
</>
);
};
Page.getLayout = (page) => (
<MarketingLayout>
{page}
</MarketingLayout>
);
export default Page;
