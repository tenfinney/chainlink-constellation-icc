import { format } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
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
const invoices = [
{
id: '5ece2cef3e562cbd61996259',
currency: '$',
description: 'Descriptions go here.',
issueDate: now.getTime(),
number: 2222,
paymentMethod: 'Credit Card',
status: 'paid',
value: 5.25
},
{
id: '5ece2cf461b9484866f2968c',
currency: '$',
description: 'Descriptions go here.',
issueDate: now.getTime(),
number: 1111,
paymentMethod: 'Credit Card',
status: 'paid',
value: 5.25
}
];
export const Table9 = () => (
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
title="Invoices"
/>
<Divider />
<Scrollbar>
<Table sx={{ minWidth: 1150 }}>
<TableHead>
<TableRow>
<TableCell>
ID
</TableCell>
<TableCell>
Date
</TableCell>
<TableCell>
Description
</TableCell>
<TableCell>
Payment Method
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
{invoices.map((invoice) => {
const issueDate = format(invoice.issueDate, 'dd/MM/yyyy | HH:mm');
return (
<TableRow key={invoice.id}>
<TableCell>
#{invoice.number}
</TableCell>
<TableCell>
<Typography
noWrap
variant="body2"
>
{issueDate}
</Typography>
</TableCell>
<TableCell>
{invoice.description}
</TableCell>
<TableCell>
{invoice.paymentMethod}
</TableCell>
<TableCell>
{invoice.currency}
{invoice.value}
</TableCell>
<TableCell>
<SeverityPill color="primary">
{invoice.status}
</SeverityPill>
</TableCell>
<TableCell align="right">
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
count={invoices.length}
onPageChange={() => { }}
onRowsPerPageChange={() => { }}
page={0}
rowsPerPage={5}
rowsPerPageOptions={[5, 10, 25]}
/>
</Card>
</Box>
);
