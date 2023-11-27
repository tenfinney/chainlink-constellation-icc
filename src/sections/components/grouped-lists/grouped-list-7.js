import { formatDistanceStrict, subHours, subMinutes } from 'date-fns';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { customLocale } from 'src/utils/date-locale';
const now = new Date();
const messages = [
{
id: '0x1234567890123456789012345678901234567890SS',
content: 'Web3 Content text goes here.',
createdAt: subMinutes(now, 2).getTime(),
senderAvatar: '/assets/avatars/avatar-sl-05.png',
senderName: 'App User 01_7',
senderOnline: true
},
{
id: '0x1234567890123456789012345678901234567890SS',
content: 'Web3 Content text goes here.',
createdAt: subMinutes(now, 56).getTime(),
senderAvatar: '/assets/avatars/avatar-sl-09.png',
senderName: 'App User 05_7',
senderOnline: true
},
{
id: '0x1234567890123456789012345678901234567890SS',
content: 'Web3 Content text goes here.',
createdAt: subHours(subMinutes(now, 23), 3).getTime(),
senderAvatar: '/assets/avatars/avatar-sl-06.png',
senderName: 'App User 02_7',
senderOnline: false
},
{
id: '0x1234567890123456789012345678901234567890SS',
content: 'Web3 Content text goes here.',
createdAt: subHours(subMinutes(now, 6), 8).getTime(),
senderAvatar: '/assets/avatars/avatar-sl-07.png',
senderName: 'App User 03_7',
senderOnline: true
},
{
id: '0x1234567890123456789012345678901234567890SS',
content: 'Web3 Content text goes here.',
createdAt: subHours(subMinutes(now, 18), 10).getTime(),
senderAvatar: '/assets/avatars/avatar-sl-08.png',
senderName: 'App User 04_7',
senderOnline: false
}
];
export const GroupedList7 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
display: 'flex',
justifyContent: 'center',
p: 3
}}
>
<Card sx={{ maxWidth: 363 }}>
<CardHeader title="Inbox" />
<List disablePadding>
{messages.map((message) => {
const ago = formatDistanceStrict(message.createdAt, new Date(), {
addSuffix: true,
locale: customLocale
});
return (
<ListItem
key={message.id}
sx={{
'&:hover': {
backgroundColor: 'action.hover',
cursor: 'pointer'
}
}}
>
<ListItemAvatar>
{message.senderOnline
? (
<Badge
anchorOrigin={{
horizontal: 'right',
vertical: 'bottom'
}}
color="success"
variant="dot"
>
<Avatar src={message.senderAvatar} />
</Badge>
)
: (
<Avatar src={message.senderAvatar} />
)}
</ListItemAvatar>
<ListItemText
disableTypography
primary={(
<Typography
sx={{
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}}
variant="subtitle2"
>
{message.senderName}
</Typography>
)}
secondary={(
<Typography
color="text.secondary"
sx={{
overflow: 'hidden',
textOverflow: 'ellipsis',
whiteSpace: 'nowrap'
}}
variant="body2"
>
{message.content}
</Typography>
)}
sx={{ pr: 2 }}
/>
<Typography
color="text.secondary"
sx={{ whiteSpace: 'nowrap' }}
variant="caption"
>
{ago}
</Typography>
</ListItem>
);
})}
</List>
<CardActions>
<Button
color="inherit"
size="small"
>
Go to chat
</Button>
</CardActions>
</Card>
</Box>
);
