import { formatDistanceToNowStrict, subDays, subHours, subMinutes } from 'date-fns';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Presence } from 'src/components/presence';
const now = new Date();
const contacts = [
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-10.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 001b',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-15.png',
isActive: false,
lastActivity: subHours(now, 2).getTime(),
name: 'User 010h',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-11.png',
isActive: false,
lastActivity: subMinutes(now, 15).getTime(),
name: 'User 004f',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-12.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 007c',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-14.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 009g',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-16.png',
isActive: false,
lastActivity: subDays(now, 2).getTime(),
name: 'User 012c',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-19.png',
isActive: false,
lastActivity: subHours(now, 6).getTime(),
name: 'User 015c',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-18.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 014c',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-20.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 016d',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-13.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 008a',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-17.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 013b',
}
];
export const Modal4 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Paper
elevation={12}
sx={{
maxWidth: 320,
mx: 'auto',
p: 2
}}
>
<Typography variant="h6">
Contacts
</Typography>
<Box sx={{ mt: 2 }}>
<List disablePadding>
{contacts.map((contact) => {
const showOnline = contact.isActive;
const lastActivity = !contact.isActive && contact.lastActivity
? formatDistanceToNowStrict(contact.lastActivity)
: undefined;
return (
<ListItem
disableGutters
key={contact.id}
>
<ListItemAvatar>
<Avatar src={contact.avatar} />
</ListItemAvatar>
<ListItemText
disableTypography
primary={(
<Link
color="text.primary"
noWrap
underline="none"
variant="subtitle2"
>
{contact.name}
</Link>
)}
/>
{showOnline && (
<Presence
size="small"
status="online"
/>
)}
{lastActivity && (
<Typography
color="text.secondary"
noWrap
variant="caption"
>
{lastActivity}
{' '}
ago
</Typography>
)}
</ListItem>
);
})}
</List>
</Box>
</Paper>
</Box>
);
