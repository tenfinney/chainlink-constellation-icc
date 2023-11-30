import { useCallback, useMemo, useState } from 'react';
import Bell01Icon from '@untitled-ui/icons-react/build/esm/Bell01';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import { usePopover } from 'src/hooks/use-popover';
import { notifications as initialNotifications } from './notifications';
import { NotificationsPopover } from './notifications-popover';
const useNotifications = () => {
const [notifications, setNotifications] = useState(initialNotifications);
const unread = useMemo(() => {
return notifications.reduce((acc, notification) => acc + (notification.read ? 0 : 1), 0);
}, [notifications]);
const handleRemoveOne = useCallback((notificationId) => {
setNotifications((prevState) => {
return prevState.filter((notification) => notification.id !== notificationId);
});
}, []);
const handleMarkAllAsRead = useCallback(() => {
setNotifications((prevState) => {
return prevState.map((notification) => ({
...notification,
read: true
}));
});
}, []);
return {
handleMarkAllAsRead,
handleRemoveOne,
notifications,
unread
};
};
export const NotificationsButton = () => {
const popover = usePopover();
const { handleRemoveOne, handleMarkAllAsRead, notifications, unread } = useNotifications();
return (
<>
<Tooltip title="Notifications">
<IconButton
ref={popover.anchorRef}
onClick={popover.handleOpen}
>
<Badge
color="primary"
badgeContent={unread}
>
<SvgIcon>
<Bell01Icon />
</SvgIcon>
</Badge>
</IconButton>
</Tooltip>
<NotificationsPopover
anchorEl={popover.anchorRef.current}
notifications={notifications}
onClose={popover.handleClose}
onMarkAllAsRead={handleMarkAllAsRead}
onRemoveOne={handleRemoveOne}
open={popover.open}
/>
</>
);
};
