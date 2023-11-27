import numeral from 'numeral';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
const referrals = [
{
color: '#455A64',
initials: 'SS',
name: 'GitHub',
value: 53032
},
{
color: '#00BCD4',
initials: 'SS',
name: 'Social _App1',
value: 39551
},
{
color: '#3949AB',
initials: 'SS',
name: 'Hacker News',
value: 23150
},
{
color: '#F44336',
initials: 'SS',
name: 'Stack Overflow',
value: 14093
},
{
color: '#E65100',
initials: 'SS',
name: 'Reddit.com',
value: 7251
},
{
color: '#263238',
initials: 'SS',
name: 'Web3 Legal Engineering',
value: 5694
},
{
color: '#0D47A1',
initials: 'SS',
name: 'Social _App2',
value: 3643
},
{
color: '#263238',
initials: 'SS',
name: 'Medium',
value: 1654
}
];
export const GroupedList2 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Container maxWidth="sm">
<Card
sx={{
display: 'flex',
flexDirection: 'column'
}}
>
<CardHeader
action={(
<IconButton>
<SvgIcon>
<DotsHorizontalIcon />
</SvgIcon>
</IconButton>
)}
title="Top Referrals"
/>
<Divider />
<List disablePadding>
{referrals.map((referral, index) => {
const showDivider = index < referrals.length - 1;
const value = numeral(referral.value).format('0,0');
return (
<ListItem
divider={showDivider}
key={referral.name}
>
<ListItemAvatar>
<Avatar
sx={{
backgroundColor: referral.color,
color: 'common.white',
fontSize: 14,
fontWeight: 600
}}
>
{referral.initials}
</Avatar>
</ListItemAvatar>
<ListItemText
primary={referral.name}
primaryTypographyProps={{ variant: 'subtitle2' }}
/>
<Typography
color="text.secondary"
variant="body2"
>
{value}
</Typography>
</ListItem>
);
})}
</List>
</Card>
</Container>
</Box>
);
