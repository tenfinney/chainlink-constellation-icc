import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
export const QuickStats7 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<CardHeader title="Profile Progress" />
<Divider />
<CardContent>
<Stack spacing={2}>
<LinearProgress
value={50}
variant="determinate"
/>
<Typography
color="text.secondary"
variant="subtitle2"
>
50% Set Up Complete
</Typography>
</Stack>
</CardContent>
</Card>
</Box>
);
