import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';
const chartSeries = [14859, 35690, 45120];
const labels = ['Strategy', 'Outsourcing', 'Marketing'];
const useChartOptions = () => {
const theme = useTheme();
return {
chart: {
background: 'transparent',
stacked: false,
toolbar: {
show: false
}
},
colors: [
theme.palette.primary.main,
theme.palette.info.main,
theme.palette.warning.main
],
dataLabels: {
enabled: false
},
fill: {
opacity: 1,
type: 'solid'
},
labels,
legend: {
show: false
},
stroke: {
colors: [theme.palette.background.paper],
width: 1
},
theme: {
mode: theme.palette.mode
},
tooltip: {
fillSeriesColor: false
}
};
};
export const Chart10 = () => {
const chartOptions = useChartOptions();
return (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Container maxWidth="md">
<Card>
<CardHeader title="Cost Breakdown" />
<CardContent>
<Chart
height={260}
options={chartOptions}
series={chartSeries}
type="pie"
/>
{chartSeries.map((item, index) => {
const amount = numeral(item).format('$0,0.00');
return (
<Box
key={index}
sx={{
alignItems: 'center',
display: 'flex',
p: 1
}}
>
<Box
sx={{
backgroundColor: chartOptions.colors[index],
borderRadius: '50%',
height: 8,
width: 8
}}
/>
<Typography
sx={{ ml: 2 }}
variant="subtitle2"
>
{labels[index]}
</Typography>
<Box sx={{ flexGrow: 1 }} />
<Typography
color="text.secondary"
variant="subtitle2"
>
{amount}
</Typography>
</Box>
);
})}
</CardContent>
</Card>
</Container>
</Box>
);
};
