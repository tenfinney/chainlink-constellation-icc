import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';
const chartSeries = [
{
data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}
];
const useChartOptions = () => {
const theme = useTheme();
return {
chart: {
background: 'transparent',
toolbar: {
show: false
},
zoom: {
enabled: false
}
},
colors: [theme.palette.primary.main],
dataLabels: {
enabled: false
},
fill: {
opacity: 1,
type: 'solid'
},
grid: {
show: false
},
stroke: {
curve: 'smooth',
width: 3
},
theme: {
mode: theme.palette.mode
},
tooltip: {
enabled: false
},
xaxis: {
labels: {
show: false
},
axisBorder: {
show: false
},
axisTicks: {
show: false
}
},
yaxis: {
show: false
}
};
};
const Graphic = () => {
const chartOptions = useChartOptions();
return (
<Box
sx={{
alignItems: 'center',
display: 'flex',
height: 54,
width: 177
}}
>
<Chart
options={chartOptions}
series={chartSeries}
type="line"
/>
</Box>
);
};
export const QuickStats5 = () => {
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
<Grid
container
sx={{
'& > *:not(:last-of-type)': {
borderRight: (theme) => ({
md: `1px solid ${theme.palette.divider}`
}),
borderBottom: (theme) => ({
xs: `1px solid ${theme.palette.divider}`,
md: 'none'
})
}
}}
>
<Grid
xs={12}
md={4}
>
<Stack
alignItems="center"
direction="row"
sx={{ p: 3 }}
spacing={2}
>
<div>
<Typography
color="text.secondary"
variant="overline"
>
Sales
</Typography>
<Typography variant="h5">
$0,000.00
</Typography>
<Typography
color="text.secondary"
variant="caption"
>
vs. $0,000.00 last day
</Typography>
</div>
<Graphic />
</Stack>
</Grid>
<Grid
xs={12}
md={4}
>
<Stack
alignItems="center"
direction="row"
sx={{ p: 3 }}
spacing={2}
>
<div>
<Typography
color="text.secondary"
variant="overline"
>
Cost
</Typography>
<Typography variant="h5">
$119.95
</Typography>
<Typography
color="text.secondary"
variant="caption"
>
vs. $0,000.00 last day
</Typography>
</div>
<Graphic />
</Stack>
</Grid>
<Grid
xs={12}
md={4}
>
<Stack
alignItems="center"
direction="row"
sx={{ p: 3 }}
spacing={2}
>
<div>
<Typography
color="text.secondary"
variant="overline"
>
Profit
</Typography>
<Typography variant="h5">
$0,000.00
</Typography>
<Typography
color="text.secondary"
variant="caption"
>
vs. $0,000.00 last day
</Typography>
</div>
<Graphic />
</Stack>
</Grid>
</Grid>
</Card>
</Box>
);
};
