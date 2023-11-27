import { formatDistanceToNowStrict, subHours, subMinutes } from 'date-fns';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
const now = new Date();
const activities = [
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subMinutes(now, 23).getTime(),
description: 'has uploaded a new file',
subject: 'Project author',
type: 'upload_file'
},
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subHours(now, 2).getTime(),
description: 'Product and Course Descriptions go here.',
subject: 'Scott Steventon perf',
type: 'join_team'
},
{
id: '0x1234567890123456789012345678901234567890SS',
createdAt: subHours(now, 9).getTime(),
description: 'Product and Course Descriptions go here.',
subject: 'Scott Steventon perf',
type: 'join_team'
}
];
export const GroupedList10 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Stack spacing={3}>
{activities.map((activity) => {
const ago = formatDistanceToNowStrict(activity.createdAt);
return (
<Card
key={activity.id}
sx={{
alignItems: 'center',
display: 'flex',
p: 2
}}
>
<Avatar
sx={{
backgroundColor: 'primary.main',
color: 'common.white'
}}
>
<SvgIcon>
<Download01Icon />
</SvgIcon>
</Avatar>
<Typography
sx={{ ml: 2 }}
variant="body2"
>
<Link
color="text.primary"
variant="subtitle2"
>
{activity.subject}
</Link>
{' '}
{activity.description}
</Typography>
<Typography
sx={{ ml: 'auto' }}
variant="caption"
>
{ago}
{' '}
ago
</Typography>
</Card>
);
})}
</Stack>
</Box>
);
