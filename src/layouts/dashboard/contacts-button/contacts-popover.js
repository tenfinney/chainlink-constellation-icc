import { formatDistanceStrict } from 'date-fns';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Presence } from 'src/components/presence';
import { customLocale } from 'src/utils/date-locale';
export const ContactsPopover = (props) => {
const { anchorEl, contacts = [], onClose, open = false, ...other } = props;
return (
<Popover
anchorEl={anchorEl}
anchorOrigin={{
horizontal: 'center',
vertical: 'bottom'
}}
disableScrollLock
onClose={onClose}
open={open}
PaperProps={{ sx: { width: 320 } }}
{...other}>
<Box sx={{ p: 2 }}>
<Typography variant="h6">
Contacts
</Typography>
</Box>
<Box sx={{ p: 2 }}>
<List disablePadding>
{contacts.map((contact) => {
const showOnline = contact.isActive;
const lastActivity = !contact.isActive && contact.lastActivity
? formatDistanceStrict(contact.lastActivity, new Date(), {
addSuffix: true,
locale: customLocale
})
: undefined;
return (
<ListItem
disableGutters
key={contact.id}
>
<ListItemAvatar>
<Avatar
src={contact.avatar}
sx={{ cursor: 'pointer' }}
/>
</ListItemAvatar>
<ListItemText
disableTypography
primary={(
<Link
color="text.primary"
noWrap
sx={{ cursor: 'pointer' }}
underline="none"
variant="subtitle2"
>
{contact.name}
</Link>
)}
/>
{showOnline && (
<Presence
size="small"
status="online"
/>
)}
{lastActivity && (
<Typography
color="text.secondary"
noWrap
variant="caption"
>
{lastActivity}
</Typography>
)}
</ListItem>
);
})}
</List>
</Box>
</Popover>
);
};
ContactsPopover.propTypes = {
anchorEl: PropTypes.any,
contacts: PropTypes.array,
onClose: PropTypes.func,
open: PropTypes.bool
};
