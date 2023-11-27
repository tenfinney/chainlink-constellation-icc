import CreditCard02Icon from '@untitled-ui/icons-react/build/esm/CreditCard02';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import Send01Icon from '@untitled-ui/icons-react/build/esm/Send01';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
const notifications = [
{
id: '0x1234567890123456789012345678901234567890SS',
message: 'SmartLaw Message text goes here.',
type: 'invite',
value: 6
},
{
id: '0x1234567890123456789012345678901234567890SS',
message: 'SmartLaw Message text goes here.',
type: 'message',
value: 2
},
{
id: '0x1234567890123456789012345678901234567890SS',
message: 'SmartLaw Message text goes here.',
type: 'payout',
value: 1
}
];
const iconsMap = {
invite: <Send01Icon />,
message: <Mail01Icon />,
payout: <CreditCard02Icon />
};
export const GroupedList4 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<List>
{notifications.map((notification, index) => {
const showDivider = index < notifications.length - 1;
const icon = iconsMap[notification.type];
const title = `${notification.value} ${notification.type}s ${notification.message}`;
return (
<ListItem
divider={showDivider}
key={notification.id}
>
<ListItemIcon>
<SvgIcon>
{icon}
</SvgIcon>
</ListItemIcon>
<ListItemText>
<Typography variant="subtitle2">
{title}
</Typography>
</ListItemText>
<ListItemSecondaryAction>
<Tooltip title="View">
<IconButton edge="end">
<SvgIcon>
<ChevronRightIcon />
</SvgIcon>
</IconButton>
</Tooltip>
</ListItemSecondaryAction>
</ListItem>
);
})}
</List>
</Card>
</Box>
);
