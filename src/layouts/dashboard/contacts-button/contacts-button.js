import { subHours, subMinutes } from 'date-fns';
import Users03Icon from '@untitled-ui/icons-react/build/esm/Users03';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import { usePopover } from 'src/hooks/use-popover';
import { ContactsPopover } from './contacts-popover';
const now = new Date();
const useContacts = () => {
return [
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-10.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 001a',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-14.png',
isActive: false,
lastActivity: subHours(now, 2).getTime(),
name: 'User 010a',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-11.png',
isActive: false,
lastActivity: subMinutes(now, 15).getTime(),
name: 'User 004a',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-12.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 007a',
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-13.png',
isActive: true,
lastActivity: now.getTime(),
name: 'User 009a',
}
];
};
export const ContactsButton = () => {
const popover = usePopover();
const contacts = useContacts();
return (
<>
<Tooltip title="Contacts">
<IconButton
onClick={popover.handleOpen}
ref={popover.anchorRef}
>
<SvgIcon>
<Users03Icon />
</SvgIcon>
</IconButton>
</Tooltip>
<ContactsPopover
anchorEl={popover.anchorRef.current}
contacts={contacts}
onClose={popover.handleClose}
open={popover.open}
/>
</>
);
};
