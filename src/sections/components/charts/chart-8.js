import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';
const labels = ['Linkedin', 'Facebook', 'Instagram', 'Twitter', 'Other'];
const chartSeries = [10, 10, 20, 10, 70];
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
theme.palette.primary.light,
theme.palette.warning.light,
theme.palette.success.light,
theme.palette.info.light,
theme.palette.neutral[700]
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
labels: {
colors: theme.palette.text.secondary
},
show: true
},
plotOptions: {
pie: {
expandOnClick: false
}
},
states: {
active: {
filter: {
type: 'none'
}
},
hover: {
filter: {
type: 'none'
}
}
},
stroke: {
width: 0
},
theme: {
mode: theme.palette.mode
},
tooltip: {
fillSeriesColor: false
}
};
};
export const Chart8 = () => {
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
<Container maxWidth="sm">
<Card>
<CardHeader
action={(
<Tooltip title="Traffic by Social Media platforms">
<SvgIcon>
<InfoCircleIcon />
</SvgIcon>
</Tooltip>
)}
title="Social Media Sources"
/>
<CardContent>
<Chart
height={300}
options={chartOptions}
series={chartSeries}
type="donut"
/>
</CardContent>
<CardActions sx={{ justifyContent: 'flex-end' }}>
<Button
color="inherit"
endIcon={(
<SvgIcon>
<ArrowRightIcon />
</SvgIcon>
)}
size="small"
>
See all
</Button>
</CardActions>
</Card>
</Container>
</Box>
);
};
