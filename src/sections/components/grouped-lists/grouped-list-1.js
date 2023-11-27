import { formatDistanceToNowStrict, subHours, subMinutes } from 'date-fns';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
const now = new Date();
const activities = [
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subMinutes(now, 23).getTime(),
customer: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-09.png',
name: 'User 010b',
},
description: 'Created account',
type: 'register'
},
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subMinutes(now, 56).getTime(),
customer: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-06.png',
name: 'User 004b',
},
description: 'Subscription Purchase',
type: 'payment'
},
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subHours(now, 2).getTime(),
customer: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-07.png',
name: 'User 007b',
},
description: 'Submitted a ticket',
type: 'ticket_create'
},
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subMinutes(now, 5).getTime(),
customer: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-08.png',
name: 'User 009d',
},
description: 'Subscription Purchase',
type: 'payment'
},
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subMinutes(now, 5).getTime(),
customer: {
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-05.png',
name: 'User 003c',
},
description: 'Subscription Purchase',
type: 'payment'
}
];
export const GroupedList1 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Container maxWidth="sm">
<Card>
<CardHeader
action={(
<IconButton>
<SvgIcon>
<DotsHorizontalIcon />
</SvgIcon>
</IconButton>
)}
title="Activity"
/>
<Divider />
<Box sx={{ display: 'flex' }}>
<Box
sx={{
p: 3,
flexGrow: 1,
'&:first-of-type': {
borderRight: (theme) => `1px solid ${theme.palette.divider}`
}
}}
>
<Typography
align="center"
variant="h5"
>
15245
</Typography>
<Typography
align="center"
color="text.secondary"
component="h4"
variant="overline"
>
Registered
</Typography>
</Box>
<Box
sx={{
p: 3,
flexGrow: 1,
'&:first-of-type': {
borderRight: (theme) => `1px solid ${theme.palette.divider}`
}
}}
>
<Typography
align="center"
variant="h5"
>
357
</Typography>
<Typography
align="center"
color="text.secondary"
component="h4"
variant="overline"
>
Online
</Typography>
</Box>
</Box>
<Divider />
<List disablePadding>
{activities.map((activity, index) => {
const showDivider = index < activities.length - 1;
const ago = formatDistanceToNowStrict(activity.createdAt);
return (
<ListItem
divider={showDivider}
key={activity.id}
>
<ListItemAvatar>
<Avatar
src={activity.customer.avatar}
sx={{ cursor: 'pointer' }}
/>
</ListItemAvatar>
<ListItemText
disableTypography
primary={(
<Link
color="text.primary"
sx={{ cursor: 'pointer' }}
underline="none"
variant="subtitle2"
>
{activity.customer.name}
</Link>
)}
secondary={(
<Typography
color="text.secondary"
variant="body2"
>
{activity.description}
</Typography>
)}
/>
<Typography
color="text.secondary"
noWrap
variant="caption"
>
{ago}
{' '}
ago
</Typography>
</ListItem>
);
})}
</List>
</Card>
</Container>
</Box>
);
