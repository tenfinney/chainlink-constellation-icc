import { format, subHours, subMinutes, subSeconds } from 'date-fns';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
const now = new Date();
const posts = [
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
avatar: '/assets/avatars/avatar-sl-08.png',
name: 'User 009b',
},
category: 'Programming',
cover: '/assets/covers/business-2-4x4-large.png',
publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
readTime: '5 min',
shortDescription: 'Short description goes here. It should be several lines of text.',
title: 'Web3 Legal Engineering',
},
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
avatar: '/assets/avatars/avatar-sl-15.png',
name: 'User 014a',
},
category: 'Productivity',
cover: '/assets/covers/minimal-1-4x4-small.png',
publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
readTime: '6 min',
shortDescription: 'Short description goes here. It should be several lines of text.',
title: 'Web3 Interest Title'
},
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
avatar: '/assets/avatars/avatar-sl-16.png',
name: 'User 016a',
},
category: 'Productivity',
cover: '/assets/covers/business-2-4x4-small.png',
publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
readTime: '3 min',
shortDescription: 'Short description goes here. It should be several lines of text.',
title: 'How Web3 Applications Work'
}
];
export const GridList1 = () => (
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
{posts.map((post) => (
<Grid
key={post.id}
xs={12}
md={4}
>
<Card
sx={{
height: '100%',
p: 2
}}
>
<Box
sx={{
pt: 'calc(100% * 4 / 4)',
position: 'relative'
}}
>
<CardMedia
image={post.cover}
sx={{
height: '100%',
position: 'absolute',
top: 0,
width: '100%'
}}
/>
</Box>
<Box sx={{ mt: 2 }}>
<div>
<Chip
label={post.category}
variant="outlined"
/>
</div>
<Box
sx={{
display: 'flex',
alignItems: 'center',
my: 2
}}
>
<Avatar src={post.author.avatar} />
<Box sx={{ ml: 2 }}>
<Typography variant="subtitle2">
{post.author.name}
</Typography>
<Typography
color="text.secondary"
variant="caption"
>
{`${format(post.publishedAt, 'dd MMM')} · ${post.readTime} read`}
</Typography>
</Box>
</Box>
<Link
color="text.primary"
variant="h6"
>
{post.title}
</Link>
<Typography
color="text.secondary"
sx={{
height: 72,
mt: 1,
overflow: 'hidden',
textOverflow: 'ellipsis',
WebkitBoxOrient: 'vertical',
WebkitLineClamp: 2
}}
variant="body1"
>
{post.shortDescription}
</Typography>
</Box>
</Card>
</Grid>
))}
</Grid>
</Box>
);
