import numeral from 'numeral';
import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
const countries = [
{
flag: '/assets/flags/flag-us.svg',
name: 'United States',
seo: 40,
visits: 31200
},
{
flag: '/assets/flags/flag-uk.svg',
name: 'United States',
seo: 47,
visits: 12700
},
{
flag: '/assets/flags/flag-es.svg',
name: 'Spain',
seo: 65,
visits: 10360
},
{
flag: '/assets/flags/flag-ca.svg',
name: 'Canada',
seo: 23,
visits: 5749
},
{
flag: '/assets/flags/flag-de.svg',
name: 'Germany',
seo: 45,
visits: 2932
}
];
export const Table8 = () => (
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
<Tooltip title="Refresh rate is 24h">
<SvgIcon>
<InfoCircleIcon />
</SvgIcon>
</Tooltip>
)}
title="Visits by Country"
/>
<Table>
<TableHead>
<TableRow>
<TableCell>
Country
</TableCell>
<TableCell>
<TableSortLabel
active
direction="asc"
>
Visits
</TableSortLabel>
</TableCell>
<TableCell>
SEO
</TableCell>
</TableRow>
</TableHead>
<TableBody>
{countries.map((country) => {
const visits = numeral(country.visits).format('0,0');
return (
<TableRow
key={country.name}
sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
<TableCell>
<Stack
alignItems="center"
direction="row"
spacing={2}
>
<Box
sx={{
height: 36,
width: 36,
'& img': {
height: 36,
width: 36
}
}}
>
<img
alt={country.name}
src={country.flag}
/>
</Box>
<Typography variant="subtitle2">
{country.name}
</Typography>
</Stack>
</TableCell>
<TableCell>
{visits}
</TableCell>
<TableCell>
{country.seo}%
</TableCell>
</TableRow>
);
})}
</TableBody>
</Table>
</Card>
</Box>
);
