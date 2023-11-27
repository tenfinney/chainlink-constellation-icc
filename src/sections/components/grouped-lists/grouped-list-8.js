import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
const members = [
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-08.png',
job: 'Developer',
name: 'User 010f',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-06.png',
job: 'Developer',
name: 'User 004d',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-07.png',
job: 'Developer',
name: 'User 009f',
}
];
export const GroupedList8 = () => (
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
sx={{ pb: 0 }}
title="Project members"
titleTypographyProps={{ variant: 'overline' }}
/>
<CardContent>
<List disablePadding>
{members.map((member) => (
<ListItem
disableGutters
key={member.id}
>
<ListItemAvatar>
<Avatar src={member.avatar} />
</ListItemAvatar>
<ListItemText
primary={(
<Typography variant="subtitle2">
{member.name}
</Typography>
)}
secondary={(
<Typography
color="text.secondary"
variant="body2"
>
{member.job}
</Typography>
)}
/>
</ListItem>
))}
</List>
</CardContent>
<Divider />
<CardActions sx={{ justifyContent: 'center' }}>
<Button
color="inherit"
size="small"
>
Manage members
</Button>
</CardActions>
</Card>
</Container>
</Box>
);
