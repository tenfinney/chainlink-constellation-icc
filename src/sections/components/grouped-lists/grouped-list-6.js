import { format, subDays } from 'date-fns';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
const now = new Date();
const transactions = [
{
id: '0x1234567890123456789012345678901234567890SS',
amount: 25000,
currency: 'usd',
createdAt: now.getTime(),
sender: 'LexAutomaticoTreasury',
type: 'receive'
},
{
id: '0x1234567890123456789012345678901234567890SS',
amount: 25000,
currency: 'usd',
createdAt: subDays(now, 1).getTime(),
sender: 'LexAutomaticoTreasury',
type: 'send'
},
{
id: '0x1234567890123456789012345678901234567890SS',
amount: 25000,
currency: 'usd',
createdAt: subDays(now, 1).getTime(),
sender: 'LexAutomaticoTreasury',
type: 'send'
},
{
id: '0x1234567890123456789012345678901234567890SS',
amount: 25000,
currency: 'usd',
createdAt: subDays(now, 3).getTime(),
sender: 'LexAutomaticoTreasury',
type: 'receive'
}
];
export const GroupedList6 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<CardHeader title="Latest Transactions" />
<Divider />
<Table>
<TableBody>
{transactions.map((transaction) => {
const createdAtMonth = format(transaction.createdAt, 'LLL').toUpperCase();
const createdAtDay = format(transaction.createdAt, 'd');
const type = transaction.type === 'receive' ? 'Payment received' : 'Payment sent';
const amount = (transaction.type === 'receive' ? '+' : '-')
+ ' '
+ numeral(transaction.amount).format('$0,0.00');
const amountColor = transaction.type === 'receive' ? 'success.main' : 'error.main';
return (
<TableRow
key={transaction.id}
sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
<TableCell width={100}>
<Box sx={{ p: 1 }}>
<Typography
align="center"
color="text.secondary"
variant="subtitle2"
>
{createdAtMonth}
</Typography>
<Typography
align="center"
color="text.secondary"
variant="h6"
>
{createdAtDay}
</Typography>
</Box>
</TableCell>
<TableCell>
<Typography variant="subtitle2">
{transaction.sender}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
{type}
</Typography>
</TableCell>
<TableCell align="right">
<Typography
color={amountColor}
variant="subtitle2"
>
{amount}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
{transaction.currency.toUpperCase()}
</Typography>
</TableCell>
</TableRow>
);
})}
</TableBody>
</Table>
</Card>
</Box>
);
