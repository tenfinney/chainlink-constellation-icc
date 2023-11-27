import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { SeverityPill } from 'src/components/severity-pill';
const campaigns = [
{
id: '0x1234567890123456789012345678901234567890SS',
clickRate: 6.32,
conversionRate: 1.05,
createdAt: 'May 22, 2023',
name: 'Objective 2 Results',
platform: 'MetaCollab',
status: 'draft',
target: 'Key Performance Indicator and Metric 1'
},
{
id: '0x1234567890123456789012345678901234567890SS',
clickRate: 7.94,
conversionRate: 0.31,
createdAt: 'May 22, 2023',
name: 'Objective 1 Results',
platform: 'SmartLaw',
status: 'active',
target: 'Key Performance Indicator and Metric 2'
},
{
id: '0x1234567890123456789012345678901234567890SS',
clickRate: 20.15,
conversionRate: 2.1,
createdAt: 'May 22, 2023',
name: 'Objective 3 Results',
platform: 'Digital Artifacts',
status: 'stopped',
target: 'Key Performance Indicator and Metric 3'
},
{
id: '0x1234567890123456789012345678901234567890SS',
clickRate: 7.94,
conversionRate: 0.5,
createdAt: 'May 22, 2023',
name: 'Objective 4 Results',
platform: 'Web3Skills',
status: 'draft',
target: 'Key Performance Indicator and Metric 4'
}
];
const statusColorsMap = {
draft: 'secondary',
active: 'success',
stopped: 'error'
};
export const GroupedList11 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<CardHeader title="Campaigns Summary" />
<Divider />
<Table>
<TableBody>
{campaigns.map((campaign) => {
const statusColor = statusColorsMap[campaign.status];
return (
<TableRow
key={campaign.id}
sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
<TableCell>
<Typography
sx={{ cursor: 'pointer' }}
variant="subtitle2"
>
{campaign.name}
</Typography>
<Box
sx={{
alignItems: 'center',
display: 'flex',
mt: 1
}}
>
<Typography
color="text.secondary"
variant="body2"
>
{campaign.platform}
</Typography>
<Box
sx={{
height: 4,
width: 4,
borderRadius: 4,
backgroundColor: 'text.secondary',
mx: 1
}}
/>
<Typography
color="text.secondary"
variant="body2"
>
{`${campaign.target}, ${campaign.createdAt}`}
</Typography>
</Box>
</TableCell>
<TableCell>
<SeverityPill color={statusColor}>
{campaign.status}
</SeverityPill>
</TableCell>
<TableCell>
<Typography variant="subtitle2">
{campaign.clickRate}%
</Typography>
<Typography
color="text.secondary"
sx={{ mt: 1 }}
variant="body2"
>
Click Rate
</Typography>
</TableCell>
<TableCell>
<Typography variant="subtitle2">
{campaign.conversionRate}%
</Typography>
<Typography
color="text.secondary"
sx={{ mt: 1 }}
variant="body2"
>
Conversions
</Typography>
</TableCell>
<TableCell align="right">
<Button
size="small"
variant="outlined"
>
View
</Button>
</TableCell>
</TableRow>
);
})}
</TableBody>
</Table>
</Card>
</Box>
);
