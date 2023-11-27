import numeral from 'numeral';
import { format, subMinutes, subSeconds } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
const now = new Date();
const orders = [
{
id: '5ecb8a6d9f53bfae09e16115',
createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
currency: '$',
customer: {
email: 'scott@onelaw.us',
name: 'User 004I',
},
number: 'CLEC-103',
paymentMethod: 'CreditCard',
status: 'pending',
totalAmount: 500.00
},
{
id: '5ecb8a738aa6f3e577c2b3ec',
createdAt: subMinutes(subSeconds(now, 51), 36).getTime(),
currency: '$',
customer: {
email: 'scott@onelaw.us',
name: 'User 007e',
},
number: 'CLEC-102',
paymentMethod: 'PayPal',
status: 'complete',
totalAmount: 500.00
},
{
id: '5ecb8a795e53f134013eba3b',
createdAt: subMinutes(subSeconds(now, 55), 38).getTime(),
currency: '$',
customer: {
email: 'scott@onelaw.us',
name: 'User 009j',
},
number: 'CLEC-101',
paymentMethod: 'CreditCard',
status: 'pending',
totalAmount: 500.00
},
{
id: '5ecb8a7f738cc572a9ce0277',
createdAt: subMinutes(subSeconds(now, 3), 40).getTime(),
currency: '$',
customer: {
email: 'scott@onelaw.us',
name: 'User 005a',
},
number: 'CLEC-112',
paymentMethod: 'PayPal',
status: 'complete',
totalAmount: 500.00
},
{
id: '5e86805e2bafd54f66cc95c3',
createdAt: subMinutes(subSeconds(now, 32), 45).getTime(),
currency: '$',
customer: {
email: 'scott@onelaw.us',
name: 'User 012d',
},
number: 'CLEC-111',
paymentMethod: 'PayPal',
status: 'complete',
totalAmount: 500.00
}
];
const getStatusPill = (orderStatus) => {
const map = {
canceled: {
color: 'error',
text: 'Canceled'
},
complete: {
color: 'success',
text: 'complete'
},
pending: {
color: 'warning',
text: 'Pending'
},
rejected: {
color: 'error',
text: 'Rejected'
}
};
const { text, color } = map[orderStatus];
return (
<SeverityPill color={color}>
{text}
</SeverityPill>
);
};
export const Table4 = () => (
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
title="Orders"
/>
<Divider />
<Scrollbar>
<Table sx={{ minWidth: 1150 }}>
<TableHead>
<TableRow>
<TableCell padding="checkbox">
<Checkbox />
</TableCell>
<TableCell>
Number
</TableCell>
<TableCell>
Customer
</TableCell>
<TableCell>
Method
</TableCell>
<TableCell>
Total
</TableCell>
<TableCell>
Status
</TableCell>
<TableCell align="right">
Actions
</TableCell>
</TableRow>
</TableHead>
<TableBody>
{orders.map((order) => {
const createdAt = format(order.createdAt, 'dd MMM yyyy | HH:mm');
const totalAmount = numeral(order.totalAmount).format(`${order.currency}0,0.00`);
const statusPill = getStatusPill(order.status);
return (
<TableRow
hover
key={order.id}
>
<TableCell padding="checkbox">
<Checkbox />
</TableCell>
<TableCell>
<Typography variant="subtitle2">
{order.number}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
{createdAt}
</Typography>
</TableCell>
<TableCell>
<Typography variant="subtitle2">
{order.customer.name}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
{order.customer.email}
</Typography>
</TableCell>
<TableCell>
{order.paymentMethod}
</TableCell>
<TableCell>
{totalAmount}
</TableCell>
<TableCell>
{statusPill}
</TableCell>
<TableCell align="right">
<IconButton>
<SvgIcon>
<Edit02Icon />
</SvgIcon>
</IconButton>
<IconButton>
<SvgIcon>
<ArrowRightIcon />
</SvgIcon>
</IconButton>
</TableCell>
</TableRow>
);
})}
</TableBody>
</Table>
</Scrollbar>
<TablePagination
component="div"
count={orders.length}
onPageChange={() => { }}
onRowsPerPageChange={() => { }}
page={0}
rowsPerPage={5}
rowsPerPageOptions={[5, 10, 25]}
/>
</Card>
</Box>
);
