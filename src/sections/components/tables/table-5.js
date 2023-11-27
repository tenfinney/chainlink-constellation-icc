import numeral from 'numeral';
import { subDays, subHours } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
const now = new Date();
const products = [
{
id: '0x1234567890123456789012345678901234567890SS',
attributes: ['skills'],
category: 'Productivity',
currency: '$',
createdAt: subDays(now, 1).getTime(),
image: '/assets/products/product-1.png',
inventoryType: 'in_stock',
isAvailable: true,
isShippable: false,
name: 'Web3 Legal Engineering',
price: 19.95,
quantity: 1,
updatedAt: subHours(now, 6).getTime(),
variants: 2
},
{
id: '0x1234567890123456789012345678901234567890SS',
attributes: ['skills'],
category: 'Productivity',
currency: '$',
createdAt: subDays(now, 3).getTime(),
image: '/assets/products/product-2.png',
inventoryType: 'out_of_stock',
isAvailable: false,
isShippable: true,
name: 'Web3Skills Course',
price: 19.95,
quantity: 1,
updatedAt: subDays(subHours(now, 8), 2).getTime(),
variants: 1
},
{
id: '0x1234567890123456789012345678901234567890SS',
attributes: ['legaltech'],
category: 'web3skills',
currency: '$',
createdAt: subDays(now, 6).getTime(),
image: null,
inventoryType: 'in_stock',
isAvailable: true,
isShippable: false,
name: 'Legal Engineering Course',
price: 19.95,
quantity: 1,
updatedAt: subDays(subHours(now, 2), 1).getTime(),
variants: 5
},
{
id: '0x1234567890123456789012345678901234567890SS',
attributes: ['legaltech'],
category: 'web3skills',
currency: '$',
createdAt: subDays(now, 12).getTime(),
image: '/assets/products/product-4.png',
inventoryType: 'limited',
isAvailable: false,
isShippable: true,
name: 'Web3 Legal Engineering',
price: 19.95,
quantity: 1,
updatedAt: subDays(subHours(now, 7), 1).getTime(),
variants: 1
}
];
const categoryOptions = [
{
label: 'All',
value: 'all'
},
{
label: 'Blockchains',
value: 'freeweb3'
},
{
label: 'Web3Skills',
value: 'digital-assets'
},
{
label: 'Peer to Peer',
value: 'smartlaw'
},
{
label: 'Digital Assets',
value: 'web3skills'
}
];
const availabilityOptions = [
{
label: 'All',
value: 'all'
},
{
label: 'Available',
value: 'available'
},
{
label: 'Unavailable',
value: 'unavailable'
}
];
const sortOptions = [
{
label: 'Last update (newest first)',
value: 'updatedAt|desc'
},
{
label: 'Last update (oldest first)',
value: 'updatedAt|asc'
},
{
label: 'Creation date (newest first)',
value: 'createdAt|desc'
},
{
label: 'Creation date (oldest first)',
value: 'createdAt|asc'
}
];
const getInventoryPill = (inventoryType) => {
const map = {
in_stock: {
color: 'success',
text: 'In Stock'
},
limited: {
color: 'warning',
text: 'Limited'
},
out_of_stock: {
color: 'error',
text: 'Out of Stock'
}
};
const { text, color } = map[inventoryType];
return (
<SeverityPill color={color}>
{text}
</SeverityPill>
);
};
export const Table5 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<Stack
alignItems="center"
direction="row"
flexWrap="wrap"
gap={2}
sx={{ p: 3 }}
>
<OutlinedInput
placeholder="Search products"
startAdornment={(
<InputAdornment position="start">
<SvgIcon>
<SearchMdIcon />
</SvgIcon>
</InputAdornment>
)}
sx={{
maxWidth: '100%',
width: 500
}}
/>
<TextField
label="Sort By"
name="sort"
select
SelectProps={{ native: true }}
sx={{
maxWidth: '100%',
width: 240
}}
>
{sortOptions.map((option) => (
<option
key={option.value}
value={option.value}
>
{option.label}
</option>
))}
</TextField>
<TextField
label="Category"
name="category"
select
SelectProps={{ native: true }}
sx={{
maxWidth: '100%',
width: 240
}}
>
{categoryOptions.map((option) => (
<option
key={option.value}
value={option.value}
>
{option.label}
</option>
))}
</TextField>
<TextField
label="Availability"
name="availability"
select
SelectProps={{ native: true }}
sx={{
maxWidth: '100%',
width: 240
}}
>
{availabilityOptions.map((option) => (
<option
key={option.value}
value={option.value}
>
{option.label}
</option>
))}
</TextField>
<div>
<FormControlLabel
control={<Switch name="inStock" />}
label="In Stock"
/>
</div>
<div>
<FormControlLabel
control={<Switch name="Shippable" />}
label="Shippable"
/>
</div>
</Stack>
<Scrollbar>
<Table sx={{ minWidth: 1200 }}>
<TableHead>
<TableRow>
<TableCell padding="checkbox">
<Checkbox />
</TableCell>
<TableCell>
Name
</TableCell>
<TableCell>
Inventory
</TableCell>
<TableCell>
Details
</TableCell>
<TableCell>
Attributes
</TableCell>
<TableCell>
Price
</TableCell>
<TableCell align="right">
Actions
</TableCell>
</TableRow>
</TableHead>
<TableBody>
{products.map((product) => {
const price = numeral(product.price).format(`${product.currency}0,0.00`);
const hasManyVariants = product.variants > 1;
return (
<TableRow
hover
key={product.id}
>
<TableCell padding="checkbox">
<Checkbox />
</TableCell>
<TableCell>
<Box
sx={{
alignItems: 'center',
display: 'flex'
}}
>
{product.image
? (
<Box
sx={{
alignItems: 'center',
backgroundColor: 'neutral.50',
display: 'flex',
height: 100,
justifyContent: 'center',
overflow: 'hidden',
width: 100,
'& img': {
height: 'auto',
width: '100%'
}
}}
>
<img
alt="Product"
src={product.image}
/>
</Box>
)
: (
<Box
sx={{
alignItems: 'center',
backgroundColor: 'neutral.50',
display: 'flex',
height: 100,
justifyContent: 'center',
width: 100
}}
>
<SvgIcon>
<Image01Icon />
</SvgIcon>
</Box>
)}
<Link
color="text.primary"
underline="none"
sx={{ ml: 2 }}
variant="subtitle2"
>
{product.name}
</Link>
</Box>
</TableCell>
<TableCell>
{getInventoryPill(product.inventoryType)}
</TableCell>
<TableCell>
{product.quantity}
{' '}
in stock
{hasManyVariants && ` in ${product.variants} variants`}
</TableCell>
<TableCell>
{product.attributes.map((attr) => attr)}
</TableCell>
<TableCell>
{price}
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
count={products.length}
onPageChange={() => { }}
onRowsPerPageChange={() => { }}
page={0}
rowsPerPage={5}
rowsPerPageOptions={[5, 10, 25]}
/>
</Card>
</Box>
);
