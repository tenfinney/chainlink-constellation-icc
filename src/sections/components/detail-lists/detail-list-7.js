import { addDays, format, subMinutes } from 'date-fns';
import numeral from 'numeral';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
export const DetailList7 = () => {
const deadline = format(addDays(new Date(), 14).getTime(), 'dd MMM yyyy');
const budget = numeral(12500.00).format('$0,0.00');
const lastUpdate = format(subMinutes(new Date(), 23).getTime(), 'dd MMM yyyy');
return (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<CardHeader
avatar={<Avatar src="/assets/avatars/avatar-omar-darboe.png" />}
disableTypography
subheader={(
<Link
color="text.primary"
underline="none"
variant="subtitle2"
>
Scott Stevenson J.D.
</Link>
)}
style={{ paddingBottom: 0 }}
title={(
<Typography
color="text.secondary"
sx={{ display: 'block' }}
variant="overline"
>
Contest holder
</Typography>
)}
/>
<CardContent sx={{ pt: 0 }}>
<List>
<ListItem
disableGutters
divider
sx={{
justifyContent: 'space-between',
padding: 2
}}
>
<Typography variant="subtitle2">
Deadline
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
{deadline}
</Typography>
</ListItem>
<ListItem
disableGutters
divider
sx={{
justifyContent: 'space-between',
padding: 2
}}
>
<Typography variant="subtitle2">
Budget
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
{budget}
</Typography>
</ListItem>
<ListItem
disableGutters
sx={{
justifyContent: 'space-between',
padding: 2
}}
>
<Typography variant="subtitle2">
Last Update
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
{lastUpdate}
</Typography>
</ListItem>
</List>
</CardContent>
</Card>
</Box>
);
};
