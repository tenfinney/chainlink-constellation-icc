import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';
const chartSeries = [
{
name: 'Page Views',
data: [3350, 1840, 2254, 5780, 9349, 5241, 2770, 2051, 3764, 2385, 5912, 8323]
},
{
name: 'Session Duration',
data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
}
];
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
theme.palette.warning.main
],
dataLabels: {
enabled: false
},
fill: {
opacity: 1,
type: 'solid'
},
grid: {
borderColor: theme.palette.divider,
strokeDashArray: 2,
xaxis: {
lines: {
show: false
}
},
yaxis: {
lines: {
show: true
}
}
},
legend: {
horizontalAlign: 'right',
labels: {
colors: theme.palette.text.secondary
},
position: 'top',
show: true
},
markers: {
hover: {
size: undefined,
sizeOffset: 2
},
radius: 2,
shape: 'circle',
size: 4,
strokeWidth: 0
},
stroke: {
curve: 'smooth',
dashArray: [0, 3],
lineCap: 'butt',
width: 3
},
theme: {
mode: theme.palette.mode
},
xaxis: {
axisBorder: {
show: false
},
axisTicks: {
show: false
},
categories: [
'23 Jan',
'23 Feb',
'23 Mar',
'23 Apr',
'23 May',
'23 Jun',
'23 Jul',
'23 Aug',
'23 Sep',
'23 Oct',
'23 Nov',
'23 Dec',
],
labels: {
style: {
colors: theme.palette.text.secondary
}
}
},
yaxis: [
{
axisBorder: {
show: false
},
axisTicks: {
show: false
},
labels: {
style: {
colors: theme.palette.text.secondary
}
}
},
{
axisBorder: {
show: false
},
axisTicks: {
show: false
},
labels: {
style: {
colors: theme.palette.text.secondary
}
},
opposite: true
}
]
};
};
export const Chart2 = () => {
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
<Card>
<CardHeader title="Analytics" />
<CardContent>
<Chart
height={300}
options={chartOptions}
series={chartSeries}
type="line"
/>
</CardContent>
</Card>
</Box>
);
};
