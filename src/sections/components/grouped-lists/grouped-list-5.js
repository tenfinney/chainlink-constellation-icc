import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { CircularProgress } from 'src/components/circular-progress';
import { Scrollbar } from 'src/components/scrollbar';
const products = [
{
id: '0x1234567890123456789012345678901234567890SS',
conversionRate: 93,
currency: '$',
image: '/assets/products/product-1.png',
name: 'Web3 Legal Engineering',
profit: 10000,
sales: 13153
},
{
id: '0x1234567890123456789012345678901234567890SS',
conversionRate: 76,
currency: '$',
image: '/assets/products/product-2.png',
name: 'Web3Skills Course',
profit: 10000,
sales: 10300
},
{
id: '0x1234567890123456789012345678901234567890SS',
conversionRate: 60,
currency: '$',
image: '/assets/products/product-2.png',
name: 'SmartLaw Course',
profit: 10000,
sales: 5300
},
{
id: '0x1234567890123456789012345678901234567890SS',
conversionRate: 46,
currency: '$',
image: '/assets/products/product-4.png',
name: 'Web3 Legal Engineering',
profit: 10000,
sales: 1203
},
{
id: '0x1234567890123456789012345678901234567890SS',
conversionRate: 41,
currency: '$',
image: '/assets/products/product-5.png',
name: 'Web3 Legal Engineering',
profit: 10000,
sales: 254
}
];
export const GroupedList5 = () => (
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
title="Profitable Products"
/>
<Scrollbar>
<Table sx={{ minWidth: 700 }}>
<TableBody>
{products.map((product) => {
const sales = numeral(product.sales).format('0,0');
const profit = numeral(product.profit).format(`${product.currency}0,0.00`);
return (
<TableRow
hover
key={product.id}
>
<TableCell>
<Stack
alignItems="center"
direction="row"
spacing={2}
>
{product.image
? (
<Box
sx={{
alignItems: 'center',
backgroundColor: 'neutral.50',
backgroundImage: `url(${product.image})`,
backgroundPosition: 'center',
backgroundSize: 'cover',
borderRadius: 1,
display: 'flex',
height: 80,
justifyContent: 'center',
overflow: 'hidden',
width: 80
}}
/>
)
: (
<Box
sx={{
alignItems: 'center',
backgroundColor: 'neutral.50',
borderRadius: 1,
display: 'flex',
height: 80,
justifyContent: 'center',
width: 80
}}
>
<SvgIcon>
<Image01Icon />
</SvgIcon>
</Box>
)}
<div>
<Typography variant="subtitle2">
{product.name}
</Typography>
<Typography
color="text.secondary"
noWrap
variant="body2"
>
<Typography
color="success.main"
component="span"
variant="subtitle2"
>
{sales}
</Typography>
{' '}
Sales
</Typography>
</div>
</Stack>
</TableCell>
<TableCell>
<Typography variant="subtitle2">
Profit
</Typography>
<Typography
color="text.secondary"
noWrap
variant="body2"
>
{profit}
</Typography>
</TableCell>
<TableCell>
<Stack
alignItems="center"
direction="row"
justifyContent="flex-end"
spacing={2}
>
<div>
<Typography
align="right"
variant="subtitle2"
>
{product.conversionRate}%
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Conversion Rate
</Typography>
</div>
<CircularProgress value={product.conversionRate} />
</Stack>
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
<ArrowRightIcon />
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
