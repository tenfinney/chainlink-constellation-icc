import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import { Logo } from 'src/components/logo';
import { RouterLink } from 'src/components/router-link';
import { usePathname } from 'src/hooks/use-pathname';
import { paths } from 'src/paths';
import { SideNavItem } from './side-nav-item';
const items = [
{
title: 'SmartLaw Apps',
path: paths.components.index
},
{
title: 'General Dashboard',
children: [
{
subheader: 'Dashboard',
items: [
{
title: 'Web3 Dashboard Overview',
path: paths.dashboard.index
},
{
title: 'Enrolling in Web3Skills',
path: paths.dashboard.logistics.index
},
{
title: 'Program & Course Content',
path: paths.dashboard.fileManager
},
{
title: 'Law School Publication Manager',
path: paths.dashboard.lawSchPubManager
},
{
title: 'Legal Resources',
path: paths.dashboard.legalResources
},
{
title: 'Web3 Legal Engineering Certification',
path: paths.dashboard.academy.index
}
]
},
{
subheader: 'Other',
items: [
{
title: 'Web3 CLE Newsroom',
path: paths.dashboard.blog.index
},
{
title: 'Program & Course Pricing',
path: paths.pricing
},
{
title: 'Contact Web3 Legal Engineering',
path: paths.contact
},
{
title: 'CLE Course Checkout',
path: paths.checkout
},
]
}
]
},
{
title: 'Digital Artifacts',
path: paths.docs,
external: true
}
];
const renderItems = ({ depth = 0, items, pathname }) => items.reduce((acc,
item) => reduceChildRoutes({
acc,
depth,
item,
pathname
}), []);
const reduceChildRoutes = ({ acc, depth, item, pathname }) => {
const checkPath = !!(item.path && pathname);
const partialMatch = checkPath ? pathname.includes(item.path) : false;
const exactMatch = checkPath ? pathname === item.path : false;
if (item.children) {
acc.push(
<SideNavItem
active={partialMatch}
depth={depth}
disabled={item.disabled}
key={item.title}
open={partialMatch}
title={item.title}
>
<Stack spacing={2}>
{item.children.map((child, index) => (
<Stack
component="ul"
key={index}
spacing={0.5}
sx={{
listStyle: 'none',
m: 0,
p: 0
}}
>
{child.subheader && (
<Box
component="li"
sx={{
color: 'text.secondary',
fontSize: 12,
fontWeight: 500,
lineHeight: 1.66,
mb: 1,
pl: '24px',
textTransform: 'uppercase'
}}
>
{child.subheader}
</Box>
)}
{child.items.map((item) => {
const checkPath = !!(item.path && pathname);
const active = checkPath ? pathname === item.path : false;
const linkProps = item.path
? item.external
? {
component: 'a',
href: item.path,
target: '_blank'
}
: {
component: RouterLink,
href: item.path
}
: {};



return (
<li key={item.title}>
<ButtonBase
sx={{
alignItems: 'center',
borderRadius: 1,
display: 'flex',
justifyContent: 'flex-start',
pl: '24px',
pr: '16px',
py: '8px',
textAlign: 'left',
'&:hover': {
backgroundColor: 'action.hover'
},
...(active && {
color: 'primary.main'
})
}}
{...linkProps}>
<Box
component="span"
sx={{
height: 6,
mr: 2,
width: 6
}}
>
<Box
sx={{
backgroundColor: 'neutral.400',
borderRadius: '50%',
height: 4,
opacity: 0,
width: 4,
...(active && {
backgroundColor: 'primary.main',
height: 6,
opacity: 1,
width: 6
})
}}
/>
</Box>
<Box
component="span"
sx={{
flexGrow: 1,
fontFamily: (theme) => theme.typography.fontFamily,
fontSize: 13,
fontWeight: 500,
lineHeight: '24px',
whiteSpace: 'nowrap'
}}
>
{item.title}
</Box>
</ButtonBase>
</li>
);
})}
</Stack>
))}
</Stack>
</SideNavItem>
);
} else {
acc.push(
<SideNavItem
active={exactMatch}
depth={depth}
disabled={item.disabled}
external={item.external}
key={item.title}
path={item.path}
title={item.title}
/>
);
}
return acc;
};
export const SideNav = (props) => {
const { onClose, open = false } = props;
const pathname = usePathname();
return (
<Drawer
anchor="right"
onClose={onClose}
open={open}
PaperProps={{
sx: {
maxWidth: '100%',
width: 300
}
}}
variant="temporary"
>
<Box
sx={{
pt: 2,
px: 2
}}
>
<Stack
alignItems="center"
component={RouterLink}
direction="row"
display="inline-flex"
href={paths.index}
spacing={1}
sx={{ textDecoration: 'none' }}
>
<Box
sx={{
display: 'inline-flex',
height: 24,
width: 24
}}
>
<Logo />
</Box>
<Box
sx={{
color: 'text.primary',
fontFamily: '\'Plus Jakarta Sans\', sans-serif',
fontSize: 14,
fontWeight: 800,
letterSpacing: '0.3px',
lineHeight: 2.5,
'& span': {
color: 'primary.main'
}
}}
>
LexAutomatico &nbsp;<span>2023</span>
</Box>
</Stack>
</Box>


<Box
component="nav"
sx={{ p: 2 }}
>
<Stack
component="ul"
spacing={1}
sx={{
listStyle: 'none',
m: 0,
p: 0
}}
>
{renderItems({ items, pathname })}
</Stack>
</Box>
</Drawer>
);
};
SideNav.propTypes = {
onClose: PropTypes.func,
open: PropTypes.bool
};
