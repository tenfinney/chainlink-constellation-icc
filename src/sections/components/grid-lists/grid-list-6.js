import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
const contacts = [
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-06.png',
commonContacts: 10,
name: 'User 004k',
status: 'Rejected'
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-07.png',
commonContacts: 8,
name: 'User 007f',
status: 'Pending'
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-10.png',
commonContacts: 5,
name: 'User 012e',
status: 'Not Connected'
}
];
export const GridList6 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Stack spacing={3}>
{contacts.map((contact) => (
<Card key={contact.id}>
<Stack
alignItems="center"
direction="row"
sx={{ p: 2 }}
spacing={2}
>
<Avatar
src={contact.avatar}
sx={{
height: 60,
width: 60
}}
/>
<Box sx={{ flexGrow: 1 }}>
<Link
color="text.primary"
variant="h5"
>
{contact.name}
</Link>
<Typography
color="text.secondary"
gutterBottom
variant="body2"
>
{contact.commonContacts}
{' '}
connections in common
</Typography>
<Button
size="small"
variant="outlined"
>
{contact.status}
</Button>
</Box>
<IconButton>
<SvgIcon>
<DotsHorizontalIcon />
</SvgIcon>
</IconButton>
</Stack>
</Card>
))}
</Stack>
</Box>
);
