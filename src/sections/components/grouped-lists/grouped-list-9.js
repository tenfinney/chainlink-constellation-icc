import { formatDistanceToNowStrict, subHours } from 'date-fns';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const now = new Date();
const reviews = [
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
avatar: '/assets/avatars/avatar-sl-08.png',
name: 'User 010g',
},
comment: 'Great opportunity. Look into it.',
createdAt: subHours(now, 2).getTime(),
value: 5
},
{
id: 'COURSE-101',
author: {
avatar: '/assets/avatars/avatar-sl-09.png',
name: 'User 012b',
},
comment: 'Great opportunity. Look into it.',
createdAt: subHours(now, 2).getTime(),
value: 2
},
{
id: '0x1234567890123456789012345678901234567890SS',
author: {
avatar: '/assets/avatars/avatar-sl-06.png',
name: 'User 004e',
},
comment: 'Great opportunity. Look into it.',
createdAt: subHours(now, 2).getTime(),
value: 4
}
];
export const GroupedList9 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Stack spacing={3}>
{reviews.map((review) => {
const ago = formatDistanceToNowStrict(review.createdAt);
return (
<Card key={review.id}>
<CardHeader
avatar={<Avatar src={review.author.avatar} />}
disableTypography
subheader={(
<Box
sx={{
alignItems: 'center',
display: 'flex',
flexWrap: 'wrap',
mt: 1
}}
>
<Box
sx={{
alignItems: 'center',
display: 'flex',
mr: 1
}}
>
<Rating
readOnly
value={5}
/>
<Typography
sx={{ ml: 1 }}
variant="subtitle2"
>
{review.value}
</Typography>
</Box>
<Typography
color="text.secondary"
variant="body2"
>
| For
{' '}
<Link
color="text.primary"
variant="subtitle2"
>
Low Budget
</Link>
{' '}
|
{' '}
{ago}
{' '}
ago
</Typography>
</Box>
)}
title={(
<Link
color="text.primary"
variant="subtitle2"
>
{review.author.name}
</Link>
)}
/>
<Box
sx={{
pb: 2,
px: 3
}}
>
<Typography
color="text.secondary"
variant="body1"
>
{review.comment}
</Typography>
</Box>
</Card>
);
})}
</Stack>
</Box>
);
