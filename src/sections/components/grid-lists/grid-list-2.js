import { formatDistanceToNowStrict, subHours, subMinutes } from 'date-fns';
import numeral from 'numeral';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
const now = new Date();
const projects = [
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-08.png',
name: 'User 009c',
},
budget: 1000.00,
caption: 'Experienced Developers wanted to come aboard and help us build SmartLaw LexAutomatico.',
currency: '$',
isLiked: true,
likes: 1,
location: 'United States',
image: '/assets/covers/abstract-2-4x4-small.png',
rating: 5,
membersCount: 2,
title: 'Meta Full Screen Slider',
type: 'Full-Time',
updatedAt: subMinutes(now, 24).getTime()
},
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-15.png',
name: 'User 014b',
},
budget: 1000.00,
caption: 'Experienced Developers wanted to come aboard and help us build SmartLaw LexAutomatico.',
currency: '$',
isLiked: true,
likes: 1,
location: 'United States',
image: '/assets/covers/business-1-4x4-small.png',
rating: 4.5,
membersCount: 3,
title: 'Overview Design',
type: 'Full-Time',
updatedAt: subHours(now, 1).getTime()
},
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-16.png',
name: 'User 016b',
},
budget: 1000.00,
caption: 'Experienced Developers wanted to come aboard and help us build SmartLaw LexAutomatico.',
currency: '$',
isLiked: true,
likes: 1,
location: 'United States',
image: '/assets/covers/minimal-2-4x4-small.png',
rating: 4.7,
membersCount: 8,
title: 'Web3 Legal Engineering',
type: 'Full-Time',
updatedAt: subHours(now, 16).getTime()
}
];
export const GridList2 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Grid
container
spacing={3}
>
{projects.map((project) => {
const updatedAgo = formatDistanceToNowStrict(project.updatedAt);
const budget = numeral(project.budget).format(`${project.currency}0,0.00`);
return (
<Grid
key={project.id}
xs={12}
md={4}
>
<Card>
<Box sx={{ p: 2 }}>
<CardMedia
image={project.image}
sx={{
backgroundColor: 'neutral.50',
height: 200
}}
/>
<Box
sx={{
alignItems: 'center',
display: 'flex',
mt: 2
}}
>
<Avatar src={project.author.avatar} />
<Box sx={{ ml: 2 }}>
<Link
color="text.primary"
variant="h6"
>
{project.title}
</Link>
<Typography
color="text.secondary"
variant="body2"
>
by
{' '}
<Link
color="text.primary"
variant="subtitle2"
>
{project.author.name}
</Link>
{' '}
| Updated
{' '}
{updatedAgo}
{' '}
ago
</Typography>
</Box>
</Box>
</Box>
<Box
sx={{
pb: 2,
px: 3
}}
>
<Typography
color="text.secondary"
variant="body2"
>
{project.caption}
</Typography>
</Box>
<Box
sx={{
px: 3,
py: 2
}}
>
<Stack
alignItems="center"
direction="row"
justifyContent="space-between"
spacing={3}
>
<div>
<Typography variant="subtitle2">
{budget}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Budget
</Typography>
</div>
<div>
<Typography variant="subtitle2">
{project.location}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Location
</Typography>
</div>
<div>
<Typography variant="subtitle2">
{project.type}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Type
</Typography>
</div>
</Stack>
</Box>
<Divider />
<Box
sx={{
alignItems: 'center',
display: 'flex',
pl: 2,
pr: 3,
py: 2
}}
>
<Box
sx={{
alignItems: 'center',
display: 'flex'
}}
>
<Tooltip title="Unlike">
<IconButton>
<SvgIcon
sx={{
color: 'error.main',
'& path': {
fill: (theme) => theme.palette.error.main,
fillOpacity: 1
}
}}
>
<HeartIcon />
</SvgIcon>
</IconButton>
</Tooltip>
<Typography
color="text.secondary"
variant="subtitle2"
>
{project.likes}
</Typography>
</Box>
<Box
sx={{
alignItems: 'center',
display: 'flex',
ml: 2
}}
>
<SvgIcon>
<Users01Icon />
</SvgIcon>
<Typography
color="text.secondary"
sx={{ ml: 1 }}
variant="subtitle2"
>
{project.membersCount}
</Typography>
</Box>
<Box sx={{ flexGrow: 1 }} />
<Rating
readOnly
size="small"
value={project.rating}
/>
</Box>
</Card>
</Grid>
);
})}
</Grid>
</Box>
);
