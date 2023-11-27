import { addDays, addHours, differenceInDays, isAfter } from 'date-fns';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import { Scrollbar } from 'src/components/scrollbar';
const now = new Date();
const tasks = [
{
id: '0x1234567890123456789012345678901234567890SS',
deadline: addDays(addHours(now, 1), 1).getTime(),
members: [
{
avatar: '/assets/avatars/avatar-sl-08.png',
name: 'User 010c',
},
{
avatar: '/assets/avatars/avatar-sl-06.png',
name: 'User 004c',
}
],
title: 'Update the Web3 Protocols'
},
{
id: '0x1234567890123456789012345678901234567890SS',
deadline: addDays(addHours(now, 1), 2).getTime(),
members: [
{
avatar: '/assets/avatars/avatar-sl-15.png',
name: 'User 015a',
},
{
avatar: '/assets/avatars/avatar-sl-05.png',
name: 'User 003d',
},
{
avatar: '/assets/avatars/avatar-sl-10.png',
name: 'User 013a',
}
],
title: 'Redesign the landing page'
},
{
id: '0x1234567890123456789012345678901234567890SS',
deadline: now.getTime(),
members: [
{
avatar: '/assets/avatars/avatar-sl-09.png',
name: 'User 012a',
}
],
title: 'Find the bug'
},
{
id: '0x1234567890123456789012345678901234567890SS',
deadline: null,
members: [
{
avatar: '/assets/avatars/avatar-sl-08.png',
name: 'User 010d',
},
{
avatar: '/assets/avatars/avatar-sl-16.png',
name: 'User 016c',
}
],
title: 'Release v1.0 Beta'
},
{
id: '0x1234567890123456789012345678901234567890SS',
deadline: null,
members: [
{
avatar: '/assets/avatars/avatar-sl-07.png',
name: 'User 009e',
},
{
avatar: '/assets/avatars/avatar-sl-08.png',
name: 'User 010e',
},
{
avatar: '/assets/avatars/avatar-sl-05.png',
name: 'User 003e',
}
],
title: 'Compliance'
},
{
id: '0x1234567890123456789012345678901234567890SS',
deadline: null,
members: [
{
avatar: '/assets/avatars/avatar-sl-15.png',
name: 'User 015b',
}
],
title: 'Redesign Landing Page'
}
];
const getDeadline = (task) => {
let deadline = '';
if (task.deadline) {
const deadlineDate = task.deadline;
if (isAfter(deadlineDate, now) && differenceInDays(deadlineDate, now) < 3) {
deadline = `${differenceInDays(deadlineDate, now)} days remaining`;
}
}
return deadline;
};
export const GroupedList3 = () => (
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
title="Team Tasks"
/>
<Divider />
<Scrollbar>
<List sx={{ minWidth: 400 }}>
{tasks.map((task, index) => {
const showDivider = index < tasks.length - 1;
const deadline = getDeadline(task);
return (
<ListItem
divider={showDivider}
key={task.id}
>
<ListItemText
primary={(
<Link
color="text.primary"
noWrap
sx={{ cursor: 'pointer' }}
variant="subtitle2"
>
{task.title}
</Link>
)}
secondary={deadline}
/>
<AvatarGroup max={3}>
{task.members.map((member) => (
<Tooltip
key={member.name}
title="View"
>
<Avatar src={member.avatar} />
</Tooltip>
))}
</AvatarGroup>
</ListItem>
);
})}
</List>
</Scrollbar>
</Card>
</Box>
);
