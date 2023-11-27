import { format, subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import numeral from 'numeral';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
const now = new Date();
const orders = [
{
id: '5eff2548979e396cb4b000ba',
createdAt: subMinutes(subSeconds(now, 10), 7).getTime(),
customer: {
email: 'scott@onelaw.us',
name: 'User 006a',
},
currency: '$',
items: 7,
number: 'CLEC-110',
status: 'pending',
totalAmount: 524.00
},
{
id: '5eff254e46b753a166e7d7af',
createdAt: subHours(subMinutes(subSeconds(now, 50), 12), 2).getTime(),
customer: {
email: 'scott@onelaw.us',
name: 'User 004g',
},
currency: '$',
items: 8,
number: 'CLEC-109',
status: 'complete',
totalAmount: 693.00
},
{
id: '5eff2553e1c551e2e28a9205',
createdAt: subHours(subMinutes(subSeconds(now, 12), 39), 5).getTime(),
customer: {
email: 'scott@onelaw.us',
name: 'User 007d',
},
currency: '$',
items: 4,
number: 'CLEC-108',
status: 'rejected',
totalAmount: 215.00
},
{
id: '5eff25590f3e28f013c39a0e',
createdAt: subHours(subMinutes(subSeconds(now, 21), 46), 5).getTime(),
customer: {
email: 'scott@onelaw.us',
name: 'User 009h',
},
currency: '$',
items: 1,
number: 'CLEC-107',
status: 'pending',
totalAmount: 25.00
},
{
id: '5eff255f57499089243805d8',
createdAt: subHours(subMinutes(subSeconds(now, 54), 19), 8).getTime(),
customer: {
name: 'User 005b',
email: 'scott@onelaw.us',
},
currency: '$',
items: 5,
number: 'CLEC-106',
status: 'complete',
totalAmount: 535.00
},
{
id: '5eff25658d416fc5adb96a3a',
createdAt: subDays(subMinutes(subSeconds(now, 12), 45), 1).getTime(),
customer: {
email: 'scott@onelaw.us',
name: 'User 013c',
},
currency: '$',
items: 2,
number: 'CLEC-105',
status: 'complete',
totalAmount: 56.00
}
];
const labelColors = {
complete: 'success',
pending: 'warning',
rejected: 'error'
};
export const Table1 = () => (
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
action={(
<IconButton>
<SvgIcon>
<DotsHorizontalIcon />
</SvgIcon>
</IconButton>
)}
title="Latest Orders"
/>
<Divider />
<Scrollbar>
<Table sx={{ minWidth: 700 }}>
<TableHead>
<TableRow>
<TableCell sortDirection="desc">
<Tooltip
enterDelay={300}
title="Sort"
>
<TableSortLabel
active
direction="desc"
>
Number
</TableSortLabel>
</Tooltip>
</TableCell>
<TableCell>
Customer
</TableCell>
<TableCell>
Items
</TableCell>
<TableCell>
Total
</TableCell>
<TableCell>
Status
</TableCell>
<TableCell align="right">
Date
</TableCell>
</TableRow>
</TableHead>
<TableBody>
{orders.map((order) => {
const totalAmount = numeral(order.totalAmount).format(`${order.currency}0,0.00`);
const statusColor = labelColors[order.status];
const createdAt = format(order.createdAt, 'dd MMM, yyyy HH:mm:ss');
return (
<TableRow
hover
key={order.id}
>
<TableCell>
<Typography variant="subtitle2">
{order.number}
</Typography>
</TableCell>
<TableCell>
{order.customer.name}
</TableCell>
<TableCell>
{order.items}
</TableCell>
<TableCell>
{totalAmount}
</TableCell>
<TableCell>
<SeverityPill color={statusColor}>
{order.status}
</SeverityPill>
</TableCell>
<TableCell align="right">
{createdAt}
</TableCell>
</TableRow>
);
})}
</TableBody>
</Table>
</Scrollbar>
<Box
sx={{
display: 'flex',
justifyContent: 'flex-end',
p: 2
}}
>
<Button
color="inherit"
endIcon={(
<SvgIcon>
<ChevronRightIcon />
</SvgIcon>
)}
size="small"
>
See All
</Button>
</Box>
</Card>
</Box>
);
